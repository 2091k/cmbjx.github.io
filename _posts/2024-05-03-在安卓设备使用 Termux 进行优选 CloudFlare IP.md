---
layout: post
title: "在安卓设备使用 Termux 进行优选 CloudFlare IP"
subtitle: "「Pursuing comes from love, ultimate comes from dreams」"
author: "cmbjx"
header-img: "img/bg-me-2022.jpg"
header-mask: 0.4
tags:
  - Termux
  - CloudFlare
  - IP
---

**打开Termux，输入以下命令安装依赖**
```js
pkg update && pkg install wget curl
```
**输入以下命令，下载优选代码并运行** 
```js
wget -N https://raw.githubusercontent.com/badafans/better-cloudflare-ip/master/shell/cf.sh
```
**如为移动用户，由于项目依赖地址可能被移动SNI阻断，请手动创建四个文件，分别为`colo.txt`、`ips-v4.txt`、`ips-v6.txt`和`url.txt`，内容在以下的链接内，其他运营商用户如无法下载可以使用本步骤**
colo.txt：
```js
wget https://www.baipiao.eu.org/cloudflare/colo -O colo.txt
```
ips-v4.txt：
```js
wget https://www.baipiao.eu.org/cloudflare/ips-v4 -O ips-v4.txt
```
ips-v6.txt：
```js
wget https://www.baipiao.eu.org/cloudflare/ips-v6 -O ips-v6.txt
```
url.txt：
```js
wget https://www.baipiao.eu.org/cloudflare/url -O url.txt
```
![请输入图片描述][2]
**第一次执行的时候会下载依赖文件，如无特殊意外的话会来到主界面。根据自己的需要，选择对应的选项进行优选。输入设置的带宽值（不需要最低也不需要太高，适中即可）及测试线程数**

**等待一会之后，程序将会显示最优的 cf ip。**
![请输入图片描述][3]


  [2]: https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230718175945.png
  [3]: https://cdn.jsdelivr.net/gh/Misaka-blog/imgs@main/20230718180319.png
