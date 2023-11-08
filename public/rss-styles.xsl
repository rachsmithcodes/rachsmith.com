<?xml version="1.0" encoding="utf-8"?>
<!--

# Pretty Feed

Styles an RSS/Atom feed, making it friendly for humans viewers, and adds a link
to aboutfeeds.com for new user onboarding. See it in action:

   https://interconnected.org/home/feed


## How to use

1. Download this XML stylesheet from the following URL and host it on your own
   domain (this is a limitation of XSL in browsers):

   https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl

2. Include the XSL at the top of the RSS/Atom feed, like:

```
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet href="/PATH-TO-YOUR-STYLES/pretty-feed-v3.xsl" type="text/xsl"?>
```

3. Serve the feed with the following HTTP headers:

```
Content-Type: application/xml; charset=utf-8  # not application/rss+xml
x-content-type-options: nosniff
```

(These headers are required to style feeds for users with Safari on iOS/Mac.)



## Limitations

- Styling the feed *prevents* the browser from automatically opening a
  newsreader application. This is a trade off, but it's a benefit to new users
  who won't have a newsreader installed, and they are saved from seeing or
  downloaded obscure XML content. For existing newsreader users, they will know
  to copy-and-paste the feed URL, and they get the benefit of an in-browser feed
  preview.
- Feed styling, for all browsers, is only available to site owners who control
  their own platform. The need to add both XML and HTTP headers makes this a
  limited solution.


## Credits

pretty-feed is based on work by lepture.com:

   https://lepture.com/en/2019/rss-style-with-xsl

This current version is maintained by aboutfeeds.com:

   https://github.com/genmon/aboutfeeds


## Feedback

This file is in BETA. Please test and contribute to the discussion:

     https://github.com/genmon/aboutfeeds/issues/8

