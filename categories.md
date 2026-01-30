---
layout: page
title: 分类
permalink: /categories/
---
# 文章分类
<!-- 极简美化样式，不喜欢可直接删掉，不影响功能 -->
<style>
  /* 分类板块间距，避免挤在一起 */
  h3 { margin: 2.5em 0 0.8em; color: #333; }
  /* 文章列表去掉默认圆点，增加行高 */
  ul { list-style: none; padding-left: 0; line-height: 2; }
  /* 发布日期浅灰色，和标题区分开 */
  .post-date { color: #888; font-size: 0.9em; margin-right: 1em; }
  /* 文章标题链接样式，hover变色 */
  .post-title { text-decoration: none; color: #222; }
  .post-title:hover { color: #007bff; }
</style>

### 📌 技术分类
<ul>
  {% for post in site.categories['技术'] reversed limit:10 %}
    <li><span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li style="color: #888; padding: 1em 0;">该分类暂无文章</li>
  {% endfor %}
</ul>

### 📌 生活分类
<ul>
  {% for post in site.categories['生活'] reversed limit:10 %}
    <li><span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li style="color: #888; padding: 1em 0;">该分类暂无文章</li>
  {% endfor %}
</ul>

### 📌 笔记分类
<ul>
  {% for post in site.categories['笔记'] reversed limit:10 %}
    <li><span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li style="color: #888; padding: 1em 0;">该分类暂无文章</li>
  {% endfor %}
</ul>

### 📌 工具分类
<ul>
  {% for post in site.categories['工具'] reversed limit:10 %}
    <li><span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% empty %}
    <li style="color: #888; padding: 1em 0;">该分类暂无文章</li>
  {% endfor %}
</ul>