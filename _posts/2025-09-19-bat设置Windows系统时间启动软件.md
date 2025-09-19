---
layout: post
title: "bat设置Windows系统时间启动软件"
subtitle: ""
author: "今天下了一天的雨，天有点冷"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- bat
- Windows
---
#### bat设置Windows系统时间启动软件 软件关闭后 改回当前时间

- 适用于软件校验本地激活时间
- 代码如下

```bat
@echo off
:: 检查是否以管理员身份运行
fltmc >nul 2>&1 || (echo 请以管理员身份运行此脚本 && pause && exit /b 1)

:: 保存当前时间（用于设置日期后恢复原时间）
for /f "tokens=1-2 delims=:" %%a in ('time /t') do set current_time=%%a:%%b

:: 尝试设置日期为2025年1月1日
echo 正在设置系统日期为2025年1月1日...
set "success=0"

:: 尝试多种日期格式
date 2025-01-01 >nul 2>&1 && set success=1
if %success% equ 0 (
    date 20250101 >nul 2>&1 && set success=1
)
if %success% equ 0 (
    date 2025年01月01日 >nul 2>&1 && set success=1
)

:: 如果日期设置失败，提示用户
if %success% equ 0 (
    echo 日期设置失败，请手动设置日期为2025年1月1日
    pause
    exit /b 1
)

:: 恢复原时间（因为设置日期可能会改变时间）
time %current_time% >nul 2>&1

:: 进入指定目录
echo 正在进入程序目录...
cd /d "F:\移动\001\666"
if %errorlevel% neq 0 (
    echo 无法进入程序目录，请检查路径是否正确
    pause
    exit /b 1
)

:: 启动程序并等待其关闭
echo 正在启动软件...
start /wait "你的软件名称" "软件.exe"

:: 程序关闭后，同步系统时间为北京时间
echo 程序已关闭，正在同步系统时间为北京时间...
w32tm /config /syncfromflags:manual /manualpeerlist:"time.windows.com,0x8 ntp.aliyun.com,0x8" >nul 2>&1
w32tm /config /update >nul 2>&1
w32tm /resync /force >nul 2>&1

:: 检查时间同步是否成功
if %errorlevel% equ 0 (
    echo 系统时间已成功同步为北京时间
) else (
    echo 时间同步失败，建议手动同步时间
)

pause

```

