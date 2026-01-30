---
layout: page
title: 分类
permalink: /categories/
---
# 文章分类

<style>
  h3 { margin: 30px 0 10px 0; }
  ul { list-style: none; padding: 0; line-height: 2; }
  .date { color: #999; font-size: 14px; margin-right: 15px; }
  a { text-decoration: none; color: #333; }
  a:hover { color: #007bff; }
</style>

### 📌 技术分类
<ul>
  {% for post in site.categories['技术'] reversed limit:10 %}
    <li><span class="date">{{ post.date | date: "%Y-%m-%d" }}</span><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li style="color: #999;">该分类暂无文章</li>
  {% endfor %}
</ul>

### 📌 生活分类
<ul>
  {% for post in site.categories['生活'] reversed limit:10 %}
    <li><span class="date">{{ post.date | date: "%Y-%m-%d" }}</span><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li style="color: #999;">该分类暂无文章</li>
  {% endfor %}
</ul>

### 📌 笔记分类
<ul>
  {% for post in site.categories['笔记'] reversed limit:10 %}
    <li><span class="date">{{ post.date | date: "%Y-%m-%d" }}</span><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li style="color: #999;">该分类暂无文章</li>
  {% endfor %}
</ul>

### 📌 工具分类
<ul>
  {% for post in site.categories['工具'] reversed limit:10 %}
    <li><span class="date">{{ post.date | date: "%Y-%m-%d" }}</span><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li style="color: #999;">该分类暂无文章</li>
  {% endfor %}
</ul>