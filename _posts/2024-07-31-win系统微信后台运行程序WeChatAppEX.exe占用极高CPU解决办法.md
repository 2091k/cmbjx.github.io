---
layout: post
title: "win系统微信后台运行程序WeChatAppEX.exe占用极高CPU解决办法"
subtitle: ""
author: "cmbjx"
header-img: "img/tu/wex.png"
header-mask: 0.4
tags:
  - Win
  - 微信
---

### WeChatAppEx.exe进程侵占CPU解决办法：

- 不使用小程序（大部分时在手机上使用）
- 不使用公众号（直接微信内浏览）
- 工作PC端使用微信时上面俩功能基本无用，纯沟通工具而已

### 关闭微信，把用户目录下
```sh
C:\Users\Administrator\AppData\Roaming\Tencent\WeChat\XPlugin\Plugins\RadiumWMPF
```

RadiumWMPF目录删除

新建一个RadiumWMPF文件夹，设置属性`拒绝`
![1](https://img.2091k.cn/file/4210dbd3952ce49296dc0.jpg)

然后重新打开微信，就会发现CPU占用变少了，

#### 影响：
微信浏览器不可用
小程序不可用
公众号不可用

只聊天用