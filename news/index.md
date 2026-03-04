---
title: News
layout: page
---

<style>
.news-timeline {
  position: relative;
  max-width: 720px;
}

.news-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent, #ddd 5%, #ddd 95%, transparent);
}

.news-year {
  position: relative;
  margin-bottom: 1.2em;
}

.news-year-header {
  display: flex;
  align-items: center;
  gap: 0.8em;
  cursor: pointer;
  padding: 0.3em 0;
  margin-left: -6px;
}

.news-year-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #333;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.news-year-header:hover .news-year-dot {
  transform: scale(1.2);
}

.news-year-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #333;
}

.news-year-count {
  font-size: 11px;
  color: #999;
  font-weight: 400;
}

.news-year-toggle {
  font-size: 10px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-left: auto;
  transition: color 0.2s ease;
}

.news-year-header:hover .news-year-toggle {
  color: #333;
}

.news-items {
  padding-left: 1.5em;
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.3s ease;
}

.news-items.collapsed {
  max-height: 0 !important;
  opacity: 0;
}

.news-item {
  position: relative;
  padding: 0.5em 0 0.5em 1.2em;
  border-left: 1px solid #eee;
  margin-left: -1px;
}

.news-item::before {
  content: '';
  position: absolute;
  left: -3px;
  top: 0.85em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ccc;
  transition: background 0.2s ease;
}

.news-item:hover::before {
  background: #333;
}

.news-time {
  display: inline;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #999;
}

.news-time-relative {
  font-style: italic;
  color: #bbb;
}

.news-content {
  font-size: 14px;
  line-height: 1.6;
  color: #444;
  margin: 0;
}

.news-content a {
  color: #333;
  border-bottom: 1px solid #ddd;
  transition: border-color 0.2s ease;
}

.news-content a:hover {
  border-color: #333;
}

.news-tag {
  display: inline-block;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 1px 6px;
  background: #f5f5f5;
  border-radius: 2px;
  color: #888;
  margin-left: 0.4em;
  vertical-align: middle;
}
</style>

<p class="page-intro">A chronicle of moments—papers accepted, places visited, ideas exchanged. Time moves differently in research; what felt like yesterday is already years ago.</p>

<div class="news-timeline">

<div class="news-year" data-year="2019">
  <div class="news-year-header" onclick="toggleYear(this)">
    <span class="news-year-dot"></span>
    <span class="news-year-label">2019</span>
    <span class="news-year-count">3 moments</span>
    <span class="news-year-toggle">expand</span>
  </div>
  <div class="news-items collapsed">
    <div class="news-item" data-date="2019-07-03">
      <span class="news-time">July 3 <span class="news-time-relative"></span></span>
      <p class="news-content">Paper "Fast Adaptation with Meta-Reinforcement Learning for Trust Modelling in Human-Robot Interaction" accepted to <a href="https://www.iros2019.org/">IROS 2019</a>. <span class="news-tag">publication</span></p>
    </div>
    <div class="news-item" data-date="2019-06-30">
      <span class="news-time">June 30 <span class="news-time-relative"></span></span>
      <p class="news-content">Paper "Learning Socially Appropriate Robot Approaching Behavior Toward Groups using Deep Reinforcement Learning" accepted to <a href="http://ro-man2019.org/">RO-MAN 2019</a>. <span class="news-tag">publication</span></p>
    </div>
    <div class="news-item" data-date="2019-06-04">
      <span class="news-time">June 4 <span class="news-time-relative"></span></span>
      <p class="news-content">Began visiting scholarship at the University of Cambridge, collaborating with <a href="https://www.turing.ac.uk/people/researchers/hatice-gunes">Prof. Hatice Gunes</a>. <span class="news-tag">visit</span></p>
    </div>
  </div>
</div>

<div class="news-year" data-year="2018">
  <div class="news-year-header" onclick="toggleYear(this)">
    <span class="news-year-dot"></span>
    <span class="news-year-label">2018</span>
    <span class="news-year-count">6 moments</span>
    <span class="news-year-toggle">expand</span>
  </div>
  <div class="news-items collapsed">
    <div class="news-item" data-date="2018-10-22">
      <span class="news-time">October 22 <span class="news-time-relative"></span></span>
      <p class="news-content">New preprint: "Social Behavior Learning with Realistic Reward Shaping" uploaded to <a href="https://arxiv.org/abs/1810.06979">arXiv</a>. <span class="news-tag">preprint</span></p>
    </div>
    <div class="news-item" data-date="2018-09-01">
      <span class="news-time">September 1, 2018 – May 31, 2019 <span class="news-time-relative"></span></span>
      <p class="news-content">Visiting scholar at <a href="https://www.kth.se/rpl/">RPL Lab, KTH</a>, working with <a href="https://www.kth.se/profile/elenasi">Elena Sibirtseva</a> and <a href="https://www.csc.kth.se/~danik/">Prof. Danica Kragic</a>. <span class="news-tag">visit</span></p>
    </div>
    <div class="news-item" data-date="2018-08-26">
      <span class="news-time">August 26–September 2 <span class="news-time-relative"></span></span>
      <p class="news-content">Attended IEEE RO-MAN 2018 in Nanjing, China. <span class="news-tag">conference</span></p>
    </div>
    <div class="news-item" data-date="2018-07-24">
      <span class="news-time">July 24 <span class="news-time-relative"></span></span>
      <p class="news-content">Paper "Effects of Posture and Embodiment on Social Distance in Human-Agent Interaction in Mixed Reality" accepted to <a href="http://iva2018.westernsydney.edu.au/">IVA 2018</a>. <span class="news-tag">publication</span></p>
    </div>
    <div class="news-item" data-date="2018-07-13">
      <span class="news-time">July 13 <span class="news-time-relative"></span></span>
      <p class="news-content">Attended <a href="https://www.ijcai-18.org/">IJCAI 2018</a> in Stockholm. <span class="news-tag">conference</span></p>
    </div>
    <div class="news-item" data-date="2018-06-10">
      <span class="news-time">June 10 <span class="news-time-relative"></span></span>
      <p class="news-content">Two papers accepted to RO-MAN 2018: "Investigating Deep Learning Approaches for Human-Robot Proxemics" and "When robot personalisation does not help." <span class="news-tag">publication</span></p>
    </div>
  </div>
</div>

</div>

<script>
function toggleYear(header) {
  const items = header.nextElementSibling;
  const toggle = header.querySelector('.news-year-toggle');
  
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
  document.querySelectorAll('.news-item').forEach(item => {
    const dateStr = item.getAttribute('data-date');
    if (dateStr) {
      const relSpan = item.querySelector('.news-time-relative');
      if (relSpan) {
        relSpan.textContent = timeAgo(dateStr);
      }
    }
  });
  
  // Auto-expand first year
  const firstYear = document.querySelector('.news-year-header');
  if (firstYear) {
    toggleYear(firstYear);
  }
});
</script>
