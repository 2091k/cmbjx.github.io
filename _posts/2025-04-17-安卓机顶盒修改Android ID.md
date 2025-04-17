---
layout: post
title: "安卓机顶盒修改Android ID"
subtitle: ""
author: "Allen"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- 安卓
- Android ID
---

## 修改 Android ID 的方法

### 推荐操作方案

#### 方案一：ADB 命令直接修改（最简方式）
- 连接设备：
``` bash
adb connect [机顶盒IP]  # 需提前开启ADB调试
adb root  # 提升权限
```

- 查看当前 ID：
```bash
adb shell settings get secure android_id
```

- 修改 ID：
```bash
adb shell settings put secure android_id [新ID]
```

- 验证结果：
```bash
adb shell settings get secure android_id
```


#### 方案二：编辑系统文件（适用 ADB 不可用场景）
- 使用 Root Explorer：
- 挂载/data分区为可写
- 进入/data/system/users/0/目录
- 备份并编辑settings_secure.xml，找到android_id字段修改值
- 命令行操作：

```bash
adb shell mount -o remount,rw /data
adb shell vi /data/system/users/0/settings_secure.xml  # 或使用sed命令
```