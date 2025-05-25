---
title: 'Remove Shorts from your YouTube Subscriptions feed with :has()'
slug: remove-youtube-shorts
added: 2023-01-19T05:28:00.000Z
updated: 2023-01-20T03:41:00.000Z
excerpt: null
publish: true
tags:
  - development
---

I have nothing against short-form video content. TikTok is a lot of fun! YouTube shorts are... not it. I hate having them show up in my subscriptions feed! Today I figured out how to remove them from the feed with one line of CSS.

I wanted to set `display: none` on all items in the feed that had a child element that signified it was Short. Previously I'd have to go to JavaScript to do this sort of thing, but now we have the [:has() selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) I can do it with CSS. This means we can use a CSS-injecting extension like [User CSS](https://chrome.google.com/webstore/detail/user-css/okpjlejfhacmgjkmknjhadmkdbcldfcb?hl=en) or [Stylebot](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha?hl=en).

I'm using [Arc](https://arc.net/) as my browser, which has a CSS injection feature built-in via Style Boosts. 

Here's the CSS to add to your extension (or Boost if you're using Arc ) to hide all the Shorts:

**Update: [Jon Campbell](https://fosstodon.org/@healsdata/109719116763728009) pointed out the snippet I had here doesn't work on grid view of the subscriptions page, only the list view.** I've updated it so shorts are hidden on both views. To get a snippet that hid the correct things on list view *without* breaking grid view needed a combination of `:not()` and `:has()`. I've definitely learned some things about `:has()` during this process!

```css
/* Grid View */
#items.ytd-grid-renderer>ytd-grid-video-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="SHORTS"]) {
  display: none;
}

/* List View */
ytd-item-section-renderer:not(:has(ytd-grid-renderer)):has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="SHORTS"]) {
  display: none; 
} 

```

Hooray for the [patchability of the Web](https://daverupert.com/2022/09/patchability-of-the-open-web/)!
