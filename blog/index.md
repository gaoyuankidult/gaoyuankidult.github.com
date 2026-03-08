---
layout: page
title: Blog
---

<p class="page-intro fade-in">Essays, fragments, and longer notes written between research, criticism, and exhibition work. The structure is intentionally closer to an index than a feed: fewer cues, clearer rhythm, and calmer reading scale.</p>

<div class="rail-index essay-ledger fade-in">
{% assign english_posts = site.posts | where_exp: "post", "post.lang != 'zh'" %}
{% assign posts_by_year = english_posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year_group in posts_by_year %}
  <section class="rail-section">
    <div class="rail-head">
      <span class="rail-dot"></span>
      <div>
        <h2>{{ year_group.name }}</h2>
        <p class="rail-tally">{{ year_group.items.size }} text{% if year_group.items.size > 1 %}s{% endif %}</p>
      </div>
    </div>
    <div class="rail-body text-ledger">
      {% for post in year_group.items %}
      <article class="text-entry essay-entry-item">
        <div class="text-meta">
          <span class="text-date">{{ post.date | date: "%B %d" }}</span>
        </div>
        <div class="text-body">
          <h3 class="text-title"><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h3>
          <p class="text-summary">{{ post.excerpt | strip_html | replace: "???", " - " | truncate: 180 }}</p>
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
