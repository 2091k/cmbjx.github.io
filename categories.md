---
layout: page
title: 分类
permalink: /categories/
---
# 文章分类

### 📌 技术分类
<ul>
  {% for post in site.categories.技术 reversed limit:10 %}
    <li>{{ post.date | date: "%Y-%m-%d" }} - <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li>该分类暂无文章</li>
  {% endfor %}
</ul>

### 📌 生活分类
<ul>
  {% for post in site.categories.生活 reversed limit:10 %}
    <li>{{ post.date | date: "%Y-%m-%d" }} - <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li>该分类暂无文章</li>
  {% endfor %}
</ul>

### 📌 笔记分类
<ul>
  {% for post in site.categories.笔记 reversed limit:10 %}
    <li>{{ post.date | date: "%Y-%m-%d" }} - <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li>该分类暂无文章</li>
  {% endfor %}
</ul>

### 📌 工具分类
<ul>
  {% for post in site.categories.工具 reversed limit:10 %}
    <li>{{ post.date | date: "%Y-%m-%d" }} - <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li>该分类暂无文章</li>
  {% endfor %}
</ul>
