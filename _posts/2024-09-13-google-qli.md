---
layout: post
title: "电脑C盘清理"
subtitle: ""
author: "cmbjx"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
  - 电脑
  - C盘
---

## 如何清理电脑C盘的缓存文件

> 我把软件都装在D盘了，为啥C盘越来越大呢，今天发现，原来都是Google浏览器的锅

> 因为我使用浏览器比较多，你每访问一个网页，就会在本地存下来，导致C盘越来越大，就算你把浏览器装D盘，缓存文件还是在C盘的

> 下面是清理方法

### 把下面文件夹删除即可，我的竟然占用了好几个GB

```bat

C:\Users\Administrator\AppData\Local\env-kit

C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Default\Cache\*.*

C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Default\Code Cache\*.*

C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Default\IndexedDB\*.*

C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Default\Service Worker\CacheStorage\*.*

C:\Users\Administrator\AppData\Local\Microsoft\deg\*.*
```
