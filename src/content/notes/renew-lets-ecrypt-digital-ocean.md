---
title: "Renew the Let's Encrypt certificate on your Digital Ocean Mastodon Instance"
slug: renew-lets-ecrypt-digital-ocean
added: 2023-03-21 20:20
updated: 2023-03-21 20:20
tags: [development]
excerpt: "I got an email from Let's Encrypt saying I need to renew my certificate. I couldn't find instructions to specifically renew certificates for Mastodon on Digital Ocean."
publish: true
---

I have my own [Mastodon instance](https://social.rachsmith.com). I set it up using Digital Ocean's [One-Click installer](https://www.digitalocean.com/community/tutorials/how-to-install-mastodon-with-digitalocean-marketplace-1-click) and it has been pretty easy to maintain so far.

I got an email from [Let's Encrypt](https://letsencrypt.org/)[^1] saying I need to renew my certificate. I couldn't find instructions to specifically renew certificates for Mastodon on Digital Ocean. My attempt at using the [generic instructions](https://docs.digitalocean.com/support/how-can-i-renew-lets-encrypt-certificates/) for renewing a certificate didn't work, because it turns out you need to turn your Mastodon service off first.

For posterity, here are all the steps:

## 1. SSH in to your droplet

## 2. Stop everything
`sudo systemctl stop mastodon-sidekiq`
`sudo systemctl stop mastodon-streaming`
`sudo systemctl stop mastodon-web`
`sudo systemctl stop nginx`

## 3. Renew the certificate
`sudo certbot renew`

## 4. Start up again
`sudo systemctl start nginx`
`sudo systemctl start mastodon-web`
`sudo systemctl start mastodon-streaming`
`sudo systemctl start mastodon-sidekiq`

[^1]: Do you remember the times before this existed and you had to pay for your SSL certificates? I do!