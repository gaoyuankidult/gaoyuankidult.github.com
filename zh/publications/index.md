---
layout: page
title: 论文发表
lang: zh
---

<p class="page-intro fade-in">留在文献中的痕迹——每篇论文都是一个提出的问题，一次亲历的实验，对更大学术对话的小小贡献。</p>

<p class="fade-in" style="transition-delay:0.15s;">完整列表也可见于 <a href="https://scholar.google.se/citations?hl=en&user=HgOAYUAAAAAJ">Google Scholar</a>。</p>

<style>
.pub-timeline {
  position: relative;
  max-width: 800px;
}

.pub-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent, #ddd 5%, #ddd 95%, transparent);
}

.pub-year {
  position: relative;
  margin-bottom: 1.2em;
}

.pub-year-header {
  display: flex;
  align-items: center;
  gap: 0.8em;
  cursor: pointer;
  padding: 0.3em 0;
  margin-left: -6px;
}

.pub-year-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #333;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.pub-year-header:hover .pub-year-dot {
  transform: scale(1.2);
}

.pub-year-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #333;
}

.pub-year-count {
  font-size: 11px;
  color: #999;
  font-weight: 400;
}

.pub-year-toggle {
  font-size: 10px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-left: auto;
  transition: color 0.2s ease;
}

.pub-year-header:hover .pub-year-toggle {
  color: #333;
}

.pub-items {
  padding-left: 1.5em;
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.3s ease;
}

.pub-items.collapsed {
  max-height: 0 !important;
  opacity: 0;
}

.pub-item {
  position: relative;
  padding: 0.8em 0 0.8em 1.2em;
  border-left: 1px solid #eee;
  margin-left: -1px;
}

.pub-item::before {
  content: '';
  position: absolute;
  left: -3px;
  top: 1.1em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ccc;
  transition: background 0.2s ease;
}

.pub-item:hover::before {
  background: #333;
}

.pub-item {
  display: flex;
  gap: 1em;
}

.pub-image {
  flex-shrink: 0;
}

.pub-image img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #eee;
}

.pub-image-placeholder {
  width: 60px;
  height: 60px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #999;
  letter-spacing: 0.05em;
}

.pub-info {
  flex: 1;
  min-width: 0;
}

.pub-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.3em;
  line-height: 1.4;
}

.pub-authors {
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 0.2em;
}

.author-self {
  font-weight: 600;
  color: #333;
}

.pub-venue {
  font-size: 11px;
  color: #888;
  font-style: italic;
}

.pub-links {
  margin-top: 0.4em;
}

.pub-btn {
  display: inline-block;
  font-size: 10px;
  padding: 2px 8px;
  margin-right: 6px;
  background: #f5f5f5;
  color: #666;
  text-decoration: none;
  border-radius: 2px;
  transition: background 0.2s ease, color 0.2s ease;
}

.pub-btn:hover {
  background: #333;
  color: #fff;
}
</style>

<div class="pub-timeline">

