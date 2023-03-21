---
title: Using regex with make find-and-replace in VS Code
slug: using-regex-with-and-find-and-replace
added: 2023-03-21 20:20
updated: 2023-03-21 20:20
tags: [development]
excerpt: "Because I needed to replace text on either side of the number, a simple find-and-replace term wasn't going to work. I needed regex."
note: publish
---

The context for how and why is [too niche](/learning-in-public-is-complicated/) for me to go in to here, but I had a bunch of files where I needed to change all instances of this:

`'FileClient:1643853467530'`

to this:

`'PenVersionFileClient:{"cpid":"1643853467530"}'`

Except for each instance, the id value (the number) was different.

I wanted to keep the number in there, but change the text that wraps it.

Because I needed to replace text on either side of the number, a simple find-and-replace term wasn't going to work. I needed regex.

To turn on search using regex, you want to make sure this option is selected:

![A screenshot of VS Code's search sidebar with "Use Regular Expression" selected](/images/regex-search.png)


To replace the text on either side of text, you want a regular expression that follows this pattern:

`/BEFORE_TEXT(.+?)AFTER_TEXT/`

where `BEFORE_TEXT` and `AFTER_TEXT` match the text on the left and the right of the text you want to wrap-replace.

Then, in the Replace input of the Search UI, you add a `$1` to wherever you want the original text to go.

`NEW_BEFORE_TEXT$1NEW_AFTER_TEXT`

For my case above, I used this:

**Search**: `'FileClient:(.+?)'` <br>
**Replace**: `'PenVersionFileClient:{"cpid":"$1"}'`



