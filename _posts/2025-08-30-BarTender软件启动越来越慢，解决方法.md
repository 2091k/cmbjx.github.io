---
layout: post
title: "BarTender软件启动越来越慢，解决方法"
subtitle: ""
author: "每天要好心情哦，我的朋友"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- BarTender
- 
---
#### BarTender缓存清理

WIN+R 输入cmd后运行下面代码即可清理bartender缓存，解决软件启动缓慢问题

```cmd
del /f /s /q C:\ProgramData\Seagull
del /f /s /q C:\Users\%USERNAME%\Documents\BarTender
```

下面是制作好的bat代码，直接运行即可

```bat
@echo off
title                 魏无羡@艾伦BT软件                         
color A
echo 正在准备清空BarTender缓存文件...
echo ========================

del /f /s /q C:\ProgramData\Seagull
del /f /s /q C:\Users\%USERNAME%\Documents\BarTender


    
    echo.
    echo BarTender优化完成
    pause
```


- 如需要BarTender标签打印软件和使用问题

- 抖音搜索群:859115183729
