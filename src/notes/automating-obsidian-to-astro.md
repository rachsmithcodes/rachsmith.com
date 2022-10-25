---
title: Automating the process for moving notes from my Obsidian vault to my Astro site
slug: automating-obsidian-to-astro
added: 2022-10-26 08:13
updated: 2022-10-26 08:13
tags: [development]
excerpt: I wrote a script to copy notes from my private vault to my public site.
note: publish
---

Lately, I've been writing the drafts of the notes on this site in my [Obsidian vault](https://obsidian.md/). When I want to publish them, I would copy the contents over to the src directory of my [Astro site code](/initial-thoughts-on-astro/), use the [VSCode Grammarly extension](https://marketplace.visualstudio.com/items?itemName=znck.grammarly) to proof read, add some more frontmatter and push to GitHub. 

I was doing this manually, and it was making publishing a note a *whole thing*. In the interest of [publishing more frequently](/atomic-linked-notes/), I thought I would try and automate parts of the process of getting an obsidian note in to the github repo. 

I wrote a [Node.js script](https://nodejs.dev/en/learn/run-nodejs-scripts-from-the-command-line/) that reads all the notes in my vault, checking for the ones with frontmatter that include a `slug` and `note` status value of `publish`. It then checks the contents of the note for [internal links](https://help.obsidian.md/How+to/Internal+link) (aka wikilinks) that link to other published notes, and replaces them with markdown links. If the note isn't published, link syntax is removed. This way I can link freely between notes in my own vault without worrying about whether a note is published or not.

After processing the notes, the script copies them to the `src` location in this site's repo. Then I can just use the git diff to make sure everything looks like it should before pushing.

At first I tried to get fancy and convert the notes in to a markdown syntax tree with [mdast-util-from-markdown](https://github.com/syntax-tree/mdast-util-from-markdown) and do the processing with that. But I ended up just using a series of `indexOf` checks, `split` calls and a little regex to achieve what I need. 

It is a pretty rudimentary script but I'll share here incase you would like to do something similar with your vault.

##### index.js
```javascript
import { promises as fsp } from "fs";
import { homedir } from "os";

const vaultImagesPath = homedir() + "/Obsidian/vault/images";
const vaultNotesPath = homedir() + "/Obsidian/vault/notes";
const siteImagesPath = homedir() + "/Development/rachsmith.com/public/images";
const siteNotesPath = homedir() + "/Development/rachsmith.com/src/notes";

async function getNote(fileName) {
  const noteContent = await fsp.readFile(
    vaultNotesPath + "/" + fileName,
    "utf-8"
  );

  if (noteContent.indexOf("---") != 0) return null;

  const frontmatterText = noteContent.split("---")[1];
  // convert frontmatter to object
  const frontmatter = frontmatterText.split("\n").reduce((object, line) => {
    const [key, value] = line.split(":");
    if (key && value) {
      // some yaml strings are quoted
      if (value.trim().indexOf('"') == 0) {
        object[key.trim()] = value.trim().slice(1, -1);
      } else {
        object[key.trim()] = value.trim();
      }
    }
    return object;
  }, {});

  if (!frontmatter.slug) return null;
  if (frontmatter.note !== "publish") return null;

  return {
    vaultTitle: fileName.split(".md")[0],
    slug: frontmatter.slug,
    content: noteContent,
  };
}

async function readNotes() {
  let noteFileNames = await fsp.readdir(vaultNotesPath);
  noteFileNames = noteFileNames.filter((fileName) => fileName.endsWith(".md"));
  const notes = await Promise.all(
    noteFileNames.map((noteFileName) => getNote(noteFileName))
  );
  // filter out null values
  return notes.filter((note) => note);
}

function processNotes(notes) {
  const regex = /\[\[(.+?)\]\]/g;
  return notes.map((note) => {
    // check for wikilinks
    const matches = note.content.match(regex);
    if (matches) {
      matches.forEach((match) => {
        const link = match.slice(2, -2);
        const linkParts = link.split("|");
        const linkText = linkParts[1] || linkParts[0];
        const linkedNote = notes.find(
          (note) => note.vaultTitle === linkParts[0]
        );
        // if there is a linked note, replace with markdown link
        if (linkedNote) {
          note.content = note.content.replace(
            match,
            `[${linkText}](/${linkedNote.slug}/)`
          );
        } else {
          // if there is no linked note, remove wikilink
          note.content = note.content.replace(match, linkText);
        }
      });
    }
    return note;
  });
}

async function writeNotes() {
  const notes = await readNotes();
  const processedNotes = processNotes(notes);

  return Promise.all(
    processedNotes.map((note) =>
      fsp.writeFile(siteNotesPath + "/" + note.slug + ".md", note.content)
    )
  );
}

async function copyImages() {
  const images = await fsp.readdir(vaultImagesPath);
  return Promise.all(images.map((image) => copyImage(image)));
}

async function copyImage(image) {
  return fsp.copyFile(
    vaultImagesPath + "/" + image,
    siteImagesPath + "/" + image
  );
}

console.log("writing notes...");
await writeNotes();
console.log("done writing notes.");

console.log("copying images...");
await copyImages();
console.log("done copying images.");

```