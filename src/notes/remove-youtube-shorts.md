---
title: "Remove Shorts from your YouTube Subscriptions feed with :has()"
slug: remove-youtube-shorts
added: 2023-01-19 15:28
updated: 2023-01-19 15:28
tags: [development]
excerpt: 
note: publish
---

I have nothing against short-form video content. TikTok is a lot of fun! YouTube shorts are... not it. I hate having them show up in my subscriptions feed! Today I figured out how to remove them from the feed with one line of CSS.

I wanted to set `display: none` on all items in the feed that had a child element that signified it was Short. Previously I'd have to go to JavaScript to do this sort of thing, but now we have the [:has() selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) I can do it with CSS. This means we can use a CSS-injecting extension like [User CSS](https://chrome.google.com/webstore/detail/user-css/okpjlejfhacmgjkmknjhadmkdbcldfcb?hl=en) or [Stylebot](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha?hl=en).

I'm using [Arc](https://arc.net/) as my browser, which has a CSS injection feature built-in via Style Boosts. 

Here's the CSS to add to your extension (or Boost if you're using Arc ) to hide all the Shorts:

```css
ytd-item-section-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="SHORTS"]) {
  display: none;
}
```

Hooray for the [patchability of the Web](https://daverupert.com/2022/09/patchability-of-the-open-web/)!