-->
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title" /> Web Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <style>
          /* barlow-regular - latin */
          @font-face {
          font-display: swap; /* Check
          https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other
          options. */
          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          src: url('/fonts/barlow-v12-latin-regular.eot'); /* IE9 Compat Modes */
          src: url('/fonts/barlow-v12-latin-regular.eot?#iefix')
          format('embedded-opentype'),
          /* IE6-IE8 */ url('/fonts/barlow-v12-latin-regular.woff2')
          format('woff2'),
          /* Super Modern Browsers */ url('/fonts/barlow-v12-latin-regular.woff')
          format('woff'),
          /* Modern Browsers */ url('/fonts/barlow-v12-latin-regular.ttf')
          format('truetype'),
          /* Safari, Android, iOS */
          url('/fonts/barlow-v12-latin-regular.svg#Barlow') format('svg'); /* Legacy iOS */
          }
          /* barlow-italic - latin */
          @font-face {
          font-display: swap; /* Check
          https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other
          options. */
          font-family: 'Barlow';
          font-style: italic;
          font-weight: 400;
          src: url('/fonts/barlow-v12-latin-italic.eot'); /* IE9 Compat Modes */
          src: url('/fonts/barlow-v12-latin-italic.eot?#iefix')
          format('embedded-opentype'),
          /* IE6-IE8 */ url('/fonts/barlow-v12-latin-italic.woff2')
          format('woff2'),
          /* Super Modern Browsers */ url('/fonts/barlow-v12-latin-italic.woff')
          format('woff'),
          /* Modern Browsers */ url('/fonts/barlow-v12-latin-italic.ttf')
          format('truetype'),
          /* Safari, Android, iOS */
          url('/fonts/barlow-v12-latin-italic.svg#Barlow') format('svg'); /* Legacy iOS */
          }
          /* barlow-regular - latin */
          @font-face {
          font-display: swap; /* Check
          https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other
          options. */
          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          src: url('../fonts/barlow-v12-latin-regular.eot'); /* IE9 Compat Modes */
          src: url('../fonts/barlow-v12-latin-regular.eot?#iefix')
          format('embedded-opentype'),
          /* IE6-IE8 */ url('../fonts/barlow-v12-latin-regular.woff2')
          format('woff2'),
          /* Super Modern Browsers */
          url('../fonts/barlow-v12-latin-regular.woff') format('woff'),
          /* Modern Browsers */ url('../fonts/barlow-v12-latin-regular.ttf')
          format('truetype'),
          /* Safari, Android, iOS */
          url('../fonts/barlow-v12-latin-regular.svg#Barlow') format('svg'); /* Legacy iOS */
          }
          /* barlow-700 - latin */
          @font-face {
          font-display: swap; /* Check
          https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other
          options. */
          font-family: 'Barlow';
          font-style: normal;
          font-weight: 700;
          src: url('../fonts/barlow-v12-latin-700.eot'); /* IE9 Compat Modes */
          src: url('../fonts/barlow-v12-latin-700.eot?#iefix')
          format('embedded-opentype'),
          /* IE6-IE8 */ url('../fonts/barlow-v12-latin-700.woff2') format('woff2'),
          /* Super Modern Browsers */ url('../fonts/barlow-v12-latin-700.woff')
          format('woff'),
          /* Modern Browsers */ url('../fonts/barlow-v12-latin-700.ttf')
          format('truetype'),
          /* Safari, Android, iOS */
          url('../fonts/barlow-v12-latin-700.svg#Barlow') format('svg'); /* Legacy iOS */
          }
          /* barlow-700italic - latin */
          @font-face {
          font-display: swap; /* Check
          https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other
          options. */
          font-family: 'Barlow';
          font-style: italic;
          font-weight: 700;
          src: url('../fonts/barlow-v12-latin-700italic.eot'); /* IE9 Compat Modes */
          src: url('../fonts/barlow-v12-latin-700italic.eot?#iefix')
          format('embedded-opentype'),
          /* IE6-IE8 */ url('../fonts/barlow-v12-latin-700italic.woff2')
          format('woff2'),
          /* Super Modern Browsers */
          url('../fonts/barlow-v12-latin-700italic.woff') format('woff'),
          /* Modern Browsers */ url('../fonts/barlow-v12-latin-700italic.ttf')
          format('truetype'),
          /* Safari, Android, iOS */
          url('../fonts/barlow-v12-latin-700italic.svg#Barlow') format('svg'); /* Legacy iOS */
          }

          :root {
          --sidebar-width: 260px;
          --font-mono: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
          monospace;
          --background-color: #f2f0e9;
          --text-color: #0b1733;
          --second-text-color: #3f434d;
          --red: #e31104;
          --orange: #ef5f1f;
          --pink: #c80e84;
          --green: #48a71e;
          --light-blue: #1b81b4;
          --purple: #5741ac;
          --blue: #393f85;
          --accent-color: var(--purple);
          --gradient-color: linear-gradient(
          45deg,
          hsl(3deg 97% 45%) 0%,
          hsl(348deg 100% 45%) 7%,
          hsl(341deg 100% 45%) 14%,
          hsl(334deg 100% 44%) 21%,
          hsl(326deg 100% 41%) 29%,
          hsl(328deg 97% 42%) 36%,
          hsl(357deg 71% 53%) 43%,
          hsl(29deg 100% 39%) 50%,
          hsl(50deg 100% 31%) 57%,
          hsl(82deg 100% 31%) 64%,
          hsl(150deg 100% 32%) 71%,
          hsl(180deg 100% 30%) 79%,
          hsl(200deg 100% 39%) 86%,
          hsl(210deg 100% 41%) 93%,
          hsl(252deg 45% 46%) 100%
          );

          --size-step-0: 1rem;
          --size-step-1: 1.25rem;
          --size-step-2: 1.56rem;
          --size-step-3: 1.95rem;
          --size-step-4: 2.43rem;
          }

          .dark-mode {
          --background-color: #181b3a;
          --text-color: #f2f0e9;
          --second-text-color: #c9c6d1;
          --accent-color: var(--pink);
          --red: #db5c55;
          --pink: #c76399;
          --blue: #548ab7;
          --purple: #867cc0;
          }

          h1,
          h2,
          h3,
          h4,
          strong {
          font-weight: 700;
          }

          body {
          font-family: sans-serif;
          font-size: 1.2rem;
          line-height: 1.5;
          font-family: 'Barlow', sans-serif;
          background: var(--background-color);
          color: var(--text-color);
          /* letter-spacing: 0.05ch; */
          }

          .lori {
          width: 200px;
          position: absolute;
          top: 0;
          left: -80px;
          transform: rotate(20deg);
          }

          .nav {
          max-width: 660px;
          padding: 0.4em 16px 1em 120px;
          }

          .container {
          max-width: 800px;
          padding: 0.5em;
          }

          .item {
          margin-bottom: 0.2em;
          }
        </style>
      </head>
      <body>
        <nav class="nav">
          <img src="/images/lori.png" alt="My lorikeet" class="lori" />
          <p>
            <strong>Hey, this is my web feed,</strong> also known as an RSS feed! </p>
          <p> You can <strong>subscribe</strong> to my notes by copying the URL from the address bar
            into your newsreader. </p>
          <p class="text-gray"> Visit <a href="https://aboutfeeds.com">About Feeds</a> to get
            started with newsreaders and subscribing. It’s free. </p>
        </nav>
        <div class="container">
          <header>
            <a>
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link" />
              </xsl:attribute> Visit
              Website &#x2192; </a>
          </header>
          <h2>Recent Items</h2>
          <xsl:for-each select="/rss/channel/item">
            <div>
              <h3 class="item">
                <a target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="link" />
                  </xsl:attribute>
                  <xsl:value-of select="title" />
                </a>
              </h3>
              <small class="text-gray"> Published: <xsl:value-of select="pubDate" />
              </small>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>