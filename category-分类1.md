---
layout: page
title: 分类1
permalink: /category/分类1/
category: 分类1
---
# 分类1文章
{% for post in site.categories[page.category] reversed %}
- {{ post.date | date: "%Y-%m-%d" }} → [{{ post.title }}]({{ post.url }})
{% endfor %}