---
layout: page
title: Blog
---

<p class="page-intro fade-in">Thoughts, fragments, and wandering ideas—written in the space between research and art.</p>

<style>
/* Blog timeline - artistic interpretation */
.blog-timeline {
  position: relative;
  max-width: 720px;
}

.blog-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent, #ddd 5%, #ddd 95%, transparent);
}

.blog-year {
  position: relative;
  margin-bottom: 2em;
}

.blog-year-header {
  display: flex;
  align-items: center;
  gap: 0.8em;
  cursor: pointer;
  padding: 0.3em 0;
  margin-left: -6px;
  transition: transform 0.2s ease;
}

.blog-year-header:hover {
  transform: translateX(4px);
}

.blog-year-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #333;
  flex-shrink: 0;
  transition: transform 0.3s ease, background 0.3s ease;
}

.blog-year-header:hover .blog-year-dot {
  transform: scale(1.3);
  background: #000;
}

.blog-year-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #333;
}

.blog-year-count {
  font-size: 11px;
  color: #999;
  font-weight: 400;
  font-style: italic;
}

.blog-year-toggle {
  font-size: 10px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-left: auto;
  transition: color 0.2s ease;
}

.blog-year-header:hover .blog-year-toggle {
  color: #333;
}

.blog-items {
  padding-left: 1.5em;
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.3s ease;
}

.blog-items.collapsed {
  max-height: 0 !important;
  opacity: 0;
}

/* Blog post card */
.blog-post {
  position: relative;
  padding: 1em 0 1.2em 1.2em;
  border-left: 1px solid #eee;
  margin-left: -1px;
  transition: border-color 0.3s ease;
}

.blog-post:hover {
  border-left-color: #ccc;
}

.blog-post::before {
  content: '';
  position: absolute;
  left: -3px;
  top: 1.2em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ccc;
  transition: background 0.2s ease;
}

.blog-post:hover::before {
  background: #333;
}

/* Post date */
.blog-date {
  display: inline;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #999;
}

.blog-date-relative {
  font-style: italic;
  color: #bbb;
  margin-left: 0.3em;
}

/* Post title */
.blog-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  color: #333;
  margin: 0.3em 0 0.5em;
  letter-spacing: -0.01em;
}

.blog-title a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.blog-title a:hover {
  border-bottom-color: #333;
}

/* Post excerpt */
.blog-excerpt {
  font-size: 14px;
  line-height: 1.7;
  color: #666;
  margin: 0 0 0.5em 0;
}

/* Read more link */
.read-more {
  font-size: 12px;
  color: #666;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.read-more:hover {
  color: #000;
  border-color: #000;
}

/* Post tags */
.blog-tags {
  margin-top: 0.5em;
}

.blog-tag {
  display: inline-block;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  background: #f5f5f5;
  border-radius: 2px;
  color: #888;
  margin-right: 6px;
  vertical-align: middle;
}

/* Empty state */
.blog-empty {
  text-align: center;
  padding: 3em 1em;
  color: #999;
  font-style: italic;
}
</style>

<div class="blog-timeline">

{% assign english_posts = site.posts | where_exp: "post", "post.lang != 'zh'" %}
{% assign posts_by_year = english_posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year_group in posts_by_year %}
<div class="blog-year" data-year="{{ year_group.name }}">
  <div class="blog-year-header" onclick="toggleBlogYear(this)">
    <span class="blog-year-dot"></span>
    <span class="blog-year-label">{{ year_group.name }}</span>
    <span class="blog-year-count">{{ year_group.items.size }} {{ year_group.items.size | pluralize: 'thought', 'thoughts' }}</span>
    <span class="blog-year-toggle">expand</span>
  </div>
  <div class="blog-items collapsed">
    {% for post in year_group.items %}
    <div class="blog-post">
      <span class="blog-date">{{ post.date | date: '%B %d' }}</span>
      <div class="blog-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
      <p class="blog-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
      <a href="{{ post.url }}" class="read-more">Read more &rarr;</a>
      {% if post.tags %}
      <div class="blog-tags">
        {% for tag in post.tags %}
        <span class="blog-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>
{% endfor %}

</div>

<script>
function toggleBlogYear(header) {
  const items = header.nextElementSibling;
  const toggle = header.querySelector('.blog-year-toggle');

  if (items.classList.contains('collapsed')) {
    items.classList.remove('collapsed');
    items.style.maxHeight = items.scrollHeight + 'px';
    toggle.textContent = 'collapse';
  } else {
    items.classList.add('collapsed');
    toggle.textContent = 'expand';
  }
}

// Auto-expand first year on load
document.addEventListener('DOMContentLoaded', function() {
  const firstYear = document.querySelector('.blog-year-header');
  if (firstYear) {
    toggleBlogYear(firstYear);
  }
});
</script>
