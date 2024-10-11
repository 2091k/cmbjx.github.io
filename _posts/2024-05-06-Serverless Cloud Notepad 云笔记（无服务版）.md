---
layout: post
title: "Serverless Cloud Notepad 云笔记（无服务版）"
subtitle: ""
author: "cmbjx"
header-img: "img/bg-little-universe.jpg"
header-mask: 0.4
tags:
  - Notepad
  - 云笔记
---


## ✨ 功能

- ✏ 无需登录/注册, 即刻开始书写
- 💾 自动保存
- ❌ 无需服务端或数据库
- ⚡ 高可用性、高性能（只要CF不倒闭🤣）
- 📦 轻松部署私有化版本（如果你有自己的域名）
- 🌍 支持中文pathname

## 🔨 使用

- 直接访问 `/` 会新建一篇随机名字的笔记

- 访问 `/随便什么` 查看/编辑指定名称的笔记

现在就试试！ [notepad.2091k.cn](https://notepad.2091k.cn)

## 💻 兼容性

- 任何现代浏览器 (移动端可用)

## 📦 私有化部署

- 申请创建你自己的Work和KV（免费版就好~~一起白嫖到CF倒闭~~） [workers.cloudflare.com](https://workers.cloudflare.com/).
- 下载仓库代码，编辑 `wrangler.toml`:
```sh
kv_namespaces = [
  { binding = "NOTES", id = "<这里填你自己的第1个KV id>" },
  { binding = "SHARE", id = "<这里填你自己的第2个KV id>" }
]
```
- 执行命令推送代码到 Cloudflare
```sh
$ npm i
$ npm run publish
```
- 给你的域名添加一条CNAME解析记录，指向你刚刚创建的Work地址（如果你有自己的域名的话）



## 完整教程

- 安装node.js,安装Wrangler;
  
- nodejs下载地址https://nodejs.org/en/download

- 在cloudflare账号里，Workers下面KV里创建一个命名空间，名称为（大写）NOTES，然后复制后面的ID备用；

- 安装好nodejs后，Windows里Ctrl+鼠标右键，调出命令窗口
```sh
npm version
```
![请输入图片描述][1]

- 然后安装 Wrangle
```sh
npm install -g wrangle
```
## 下载项目到电脑解压，进入目录cloud-notepad上传项目到cf

- 项目地址[https://github.com/2091k/cloud-notepad](https://github.com/2091k/cloud-notepad)

- 打开命令窗口 输入

- 浏览器弹出登录，登录后就可以

```sh
wrangler login
npm -i
npm run publish
```
- 如果上面的命令上传失败用下面的命令即可

```sh
wrangler publish
```

- 如果有报错 先运行

```sh
npm install

新的上传命令

wrangler deploy
```

- 然后再CF里就能看到新的Workers项目了，可以添加自己的域名

  [1]: https://tgimg.2091k.cn/file/eba133810db421accdfa0.png
