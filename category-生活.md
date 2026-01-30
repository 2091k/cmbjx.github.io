---
layout: page
title: 生活
permalink: /category/生活/
category: 生活
---
# 生活文章
{% for post in site.categories[page.category] reversed %}
- {{ post.date | date: "%Y-%m-%d" }} → [{{ post.title }}]({{ post.url }})
{% endfor %}