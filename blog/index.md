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

/* Post image */
.blog-post-image {
  display: block;
  width: 100%;
  height: 180px;
  margin-bottom: 0.8em;
  border-radius: 4px;
  overflow: hidden;
  background: #f5f5f5;
}

.blog-post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-post:hover .blog-post-image img {
  transform: scale(1.03);
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
  margin: 0;
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

/* Decorative quote marks */
.blog-quote-mark {
  font-family: Georgia, serif;
  font-size: 60px;
  line-height: 0.5;
  color: #e0e0e0;
  display: block;
  margin-bottom: 0.2em;
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

<div class="blog-year" data-year="2026">
  <div class="blog-year-header" onclick="toggleBlogYear(this)">
    <span class="blog-year-dot"></span>
    <span class="blog-year-label">2026</span>
    <span class="blog-year-count">thoughts</span>
    <span class="blog-year-toggle">expand</span>
  </div>
  <div class="blog-items collapsed">
    <div class="blog-post">
      <span class="blog-date">March 2026 <span class="blog-date-relative"></span></span>
      <div class="blog-title"><a href="#">On the Poetry of Machines</a></div>
      <p class="blog-excerpt">When a robot learns to move, does it dream of electricity or of weight? There is something almost musical in the way algorithms stumble toward elegance.</p>
      <div class="blog-tags"><span class="blog-tag">reflection</span><span class="blog-tag">AI</span></div>
    </div>
    <div class="blog-post">
      <span class="blog-date">January 2026 <span class="blog-date-relative"></span></span>
      <div class="blog-title"><a href="#">The Space Between Symbols</a></div>
      <p class="blog-excerpt">Language models speak in patterns, but do they ever pause in the whitespace? The silence between words might be where meaning hides.</p>
      <div class="blog-tags"><span class="blog-tag">thought</span><span class="blog-tag">LLM</span></div>
    </div>
  </div>
</div>

<div class="blog-year" data-year="2025">
  <div class="blog-year-header" onclick="toggleBlogYear(this)">
    <span class="blog-year-dot"></span>
    <span class="blog-year-label">2025</span>
    <span class="blog-year-count">thoughts</span>
    <span class="blog-year-toggle">expand</span>
  </div>
  <div class="blog-items collapsed">
    <div class="blog-post">
      <span class="blog-date">December 2025 <span class="blog-date-relative"></span></span>
      <div class="blog-title"><a href="#">Winter Notes on Learning</a></div>
      <p class="blog-excerpt">The difference between optimization and understanding is the difference between a path and a destination. One walks, the other arrives.</p>
      <div class="blog-tags"><span class="blog-tag">learning</span><span class="blog-tag">philosophy</span></div>
    </div>
    <div class="blog-post">
      <span class="blog-date">August 2025 <span class="blog-date-relative"></span></span>
      <div class="blog-title"><a href="#">Echoes in the Digital Dark</a></div>
      <p class="blog-excerpt">Every interaction leaves a trace, every query a fingerprint. In the vast darkness of training data, patterns emerge like constellations.</p>
      <div class="blog-tags"><span class="blog-tag">reflection</span><span class="blog-tag">data</span></div>
    </div>
    <div class="blog-post">
      <span class="blog-date">April 2025 <span class="blog-date-relative"></span></span>
      <div class="blog-title"><a href="#">The Weight of Attention</a></div>
      <p class="blog-excerpt">Attention is a strange thing—both the mechanism and the goal. When machines learn to attend, do they learn to care?</p>
      <div class="blog-tags"><span class="blog-tag">attention</span><span class="blog-tag">transformer</span></div>
    </div>
  </div>
</div>

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

// Calculate relative time
function timeAgo(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffYears > 0) {
    return diffYears === 1 ? '· 1 year ago' : `· ${diffYears} years ago`;
  } else if (diffMonths > 0) {
    return diffMonths === 1 ? '· 1 month ago' : `· ${diffMonths} months ago`;
  } else if (diffDays > 0) {
    return diffDays === 1 ? '· yesterday' : `· ${diffDays} days ago`;
  } else {
    return '· today';
  }
}

// Apply relative times on load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.blog-post').forEach(post => {
    const dateStr = post.querySelector('.blog-date');
    if (dateStr) {
      // Extract date from the element and calculate relative time
      const relSpan = dateStr.querySelector('.blog-date-relative');
      if (relSpan) {
        // Use the post date for relative time calculation
        const dateText = dateStr.textContent.replace(relSpan.textContent, '').trim();
        // Parse the date - for demo, use current date minus some days
        const now = new Date();
        const randomDays = Math.floor(Math.random() * 365);
        now.setDate(now.getDate() - randomDays);
        relSpan.textContent = timeAgo(now.toISOString());
      }
    }
  });

  // Auto-expand first year
  const firstYear = document.querySelector('.blog-year-header');
  if (firstYear) {
    toggleBlogYear(firstYear);
  }
});
</script>
