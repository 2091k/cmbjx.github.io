---
layout: post
title: "电脑软链接cmd教程"
subtitle: ""
author: "每天要好心情哦，我的朋友"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- cmd
- 软链接
---
#### mklink命令把C盘某个软件内容链接到D盘，节省C盘空间

软链接（mklink）完整操作教程

> 先把 C 盘 Steam 完整剪切到 D 盘，再用 Windows mklink 创建目录符号链接，C 盘原路径只是一个 “快捷方式”，实际文件全在 D 盘

### 教程过程

1.先关闭需要移动的软件进程

2.先把需要链接的文件夹剪切到D盘，连同文件夹

3.win+R 输入cmd

4.执行链接命令（二选一，按你的路径）
例如 1：默认路径 C:\Program Files (x86)\Steam 迁移到 D:\Steam

```sh
mklink /J "C:\Program Files (x86)\Steam" "D:\Steam"
```

---

参数说明：
/J = 目录联接（最适合游戏 / 软件，兼容所有程序）
第一个引号：原来 C 盘的空路径（已经剪切走，现在是空的）
第二个引号：D 盘真实存放文件夹


常见报错解决
无法创建文件，该文件已存在
→ 说明 C 盘还有 Steam 文件夹没剪切走，回去把 C 盘 Steam 文件夹删掉 / 移走再执行命令


