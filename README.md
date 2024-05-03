今天我就带领大家在 GitHub Pages 上搭建基于 Jekyll 的博客系统。为了简单化，本文省略掉了本地 Jekyll 运行环境的配置与安装，网络上有很多同类教程，有这方面需求的小伙伴在 google 自行搜索一下。

## 一、项目地址及演示地址

项目地址：https://github.com/hiifeng/hiifeng.github.io

演示地址：https://demo.hidoha.net

　　本项目基于黄玄的项目修改，同时参考了 elmagnifico 的项目，在此首先对原作者表示感谢。目前版本主要修改的内容为增加了站点地图；切换 fontawesome-webfont 版本为 4.7.0 ，支持 QQ 、Telgram 等图标；增加返回顶部按钮；修改首页底部在手机浏览器中出现空白块的 BUG 等。

## 二、博客搭建

1、登录 github ，如果没有账号请提前创建一个。

https://github.com/login


1.Sign in to GitHub.webp

2、打开如下项目地址，然后点击页面右上方的“Fork”按钮。

项目地址：https://github.com/hiifeng/hiifeng.github.io

2.Fork.webp

3、如下图所示，修改仓库名为“账号名称.github.io“。例如：我的账号名是hicairo，仓库名就是 hicairo.github.io（仓库名即博客网址）。最后点击“Create Fork”按钮。

3.Create a new fork.webp

4、为当前仓库配置发布源，点击当前仓库右上角的“Settings”按钮后，再点击左侧菜单中的“Pages”按钮。

4.Settings.webp

5、如图所示，确认“Branch”选项选择的是“main”中的“/root”后点击“Save”按钮。如果“Save”按钮为灰色不能点击，先将选项框中的“main”修改为“None”点击“Save”按钮后，再次选择“main”中的“/root”后点击“Save”按钮。

5.Build and deployment.webp

6、页面提示“GitHub Pages source saved.”然后点击顶部的仓库名称，返回仓库首页。

6.GitHub Pages source saved.webp

7、查看页面右侧的部署状态，如图所示当出现“github-pages now”后，说明静态页面已经生成完毕。这时在浏览器中打开博客网址，就可以访问了。

7.Deployments.webp

## 三、博客配置

1、由于 github.io 域名被污染，我们可以绑定一个被 cloudflare 代理的自定义域名解决。如下图所示，新建一条 CNAME 记录，目标指向 github 为了分配的域名，同时打开代理状态开关。

8.CNAME.webp

2、同 2.4 步骤，先点击当前仓库右上角的“Settings”按钮后，再点击左侧菜单中的“Pages”按钮。然后输入 Custom domain 后，点击“Save”按钮。

9.Custom domain.webp

3、当出现“DNS check successful”时，说明域名绑定成功，这时就可以使用新的域名访问你的博客了。

10.DNS check successful.webp

4、Jekyll 是一个静态网站生成器，它使用 Ruby 编程语言编写，可以将使用标记语言编写的内容文件生成网页。下面是本项目的目录结构：

```Bash
├── _includes                            # 包含文件目录
│   └── about                             # 自我介绍文件
├── _layouts                              # 布局目录
│   ├── default.html                      # 缺省页面布局文件
│   └── post.html                         # 文章页面布局文件
└── _posts                                # 已发布文章目录
│   └── 2023-04-30-Goodbye-my-youth.md    # 示例文章
├── css                                   # 样式表目录
├── fonts                                 # 字体目录
├── img                                   # 图片目录，可根据自己情况定义目录结构
├── js                                    # Javascript 文件目录
├── less                                  # Less 文件目录
├── pwa                                   # 渐进式 Web 应用配置文件目录
├── 404.html                              # 404页面模板
├── CNAME                                 # Github Page 创建的自定义域名文件，无需手动修改
├── Gemfile                               # 定义 Ruby 项目的依赖关系
├── Gruntfile.js                          # 配置 Grunt 任务运行器
├── LICENSE                               # 开源项目许可信息和使用条款
├── README.md                             # 项目的自述文件
├── Rakefile                              # Ruby 项目用于定义和管理任务的文件
├── _config.yml                           # 博客配置文件，根据情况自行修改
├── about.html                            # about 页面模板
├── archive.html                          # archive 页面模板
├── feed.xml                              # RSS 文件模板
├── index.html                            # index 页面模板
├── offline.html                          # offline 页面模板
├── sitemap.xml                           # 站点地图文件
```
5、参考以下提示，修改_config.yml文件，配置自己的博客。

