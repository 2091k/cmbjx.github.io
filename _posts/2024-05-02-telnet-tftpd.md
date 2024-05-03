---
layout: post
title: "telnet  tftpd"
description: "「生活不止眼前的苟且 还有诗与远方 ...」"
author: "cmbjx"
header-style: text
header-img: "img/bg-material.jpg"
header-mask: 0.1
tags:
  - telnet
  - tftpd
---


## telnet 登录后进入目

```bash
cd /dev
```

### 电脑打开tftp 选中电脑的网卡，同一局域网中

### 下载文件到电脑tftp目录

```bash
tftp -p -l mtd0 192.168.10.3
```

### 上传tftp目录下的文件到当前目录

```bash
tftp -g -l mtd0 192.168.10.3
```



- [tftp下载链接][1]


  [1]: https://wwi.lanzoup.com/i65rh1xe1rda
