---
layout: page # 复用page布局
title: 分类 - 技术 # 页面标题，显示「分类 - 你的分类名」
permalink: /category/技术/ # 访问路径，和聚合页的a标签href一致
category: 技术 # 关键：指定当前页面对应的分类名
---

<!-- 显示分类下的文章数量 -->
<h3>「{{ page.category }}」分类 · 共 {{ site.categories[page.category] | size }} 篇文章</h3>

<!-- 核心：遍历该分类下的所有文章，按发布时间倒序排列 -->
<ul class="post-list">
  {% for post in site.categories[page.category] reversed %}
    <li class="post-item">
      <!-- 文章发布时间 -->
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <!-- 文章标题（链接到文章详情） -->
      <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% empty %}
    <!-- 无文章时的提示 -->
    <li class="post-empty">该分类暂无文章</li>
  {% endfor %}
</ul>

<!-- 可选：样式美化，和博客原有文章列表保持一致 -->
<style>
  .post-list { list-style: none; padding: 0; }
  .post-item { margin: 10px 0; padding-bottom: 10px; border-bottom: 1px solid #eee; }
  .post-date { color: #999; font-size: 14px; margin-right: 15px; }
  .post-title { text-decoration: none; color: #333; }
  .post-title:hover { color: #007bff; }
  .post-empty { color: #999; padding: 20px 0; }
</style>