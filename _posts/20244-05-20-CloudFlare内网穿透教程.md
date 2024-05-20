---
layout: post
title: "CloudFlare������͸�̳�"
subtitle: ""
author: "cmbjx"
header-img: "img/tu/cloudflare.jpg"
header-mask: 0.4
tags:
  - CloudFlare
  - ������͸
---


## ���س��򵽺����

https://github.com/cloudflare/cloudflared/releases
�Լ�ѡ���Ӧ�汾���أ�
32λarmƽ̨ѡ��cloudflared-linux-arm��
64λarmƽ̨ѡ��cloudflared-linux-arm64��

���غ������ŵ�cloudflared�ŵ�/usr/bin/

## ��Ȩ�޺͵�½

```sh
chmod -R 0777 /usr/bin/cloudflared
cloudflared login
```

��ʱ�ն˻���ʾһ��https:// ����ַ�����Ƶ�������򿪣���¼�Լ���cloudflare�˺ţ�ѡ��Ҫ�󶨵�����������ȡ�Զ����ص���Ȩ�ļ�

## ����һ�����
cloud ���㴴����������ƣ��Ǻã�����Ҫ�ã�������ƿ��Զ���
�õ������id

```sh
cloudflared tunnel create cloud
```

## �����ļ�config.yml��/etc/cloudflared/

```
tunnel: 275fe7bb-5948-45a0-bda7-30da7d154ddf
credentials-file: /root/.cloudflared/275fe7bb-5948-45a0-bda7-30da7d154ddf.json

ingress:
  - hostname: cloud.2091k.cn
    service: http://127.0.0.1
  - service: http_status:404

```

 #���ID��/root/.cloudflared��

```sh
mkdir -p /etc/cloudflared/
vi /etc/cloudflared/config.yml
```
## ������

```sh
cloudflared tunnel route dns cloud cloud.2091k.cn
```
��ʱ�Ϳ�����CFƽ̨DNS���������ļ�¼

## �������������

```sh
cloudflared service install    #������������װ
systemctl start cloudflared    #��������
systemctl status cloudflared   #�鿴����״̬  ����ʱctrl + c ��ֹ��
```

## ����[cloud.2091k.cn](https://cloud.2091k.cn)�Ϳ��Է�����








