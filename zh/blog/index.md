---
layout: page
title: 博客
lang: zh
---

<p class="page-intro fade-in">写作是研究与艺术之间的过渡带。这里保留的是想法、片段，以及尚未完全定型的句子；版式更接近索引，而不是滚动的信息流。</p>

<div class="rail-index essay-ledger fade-in">
{% assign chinese_posts = site.posts | where: "lang", "zh" %}
{% assign posts_by_year = chinese_posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year_group in posts_by_year %}
  <section class="rail-section">
    <div class="rail-head">
      <span class="rail-dot"></span>
      <div>
        <h2>{{ year_group.name }}</h2>
        <p class="rail-tally">{{ year_group.items.size }} 篇文字</p>
      </div>
    </div>
    <div class="rail-body text-ledger">
      {% for post in year_group.items %}
      <article class="text-entry essay-entry-item">
        <div class="text-meta">
          <span class="text-date">{{ post.date | date: "%m.%d" }}</span>
        </div>
        <div class="text-body">
          <h3 class="text-title"><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h3>
          <p class="text-summary">{{ post.excerpt | strip_html | truncate: 140 }}</p>
          {% if post.tags %}
          <div class="archive-tags">
            {% for tag in post.tags %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
{% endfor %}
</div>
