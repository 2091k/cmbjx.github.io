---
layout: post
title: "在telnet命令用tftp下载文件"
author: "魏无羡"
header-style: text
tags:
  - telnet
  - tftp
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