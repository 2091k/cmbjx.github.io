---
layout: post
title: "智能插座Tasmota连接到巴法云MQTT"
subtitle: ""
author: "cmbjx"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
  - Alist
  - PDF
---

## 1. 在你的NAS服务器上安装好MQTT服务器后

### 说明：因为Tasmota的MQTT无法直接连到巴法云，所以，使用海纳思服务器中转传递消息

- SH代码

```sh
#!/bin/bash

# 巴法云的参数
BEMFA_HOST="bemfa.com"
BEMFA_PORT=9501
BEMFA_TOPIC="allen001你的巴法云MQTT主题"
BEMFA_CLIENT_ID="d0ec8dd1324c4e28adb85407c55f6a65你的巴法云设备ID"

## 智能插座的参数
SOCKET_IP="192.168.41.110智能插座连接的内网IP"
SOCKET_ON_CMD="Power%20On"
SOCKET_OFF_CMD="Power%20Off"
STATUS_CMD="Power"

# 获取当前设备状态
get_device_status() {
    # 获取设备状态，返回的结果应包含Power: ON 或 Power: OFF
    status=$(curl -s "http://$SOCKET_IP/cm?cmnd=$STATUS_CMD" | grep -o '"POWER":"[^"]*' | awk -F ':"' '{print $2}')
    echo $status
}

# 连接到巴法云后，先检查设备状态并发送到巴法云
send_device_status_to_bemfa() {
    current_status=$(get_device_status)
    echo "设备当前状态：$current_status"
    
    # 将设备当前状态发送到巴法云
    mosquitto_pub -h $BEMFA_HOST -p $BEMFA_PORT -t "$BEMFA_TOPIC" -i "$BEMFA_CLIENT_ID" -m "$current_status"
}

# 当收到智能插座的“开”命令时，执行开机操作
on_message() {
    status=$(get_device_status)
    if [ "$status" != "ON" ]; then
        response=$(curl -s "http://$SOCKET_IP/cm?cmnd=$SOCKET_ON_CMD")
        echo "智能插座返回的消息：$response"
    else
        echo "设备已经开启，跳过开机命令"
    fi
}

# 当收到智能插座的“关”命令时，执行关机操作
off_message() {
    status=$(get_device_status)
    if [ "$status" != "OFF" ]; then
        response=$(curl -s "http://$SOCKET_IP/cm?cmnd=$SOCKET_OFF_CMD")
        echo "智能插座返回的消息：$response"
    else
        echo "设备已经关闭，跳过关机命令"
    fi
}

# 高效订阅消息并处理
mosquitto_sub -h $BEMFA_HOST -p $BEMFA_PORT -t "$BEMFA_TOPIC" -i "$BEMFA_CLIENT_ID" | while read message
do
    echo "iot发送来的消息：$message"

    # 判断收到的消息，并做相应处理
    if [ "$message" == "on" ]; then
        on_message
    elif [ "$message" == "off" ]; then
        off_message
    fi

    # 加入短暂延时，避免过于频繁的请求
    sleep 1
done

# 连接到巴法云后，检查设备状态并发送
send_device_status_to_bemfa
```
- 名称bfy.sh
- 给权限
```sh
chmod +x bfy.sh
```
- 运行测试
```sh
./bfy.sh
```
- 设置开机启动 `vi /etc/rc.local`
  
```sh
#!/bin/bash
# THIS FILE IS ADDED FOR COMPATIBILITY PURPOSES
#
# It is highly advisable to create own systemd services or udev rules
# to run scripts during boot instead of using this file.
#
# In contrast to previous versions due to parallel execution during boot
# this script will NOT be run after all other services.
#
# Please note that you must run 'chmod +x /etc/rc.local' to ensure
# that this script will be executed during boot.
 
nohup ./bfy.sh &
```

- 加权限
```sh
chmod +x /etc/rc.local
```

## 好了，现在在巴法云平台看到一个订阅设备在线就说明成功了，就可以控制智能设备的开关了
