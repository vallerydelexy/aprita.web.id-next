---
id: 4
title: 'Cara generate PKCS8 RSA Public & Private Key'
author: Rizki Aprita
slug: cara-generate-pkcs8-rsa-public-dan-private-key
description: null
thumbnailUrl: /images/post/rsa.png
thumbnailAlt: 'GenP, Creative cracking community'
date: 'Jul 17, 2022'
draft: false
tags:
    - rsa
    - encrypt
    - decrypt
    - openssl
categories:
    - encryption
---
# how to create RSA public and private key pairs in PKCS#8 format

This article explains how to create RSA public and private key pairs in PKCS#8 format.
But first, lets make sure we have installed git. Why? because inside git theres openssl that we need to generate all this stuff.
if you have already installed git in your system, then look in `C:\Program Files\Git\usr\bin`.

The key to achieving this is basically a three-step process:

1. Create key pair
`openssl genrsa -out keypair.pem 2048`

2. Extract public part
`openssl rsa -in keypair.pem -pubout -out publickey.crt`
At this point you have your public key called publickey.crt

3. Extract private part
`openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in keypair.pem -out pkcs8.key`
At this point, you have your private key and it’s called pkcs8.key

 

Reference
https://stackoverflow.com/questions/44474516/how-to-create-public-and-private-key-with-openssl