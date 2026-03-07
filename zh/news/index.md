---
layout: page
title: 新闻
lang: zh
---

<p class="page-intro">时刻的编年史——论文发表、访问交流、想法分享。研究中的时间流逝方式不同；昨日之事仿佛就在眼前，却已过去多年。</p>

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

<div class="news-timeline">

<div class="news-year" data-year="2019">
  <div class="news-year-header" onclick="toggleYear(this)">
    <span class="news-year-dot"></span>
    <span class="news-year-label">2019</span>
    <span class="news-year-count">3 个时刻</span>
    <span class="news-year-toggle">展开</span>
  </div>
  <div class="news-items collapsed">
    <div class="news-item" data-date="2019-07-03">
      <span class="news-time">7月3日 <span class="news-time-relative"></span></span>
      <p class="news-content">论文"Fast Adaptation with Meta-Reinforcement Learning for Trust Modelling in Human-Robot Interaction"被 <a href="https://www.iros2019.org/">IROS 2019</a> 录用。 <span class="news-tag">发表</span></p>
    </div>
    <div class="news-item" data-date="2019-06-30">
      <span class="news-time">6月30日 <span class="news-time-relative"></span></span>
      <p class="news-content">论文"Learning Socially Appropriate Robot Approaching Behavior Toward Groups using Deep Reinforcement Learning"被 <a href="http://ro-man2019.org/">RO-MAN 2019</a> 录用。 <span class="news-tag">发表</span></p>
    </div>
    <div class="news-item" data-date="2019-06-04">
      <span class="news-time">6月4日 <span class="news-time-relative"></span></span>
      <p class="news-content">开始在剑桥大学访问学习，与 <a href="https://www.turing.ac.uk/people/researchers/hatice-gunes">Hatice Gunes教授</a> 合作。 <span class="news-tag">访问</span></p>
    </div>
  </div>
</div>

<div class="news-year" data-year="2018">
  <div class="news-year-header" onclick="toggleYear(this)">
    <span class="news-year-dot"></span>
    <span class="news-year-label">2018</span>
    <span class="news-year-count">6 个时刻</span>
    <span class="news-year-toggle">展开</span>
  </div>
  <div class="news-items collapsed">
    <div class="news-item" data-date="2018-10-22">
      <span class="news-time">10月22日 <span class="news-time-relative"></span></span>
      <p class="news-content">新预印本："Social Behavior Learning with Realistic Reward Shaping" 已上传至 <a href="https://arxiv.org/abs/1810.06979">arXiv</a>。 <span class="news-tag">预印本</span></p>
    </div>
    <div class="news-item" data-date="2018-09-01">
      <span class="news-time">2018年9月1日 – 2019年5月31日 <span class="news-time-relative"></span></span>
      <p class="news-content">在 <a href="https://www.kth.se/rpl/">KTH RPL实验室</a> 担任访问学者，与 <a href="https://www.kth.se/profile/elenasi">Elena Sibirtseva</a> 和 <a href="https://www.csc.kth.se/~danik/">Danica Kragic教授</a> 合作。 <span class="news-tag">访问</span></p>
    </div>
    <div class="news-item" data-date="2018-08-26">
      <span class="news-time">8月26日–9月2日 <span class="news-time-relative"></span></span>
      <p class="news-content">参加在中国南京举办的 IEEE RO-MAN 2018。 <span class="news-tag">会议</span></p>
    </div>
    <div class="news-item" data-date="2018-07-24">
      <span class="news-time">7月24日 <span class="news-time-relative"></span></span>
      <p class="news-content">论文"Effects of Posture and Embodiment on Social Distance in Human-Agent Interaction in Mixed Reality"被 <a href="http://iva2018.westernsydney.edu.au/">IVA 2018</a> 录用。 <span class="news-tag">发表</span></p>
    </div>
    <div class="news-item" data-date="2018-07-13">
      <span class="news-time">7月13日 <span class="news-time-relative"></span></span>
      <p class="news-content">参加在斯德哥尔摩举办的 <a href="https://www.ijcai-18.org/">IJCAI 2018</a>。 <span class="news-tag">会议</span></p>
    </div>
    <div class="news-item" data-date="2018-06-10">
      <span class="news-time">6月10日 <span class="news-time-relative"></span></span>
      <p class="news-content">两篇论文被 RO-MAN 2018 录用："Investigating Deep Learning Approaches for Human-Robot Proxemics"和"When robot personalisation does not help"。 <span class="news-tag">发表</span></p>
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
    toggle.textContent = '收起';
  } else {
    items.classList.add('collapsed');
    toggle.textContent = '展开';
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
    return diffYears === 1 ? '· 1年前' : `· ${diffYears}年前`;
  } else if (diffMonths > 0) {
    return diffMonths === 1 ? '· 1个月前' : `· ${diffMonths}个月前`;
  } else if (diffDays > 0) {
    return diffDays === 1 ? '· 昨天' : `· ${diffDays}天前`;
  } else {
    return '· 今天';
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