<div class="pub-year" data-year="2026">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2026</span>
    <span class="pub-year-count">3 篇论文</span>
    <span class="pub-year-toggle">展开</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/coadaptive_page5_1.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">Emergent Co-Adaptive Strategies in Heterogeneous Multi-Robot Systems via Meta-Learning</div>
    <div class="pub-authors">H. Wang, L. Wang, T. L. Lam, J. Zhai, D. Lin, H. Zheng, X. He, & <span class="author-self">Y. Gao</span></div>
    <div class="pub-venue">IEEE International Conference on Robotics and Automation (ICRA), 2026</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/2026_rebeca.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">ReBeCA: Unveiling Interpretable Behavior Hierarchy behind the Iterative Self-Reflection of Language Models with Causal Analysis</div>
    <div class="pub-authors">T. Yan, S. Shang, Y. Li, S. Qiu, H. Peng, W. Luo, J. Xie, L. Qu, & <span class="author-self">Y. Gao</span></div>
    <div class="pub-venue">arXiv Preprint arXiv:2602.06373, 2026</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2602.06373v1.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2025">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2025</span>
    <span class="pub-year-count">7 篇论文</span>
    <span class="pub-year-toggle">展开</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/2025_entrospect.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">Entrospect: Information-Theoretic Self-Reflection Elicits Better Response Refinement of Small Language Models</div>
    <div class="pub-authors">T. Yan, Z. Lin, L. Zhang, Z. Sun, & <span class="author-self">Y. Gao</span></div>
    <div class="pub-venue">Findings of the Association for Computational Linguistics: ACL 2025</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2025.findings-acl.1261.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/2025_oc-hmas.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">OC-HMAS: Dynamic Self-Organization and Self-Correction in Heterogeneous Multi-Agent Systems Using Multi-Modal Large Models</div>
    <div class="pub-authors">P. Feng, T. Yang, M. Liang, L. Wang, & <span class="author-self">Y. Gao</span></div>
    <div class="pub-venue">IEEE Internet of Things Journal (IOTJ), 2025</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/OC-HMAS.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/2025_drone.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">Unlocking Drone Perception in Low AGL Heights: Progressive Semi-Supervised Learning for Ground-to-Aerial Perception Knowledge Transfer</div>
    <div class="pub-authors">J. Hu, C. Fan, M. Ozay, H. Feng, <span class="author-self">Y. Gao</span>, & T. L. Lam</div>
    <div class="pub-venue">IEEE Transactions on Intelligent Transportation Systems, 2025</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2025.drone.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/vlons_p2_1.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">VLONS: A Vision-and-Language On-device Navigation System with Multimodal Fusion and Modular Framework</div>
    <div class="pub-authors">J. Shi, H. Zhang, Y. Zhang, T. L. Lam, L. Zhang, H. Huang, & <span class="author-self">Y. Gao</span></div>
    <div class="pub-venue">IEEE Transactions on Consumer Electronics, 2025</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/config_adaptive_p2_1.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">Configuration-Adaptive Visual Relative Localization for Spherical Modular Self-Reconfigurable Robots</div>
    <div class="pub-authors">Y. Liu, Q. Zheng, Y. Tu, <span class="author-self">Y. Gao</span>, G. Liang, & T. L. Lam</div>
    <div class="pub-venue">IEEE International Conference on Robotics and Automation (ICRA), 2025</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/ICRA2025.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/2025_deformation.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">Multimodal Deformation Estimation of Soft Pneumatic Gripper During Operation</div>
    <div class="pub-authors">C. Cai, F. Xiao, M. Vanza, T. Wang, F. Zhou, X. Xu, J. Zhu, & <span class="author-self">Y. Gao</span></div>
    <div class="pub-venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2025.deformation.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/balloon_page8_1.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">Understanding Users' Perceptions and Expectations toward a Social Balloon Robot via an Exploratory Study</div>
    <div class="pub-authors">C. Wang, T. Xia, Y. Wang, G. Yu, Z. Zhao, S. Zheng, M. Liao, C. Liang, <span class="author-self">Y. Gao</span>, C. Yu, et al.</div>
    <div class="pub-venue">Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology (UIST), 2025</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2024">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2024</span>
    <span class="pub-year-count">4 篇论文</span>
    <span class="pub-year-toggle">展开</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><img src="{{ site.url }}/images/publications/2024_liquid.png" alt=""></div>
    <div class="pub-info">
    <div class="pub-title">Vision-Language Model-based Physical Reasoning for Robot Liquid Perception</div>
    <div class="pub-authors">W. Lai, T. Zhang, T. L. Lam, & <span class="author-self">Y. Gao</span></div>
    <div class="pub-venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2024</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2024.liquid.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">PepperPose: Full-Body Pose Estimation with a Companion Robot</div>
    <div class="pub-authors">C. Wang, S. Zheng, L. Zhong, C. Yu, C. Liang, Y. Wang, <span class="author-self">Y. Gao</span>, T. L. Lam, & Y. Shi</div>
    <div class="pub-venue">Proceedings of the CHI Conference on Human Factors in Computing Systems, 2024</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Transformable Inspection Robot Design and Implementation for Complex Pipeline Environment</div>
    <div class="pub-authors">J. Wang, Y. Wang, L. Peng, H. Zhang, H. Gao, C. Wang, <span class="author-self">Y. Gao</span>, H. Luo, & Y. Chen</div>
    <div class="pub-venue">IEEE Robotics and Automation Letters, 2024</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Meta-Reinforcement Learning Based Cooperative Surface Inspection of 3D Uncertain Structures using Multi-robot Systems</div>
    <div class="pub-authors">J. Chen, <span class="author-self">Y. Gao</span>, J. Hu, F. Deng, & T. L. Lam</div>
    <div class="pub-venue">IEEE International Conference on Robotics and Automation (ICRA), 2024</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

</div>

<p style="margin-top:2em;color:#888;font-style:italic;">更多论文请查看 <a href="/publications/">英文版论文列表</a>。</p>

<script>
function togglePubYear(header) {
  const items = header.nextElementSibling;
  const toggle = header.querySelector('.pub-year-toggle');

  if (items.classList.contains('collapsed')) {
    items.classList.remove('collapsed');
    items.style.maxHeight = items.scrollHeight + 'px';
    toggle.textContent = '收起';
  } else {
    items.classList.add('collapsed');
    toggle.textContent = '展开';
  }
}

// Auto-expand first year on load
document.addEventListener('DOMContentLoaded', function() {
  const firstYear = document.querySelector('.pub-year-header');
  if (firstYear) {
    togglePubYear(firstYear);
  }
});
</script>
