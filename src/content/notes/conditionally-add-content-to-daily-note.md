---
title: >-
  Conditionally adding content to my Obsidian daily note with the Templater
  plugin
slug: conditionally-add-content-to-daily-note
added: 2024-01-09T07:18:00.000Z
updated: 2024-01-09T07:18:00.000Z
excerpt: >-
  I wanted to add some work startup/shutdown checklists to my Daily Note in
  Obsidian, but I didn't want them going in on the days I don't work.
note: publish
publish: true
tags:
  - obsidian
---
I wanted to add some work startup/shutdown checklists to my [daily note](https://help.obsidian.md/Plugins/Daily+notes) in [Obsidian](https://obsidian.md/), but I didn't want them going in on the days I don't work. It turns out this is possible with the [Templater Plugin](https://github.com/SilentVoid13/Templater).

Templater essentially gives you the ability to run some JavaScript when a note is created via a template. This means you can conditionally change the content of your note depending on variables such as the current date or time.

In my daily note template, I check for the day name, and then add the checklists if it is one of my work days. It looks like this:

````
# <% tp.date.now('dddd') %>
<%* const day = tp.date.now('dd'); 
const dayIsWorkday = (day == 'Tu') || (day == 'We') || (day == 'Th') || (day == 'Fr');
if (dayIsWorkday) { %>
## 🚀 Workday start checklist
- [ ] Slack notifications
- [ ] Notion notifications
- [ ] GitHub notifications
- [ ] Make today's list
- [ ] Get crushing

## ☑️ WORK TODO
- [ ] 
<%* } %>

## 📕 Log
- 

<%*if (dayIsWorkday) { %>
## 😴 Shutdown routine
- [ ] Progress notes
- [ ] Update Notion cards
- [ ] Toggl track
- [ ] Quit all
<%* } %>


## 📝 Notes created today
```dataview 
LIST FROM "notes" or "projects"
WHERE file.cday = this.file.day
```

