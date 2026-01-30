---
layout: page
title: 技术
permalink: /category/技术/
category: 技术
---
# 技术文章
{% for post in site.categories[page.category] reversed %}
- {{ post.date | date: "%Y-%m-%d" }} → [{{ post.title }}]({{ post.url }})
{% endfor %}