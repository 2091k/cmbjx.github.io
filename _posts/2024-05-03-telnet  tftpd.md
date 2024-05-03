---
layout: post
title: "telnet  tftpd"
subtitle: "「生活不止眼前的苟且 还有诗与远方 ...」"
author: "cmbjx"
header-img: "img/bg-material.jpg"
header-mask: 0.4
tags:
  - telnet
  - tftpd
---

## telnet 登录后进入目

```bash
cd /dev
```

### 电脑打开tftp 选中电脑的网卡，同一局域网中

### 下载文件到电脑tftp目录

```bash
tftp -p -l mtd0 192.168.10.3
```

### 上传tftp目录下的文件到当前目录

```bash
tftp -g -l mtd0 192.168.10.3
```


{% if site.disqus_username %}
<!-- disqus 评论框 start -->
<div class="comment">
    <div id="disqus_thread" class="disqus-thread">

    </div>
</div>
<!-- disqus 评论框 end -->

<!-- disqus 公共JS代码 start (一个网页只需插入一次) -->
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = "{{site.disqus_username}}";
    var disqus_identifier = "{{site.disqus_username}}/{{page.url}}";
    var disqus_url = "{{site.url}}{{page.url}}";

    (function () {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<!-- disqus 公共JS代码 end -->
{% endif %}
- [tftp下载链接][1]


  [1]: https://wwi.lanzoup.com/i65rh1xe1rda
