---
layout: post
title: "BarTender设置默认打开方式"
subtitle: ""
author: "每天要好心情哦，我的朋友"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- BarTender
- BT
---
#### 有的电脑默认打开方式无法修改

- 所以用修改注册表方法，默认用软件路径打开

- 修改路径后，导入注册表

- 再重启资源管理器

```sh
Windows Registry Editor Version 5.00

; ====================== 只需要修改这里的路径 ======================
; 把下面双引号里的路径改成你电脑上 bartend.exe 的真实路径
; 只改这一行！其他全部自动套用
#define BARTENDER_PATH "C:\Program Files\Seagull\BarTender 2019\bartend.exe"
; ==================================================================

; 删除锁定的UserChoice（解决无法修改默认打开方式问题）
[-HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.btw\UserChoice]

; 关联.btw文件后缀
[HKEY_CLASSES_ROOT\.btw]
@="Bartender.Document"

; 设置默认打开程序（自动使用上方定义的路径）
[HKEY_CLASSES_ROOT\Bartender.Document\shell\open\command]
@=strreplace("%BARTENDER_PATH%", "\", "\\") \"%1\"

; 注册到系统打开方式列表（自动使用上方定义的路径）
[HKEY_CLASSES_ROOT\Applications\bartend.exe\shell\open\command]
@=strreplace("%BARTENDER_PATH%", "\", "\\") \"%1\"
```

`win+r`输入`cmd`

```sh
taskkill /f /im explorer.exe && start explorer.exe
```