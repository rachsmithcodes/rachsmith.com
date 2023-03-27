import 'astro/jsx-runtime';

export function notesAndTags(allNotes) {
  const notes = sortedNotes(allNotes);
  const tags = noteTags(notes);
  return { allNotes: notes, allTags: tags };
}

function sortedNotes(allNotes) {
  allNotes = allNotes.sort((a, b) => {
    return new Date(b.data.added).getTime() - new Date(a.data.added).getTime();
  });
  return allNotes;
}

function noteTags(notes) {
  return notes.reduce((allTags, note) => {
    const noteTags = note.data.tags;
    if (noteTags) {
      noteTags.forEach((tag) => {
        if (!allTags[tag]) {
          allTags[tag] = [];
        }
        allTags[tag].push(note);
      });
    }
    return allTags;
  }, {});
}
