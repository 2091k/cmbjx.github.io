---
layout: post
title: "BarTender利用VB打印随机字符串"
subtitle: ""
author: "今天风很大，银杏树叶黄了"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- BarTender
- 打印
---
#### BarTender利用VB打印随机字符串

- 每次单次打印时可随机输出数字或字母
- 数字或字母或个数可自己设置添加更改

```VB
' 定义8位串码的每一位字符集（对应：数字+2小写+1大写+2小写+2大写）
Dim charPools(7) ' 索引0-7对应串码第1-8位
charPools(0) = "0123456789"          ' 第1位：数字
charPools(1) = "abcdefghijklmnopqrstuvwxyz" ' 第2位：小写
charPools(2) = "abcdefghijklmnopqrstuvwxyz" ' 第3位：小写
charPools(3) = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ' 第4位：大写
charPools(4) = "abcdefghijklmnopqrstuvwxyz" ' 第5位：小写
charPools(5) = "abcdefghijklmnopqrstuvwxyz" ' 第6位：小写
charPools(6) = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ' 第7位：大写
charPools(7) = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ' 第8位：大写

Dim randomStr, i, poolLen, randomIndex
randomStr = ""
Randomize Timer ' 初始化随机数（避免重复）

' 逐位生成随机字符并拼接
For i = 0 To 7
    poolLen = Len(charPools(i)) ' 当前位字符集长度
    randomIndex = Int(Rnd() * poolLen) ' 生成0~poolLen-1的随机索引
    randomStr = randomStr & Mid(charPools(i), randomIndex + 1, 1) ' 拼接字符（Mid从1开始索引）
Next

' 将生成的随机串赋值给文本对象
Value = randomStr

```

![image](https://jasuimg.2091k.cn/2091k/image/main/001/20251124170602_ysrm8gssph.png)

