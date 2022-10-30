---
title: Keyboard shortcuts for navigating a large file in VSCode
slug: keyboard-shortcuts-large-file-vscode
added: 2022-10-31 06:00
updated: 2022-10-31 06:00
tags: [development]
excerpt: I use these shortcuts for moving around and finding what I need in a large file.
note: publish
---

When writing the code gets a bit dull at my job, I try to make things more interesting by setting myself a challenge in other ways. Currently, I am training myself to use the keyboard to get around VSCode instead of a mouse. I'll list a few of my favourites (on macOS).

### Fold all: command+k command+0

This folds all the foldable sections of a file. I find it makes files easier to scan at a high level.

### Go to Symbol: shift+command+O

This allows you to search for and jump to any symbol on the page. Great for getting to the start of a method or function.

### Go to line: control+G

Enter the line number, and there you go. Great for when you're dealing with stack traces. I use it more to jump around a file quickly without needing to scroll.

### control+option (with Space Block Jumper extension): Jump to next empty line

I use the [Space Block Jumper](https://marketplace.visualstudio.com/items?itemName=jmfirth.vsc-space-block-jumper) extension to do this one. It takes you to the next blank line in the file. It allows you to move through a file faster than you would by scrolling with the up/down keys.
