---
layout: post
title: "python代码打包成exe"
subtitle: ""
author: "Allen"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- python
- exe
---
## python代码打包成exe

#### 1.以win7为例，已安装好py环境，win7py支持到3.8

#### 2. 安装兼容版本
安装 PyInstaller 4.10（你之前用的是对的）和对应版本的 pyinstaller-hooks-contrib，版本不要太新：
```bash
pip install pyinstaller==4.10 pyinstaller-hooks-contrib==2021.2
```
#### 3.在代码目录下放置以下文件：
- app.py（你的Python文件）
- logo.ico（图标文件）
执行打包命令（在命令行中）：

```bash
pyinstaller --onefile --windowed --icon=logo.ico --add-data "logo.ico;." app.py
```

#### 4.第三步：验证打包结果
生成的exe文件会出现在 dist/ 目录

双击运行测试功能是否正常

