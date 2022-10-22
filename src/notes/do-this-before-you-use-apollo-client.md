---
title: Do this before you use Apollo Client
slug: do-this-before-you-use-apollo-client
added: 2022-08-28 14:06
updated: 2022-08-28 14:06
tags: [development]
excerpt: Read the docs. No really.
note: publish
---

[Apollo Client](https://www.apollographql.com/docs/react/) has been a crucial part of [CodePen's](https://codepen.io) frontend code from the moment we started using a GraphQL API on the backend. Before we had Apollo Client we had to handle the caching of state an request management ourselves. That was a lot of code to write.

The one thing I'll say though is to make sure you really understand what how cache normalization works before you use this tool. I thought I got it, but I didn't *reallllly* get it before I started building with it and it created a lot of confusion and heartache. When I got my head around the mental model of Objects and References in the cache, things fell in to place.

I would recommend reading these until you understand:
- [Caching in Apollo Client](https://www.apollographql.com/docs/react/caching/overview/)
- [Demystifying Cache Normalization](https://www.apollographql.com/blog/apollo-client/caching/demystifying-cache-normalization/)

You might be thinking "is she suggesting I read the docs? duh". I'm writing this for people like me who like to get their hands dirty before they [RTFM](https://www.dictionary.com/browse/rtfm#:~:text=abbreviation%20Slang.,get%20through%20to%20tech%20support.). Apollo Client is not the time for that.