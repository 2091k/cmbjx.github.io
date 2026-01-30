---
layout: page
title: 分类2
permalink: /category/分类2/
category: 分类2
---
# 分类2文章
{% for post in site.categories[page.category] reversed %}
- {{ post.date | date: "%Y-%m-%d" }} → [{{ post.title }}]({{ post.url }})
{% endfor %}