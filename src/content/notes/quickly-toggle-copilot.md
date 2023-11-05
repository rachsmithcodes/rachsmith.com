---
title: Quickly toggle Copilot suggestions on and off with your keyboard
slug: quickly-toggle-copilot
added: 2022-08-25 14:31
updated: 2022-08-25 14:31
tags: [development]
excerpt: I found a way to toggle copilot suggestions off and on with my keyboard
publish: true
---

Overall, [I'm a fan of GitHub Copilot](/maybe-im-in-the-sweet-spot/). Sometimes I just want it to get out of the way. I wanted to figure out how to toggle it off and on again with my keyboard.

At first I figured I could assign the extension's enable/disable command to a [VSCode](https://code.visualstudio.com/) keyboard shortcut.

##### keybindings.json

```json
[
  {
    "key": "ctrl+c",
    "command": "github.copilot.toggleCopilot",
    "when": "editorFocus"
  }
]
```

But then when I went to use the shortcut to disable it, the extension popped up this confirmation dialog in the corner. The focus was still in the editor so there was no way to select 'Disable Globally' without using my mouse. Super annoying.

<figure>
<img src="/images/copilot-dialog.png" alt="a dialog message asking \"Would you like to disable Copilot?\" And providing the options \"Disable Globally\" and \"Disable for this file only\" />
<figcaption>why?</figcaption>
</figure>

<br/>

I went to the [GitHub community discussions] to see if anyone had requested a change to this behaviour. It turns out there were multiple posts asking about this, but [one of them](https://github.com/community/community/discussions/7553) included a workaround from [Dan Davidson](https://github.com/dandavison).

It turns out we can attach a keyboard command to update the workspace setting `github.copilot.inlineSuggest.enable`. When that setting is set to false, Copilot will stop with the inline suggestions.

By using the [Settings Cycler](https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-settings-cycler) extension (first time I'd heard about this one, btw) we can assign a keyboard shortcut to toggle the setting on and off. Here's mine (I chose to use `ctrl+c`):

##### keybindings.json

```json
{
  "key": "ctrl+c",
  "command": "settings.cycle.copilot",
  "when": "editorFocus"
}
```

##### settings.json

```json
"settings.cycle": [{
   id": "copilot",
     "overrideWorkspaceSettings": true,
     "values": [{
       "github.copilot.inlineSuggest.enable": false
     },
     {
       "github.copilot.inlineSuggest.enable": true
     }
  ]},
],
```
