---
layout: post
title: "VMware安装Ubuntu时无法全屏显示和无网络连接问题解决"
subtitle: ""
author: "cmbjx"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
  - VMware
  - Ubuntu
---



## 安装Ubuntu时无法全屏显示
- 安装时选试用，进入桌面后进入-设置-显示-调整分辨率，我是调到1920*1080
- 然后点击桌面的-安装，即可
![image](https://img.oo.me.eu.org/2091k/image/main/blog/20241216185303_thfrl90a51.png)
---
## 无网络连接问题解决
- 启动任务管理器-服务
- 找到VMware NAT service这几个
- 右键启动服务即可
- VMware选的是 NAT模式(N):与主机共享的专业网络
![image](https://img.oo.me.eu.org/2091k/image/main/blog/20241216185703_8dt6qbidhn.png)