```Bash
# Site settings
title: HiFeng's Blog                  # Blog 的名字
SEOTitle: HiFeng's Blog_记录学习中的点点滴滴......# 指定 Blog 网页的描述信息
header-img: img/home-bg.jpg# Blog首页 header 调用的图片
email: webmaster@hicairo.com邮箱地址
description: "HiFeng's Blog_记录学习中的点点滴滴......"# 指定 Blog 网页的描述信息
keyword: "linux,debian,gentoo,ubuntu"# keyword信息，主要用途告诉搜索引擎这个 BLog 的关键词
url: "https://demo.hidoha.net" # your host, for absolute URL
baseurl: "" # for example, '/blog' if your blog hosted on 'host/blog'
# Publish posts or collection documents with a future date.
future: true
# 在这里设置 QQ、github、telegram 等账号信息
RSS: false
wechat: false
#qq_username: 10000
#weibo_username: ifeng
#zhihu_username: ifeng
github_username: hiifeng
twitter_username: HiaiFeng
facebook_username: HiaiFeng
telegram_username: HiaiFeng
#linkedin_username:  firstname-lastname-idxxxx
# Build settings
# from 2016, 'pygments' is unsupported on GitHub Pages. Use 'rouge' for highlighting instead.
highlighter: rouge
permalink: pretty
paginate: 10#每页显示几篇文章
exclude:
  [
    "less",
    "node_modules",
    "Gruntfile.js",
    "package.json",
    "README.md",
    "README.zh.md",
  ]
anchorjs: true # if you want to customize anchor. check out line:181 of `post.html`
# If you have timezone issue (e.g. #68) in China, uncomment to use this:
#timezone: CN
# Gems
# from PR#40, to support local preview for Jekyll 3.0
# make sure you have this gem installed
# `$ gem install jekyll-paginate`
plugins: [jekyll-paginate]
# Markdown settings
# replace redcarpet to kramdown,
# although redcarpet can auto highlight code, the lack of header-id make the catalog impossible, so I switch to kramdown
# document: http://jekyllrb.com/docs/configuration/#kramdown
markdown: kramdown
kramdown:
  input: GFM # use Github Flavored Markdown !important
  syntax_highlighter_opts:
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1
# Disqus评论系统账号设置
disqus_username: iifeng
# Netease settings
netease_comment: false
# Analytics settings
# ba_track_id: [your track id]
# Google Analytics
# ga_track_id: "G-L0885W521V" # Format: UA-xxxxxx-xx
# ga_domain: demo.hidoha.net
# 右侧 sidebar（ABOUT ME）设置
sidebar: true # whether or not using Sidebar.
p>
# Baidu Analytics
sidebar-about-description: "好好工作 快乐生活 ... <br> Contact me "
sidebar-avatar: /img/Hiifeng.png # use absolute URL, seeing it's used in both `/` and `/about/`
# Featured Tags
featured-tags: true # whether or not using Feature-Tags
featured-condition-size: 1 # A tag will be featured if the size of it is more than this condition value
# Progressive Web Apps
chrome-tab-theme-color: "#000000"
service-worker: true
# MathJax rendering for layout:page (e.g. post preview)
page-mathjax: false
# 友情链接设置:
  [
    { title: "HiFeng's Blog", href: "http://www.hicairo.com" },
    { title: "新月的博客", href: "https://blog.a--i.eu.org" },
#    { title: "Kun Qian", href: "http://kunq.me" },
#    { title: "Sherry Woo", href: "https://sherrywoo.me" },
  ]
```
6、修改_config.yml文件后，然后修改 index.html、about.html、archive.html 等文件中的 description 和 header-img，这样 Blog 就替换成了你喜欢的风格。

7、_posts 目录中给出了文章的示例，在熟悉命名规则和相关语法后，删除该目录中的所有文件，然后就可以自己写博文了。

## 四、写到最后

　　看到这里，我相信你已经可以使用 Jekyll 在 GitHub Pages 搭建博客了，同时通过看_posts 目录中给出了示例文件，可以开始发布博文。但是可能出现对于 Jekyll 配置和 markdown 的语法还是一知半解的状态，在这篇文章开始，我已经说到了，对于一个博客最重要的是内容，至于页面做到清爽即可。如果你需要了解更多有关 Jekyll 配置和 markdown 的语法可以使用如下链接查看官方文档。

https://jekyllcn.com

https://markdown.com.cn
