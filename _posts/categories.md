---
layout: page # 复用博客的page布局，和关于页、归档页一致
title: 文章分类 # 页面标题
permalink: /categories/ # 访问路径：你的域名/categories/
---

<div class="category-list">
  <!-- 遍历4个分类，生成分类入口 -->
  <a href="/category/技术/" class="category-item">技术</a>
  <a href="/category/生活/" class="category-item">生活</a>
  <a href="/category/笔记/" class="category-item">笔记</a>
  <a href="/category/工具/" class="category-item">工具</a>
</div>

<!-- 可选：添加分类说明 -->
<p class="category-desc">共4个分类，点击分类查看对应文章</p>

<!-- 样式可选：简单美化分类按钮，可根据博客主题调整 -->
<style>
  .category-list { margin: 20px 0; }
  .category-item { 
    display: inline-block; 
    padding: 8px 16px; 
    margin: 0 10px 10px 0; 
    background: #f5f5f5; 
    border-radius: 4px; 
    text-decoration: none; 
    color: #333;
  }
  .category-item:hover { background: #eee; color: #000; }
</style>