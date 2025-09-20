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
setlocal enabledelayedexpansion

:: 检查管理员权限
echo.
echo ========================================
echo           权限检查中...
echo ========================================
fltmc >nul 2>&1 || (
    echo [错误] 请以管理员身份运行此脚本！
    pause
    goto End
)
echo [成功] 已获取管理员权限
echo.

:: 保存当前完整的日期和时间
echo ========================================
echo           保存当前系统时间...
echo ========================================
for /f "delims=" %%a in ('powershell -command "(Get-Date).ToString('yyyy-MM-dd')"') do set "original_date=%%a"
for /f "delims=" %%a in ('powershell -command "(Get-Date).ToString('HH:mm:ss')"') do set "original_time=%%a"
echo 当前日期：!original_date!
echo 当前时间：!original_time!
echo.

:: 设置日期为2025年1月1日
echo ========================================
echo           调整系统日期...
echo ========================================
powershell -command "$newDate = [DateTime]::Parse('%original_time%'); Set-Date -Date (New-Object DateTime(2025, 1, 1, $newDate.Hour, $newDate.Minute, $newDate.Second))" >nul 2>&1
if !errorlevel! equ 0 (
    echo [成功] 日期已设置为: 2025-01-01
    echo        时间保持不变: !original_time!
) else (
    echo [错误] 日期设置失败，请手动设置为2025年1月1日
    pause
    goto End
)
echo.

:: 进入脚本目录
echo ========================================
echo           切换工作目录...
echo ========================================
cd /d %~dp0 || (
    echo [错误] 无法进入脚本目录
    pause
    goto End
)
echo 当前工作目录: %cd%
echo.

:: 启动程序
echo ========================================
echo           启动应用程序...
echo ========================================
if not exist "你的软件名称.exe" (
    echo [错误] 未找到程序文件：你的软件名称.exe
    pause
    goto End
)
echo 正在启动应用程序...
start /wait "你的软件名称" "你的软件名称.exe"
echo 应用程序已关闭
echo.

:: 恢复原始日期
echo ========================================
echo           恢复系统时间...
echo ========================================
powershell -command "$time = [DateTime]::Parse('%original_time%'); $date = [DateTime]::Parse('%original_date%'); Set-Date -Date (New-Object DateTime($date.Year, $date.Month, $date.Day, $time.Hour, $time.Minute, $time.Second))" >nul 2>&1
if !errorlevel! equ 0 (
    echo [成功] 日期已恢复为: !original_date!
    echo        时间已恢复为: !original_time!
) else (
    echo [警告] 时间恢复失败，尝试备用方案...
    powershell -command "Set-Date -Date '%original_date%T%original_time%'" >nul 2>&1 && (
        echo [成功] 日期已恢复为: !original_date!
        echo        时间已恢复为: !original_time!
    ) || (
        echo [错误] 自动恢复失败，请手动设置系统时间
        echo.
        echo 当前系统日期: 
        date
        echo 当前系统时间:
        time
        echo.
        echo 请手动恢复日期为: !original_date!
        echo 请手动恢复时间为: !original_time!
    )
)
echo.

:: 执行时间同步
echo ========================================
echo           同步网络时间...
echo ========================================
echo 正在与时间服务器同步...
w32tm /resync /force
echo.
echo [完成] 时间同步操作已完成
echo.

:End
echo ========================================
echo           操作执行完毕
echo ========================================
echo 按任意键退出...
pause >nul
endlocal

```


