---
layout: post
title: "BarTender打印数据保存成Excel"
subtitle: ""
author: "晴天，微冷"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- BarTender
- Excel
---
#### powershell命令调用[exe](https://wwbda.lanzouv.com/idxxd3h9a2da)文件进行转换

```shell
powershell -Command "Start-Process -FilePath 'C:\BarTender\Log\txt_to_excel.exe' -WorkingDirectory 'C:\BarTender\Log' -WindowStyle Hidden -Verb RunAs""
```

#### 实际使用powershell命令
![image](https://jasuimg.2091k.cn/2091k/image/main/001/20260124192304_z5s2yldvn2.png)
