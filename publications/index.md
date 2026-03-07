---
layout: page
title: Publications
lang: en
---

<p class="page-intro fade-in">Traces left in the literature—each paper a question posed, an experiment lived through, a small contribution to the larger conversation.</p>

<p class="fade-in" style="transition-delay:0.15s;">Full list also available on <a href="https://scholar.google.se/citations?hl=en&user=HgOAYUAAAAAJ">Google Scholar</a>.</p>

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
    <span class="pub-year-count">3 papers</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <!-- Science Robotics paper hidden until March 18, 2026
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Cross-Robot Behavior Adaptation through Intention Alignment</div>
    <div class="pub-authors">X. Chen&dagger;, <span class="author-self">Y. Gao</span>&dagger;, H. Liu, F. Yang, A. Ghadirzadeh, J. Yang, B. Liang, C. Zhang, T. L. Lam, & S.-C. Zhu</div>
    <div class="pub-venue">Science Robotics, 2026</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    -->
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
    <span class="pub-year-count">7 papers</span>
    <span class="pub-year-toggle">expand</span>
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
    <span class="pub-year-count">4 papers</span>
    <span class="pub-year-toggle">expand</span>
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

<div class="pub-year" data-year="2023">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2023</span>
    <span class="pub-year-count">6 papers</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Asymmetric Self-Play-Enabled Intelligent Heterogeneous Multirobot Catching System Using Deep Multiagent Reinforcement Learning</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span>, J. Chen, X. Chen, C. Wang, J. Hu, F. Deng, & T. L. Lam</div>
    <div class="pub-venue">IEEE Transactions on Robotics, 39(4), 2603-2622, 2023</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Learn2Agree: Fitting with Multiple Annotators without Objective Ground Truth</div>
    <div class="pub-authors">C. Wang, <span class="author-self">Y. Gao</span>, C. Fan, J. Hu, T. L. Lam, N. D. Lane, & N. Bianchi-Berthouze</div>
    <div class="pub-venue">International Workshop on Trustworthy Machine Learning for Healthcare (TML4H), Springer, 2023</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Boosting Lightweight Depth Estimation via Knowledge Distillation</div>
    <div class="pub-authors">J. Hu, C. Fan, H. Jiang, X. Guo, <span class="author-self">Y. Gao</span>, X. Lu, & T. L. Lam</div>
    <div class="pub-venue">International Conference on Knowledge Science, Engineering and Management (KSEM), Springer, 2023</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Asymptotically Efficient Estimator for Range-based Robot Relative Localization</div>
    <div class="pub-authors">Y. Wang, M. Lin, X. Xie, <span class="author-self">Y. Gao</span>, F. Deng, & T. L. Lam</div>
    <div class="pub-venue">IEEE/ASME Transactions on Mechatronics, 28(6), 3525-3536, 2023</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">An Intention Inference Method for the Space Non-cooperative Target Based on BiGRU-Self Attention</div>
    <div class="pub-authors">H. Zhang, J. Luo, <span class="author-self">Y. Gao</span>, & W. Ma</div>
    <div class="pub-venue">Advances in Space Research, 72(5), 1815-1828, 2023</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">MultiRoboLearn: An Open-Source Framework for Multi-Robot Deep Reinforcement Learning</div>
    <div class="pub-authors">J. Chen, F. Deng, <span class="author-self">Y. Gao</span>, J. Hu, X. Guo, G. Liang, & T. L. Lam</div>
    <div class="pub-venue">IEEE International Conference on Robotics and Biomimetics (ROBIO), 2023</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2022">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2022</span>
    <span class="pub-year-count">9 papers</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">LAPO: Latent-Variable Advantage-Weighted Policy Optimization for Offline Reinforcement Learning</div>
    <div class="pub-authors">X. Chen, A. Ghadirzadeh, T. Yu, J. Wang, <span class="author-self">Y. Gao</span>, W. Li, B. Liang, C. Finn, & C. Zhang</div>
    <div class="pub-venue">Advances in Neural Information Processing Systems (NeurIPS), 35, 36902-36913, 2022</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Learning to Coordinate for a Worker-Station Multi-robot System in Planar Coverage Tasks</div>
    <div class="pub-authors">J. Tang, <span class="author-self">Y. Gao</span>, & T. L. Lam</div>
    <div class="pub-venue">IEEE Robotics and Automation Letters (RA-L), 2022</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">AB-Mapper: Attention and BicNet Based Multi-agent Path Planning for Dynamic Environment</div>
    <div class="pub-authors">H. Guan, <span class="author-self">Y. Gao</span>, M. Zhao, Y. Yang, F. Deng, & T. L. Lam</div>
    <div class="pub-venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2022</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Abnormal Occupancy Grid Map Recognition Using Attention Network</div>
    <div class="pub-authors">F. Deng, H. Feng, M. Liang, Q. Feng, N. Yi, Y. Yang, <span class="author-self">Y. Gao</span>, & T. L. Lam</div>
    <div class="pub-venue">IEEE International Conference on Robotics and Automation (ICRA), 2022</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Emotion and Memory Model for Social Robots: A Reinforcement Learning Based Behaviour Selection</div>
    <div class="pub-authors">M. I. Ahmad, <span class="author-self">Y. Gao</span>, F. Alnajjar, S. Shahid, & O. Mubin</div>
    <div class="pub-venue">Behaviour & Information Technology, 41(15), 3210-3236, 2022</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">On the Asymptotic Properties of a Bagging Estimator with a Massive Dataset</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span>, R. Zhang, & H. Wang</div>
    <div class="pub-venue">Stat, 11(1), e485, 2022</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Multilevel Hierarchical Network with Multiscale Sampling for Video Question Answering</div>
    <div class="pub-authors">M. Peng, C. Wang, <span class="author-self">Y. Gao</span>, Y. Shi, & X.-D. Zhou</div>
    <div class="pub-venue">arXiv Preprint arXiv:2205.04061, 2022</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2205.04061.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Progressive Self-Distillation for Ground-to-Aerial Perception Knowledge Transfer</div>
    <div class="pub-authors">J. Hu, C. Fan, M. Ozay, H. Feng, <span class="author-self">Y. Gao</span>, & T. L. Lam</div>
    <div class="pub-venue">arXiv Preprint arXiv:2208.13404, 2022</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2208.13404.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Co-adaptive Human-Robot Cooperation: Summary and Challenges</div>
    <div class="pub-authors">S. Ahlberg, A. Axelsson, P. Yu, W. S. Cortez, <span class="author-self">Y. Gao</span>, A. Ghadirzadeh, G. Castellano, D. Kragic, G. Skantze, & D. V. Dimarogonas</div>
    <div class="pub-venue">Unmanned Systems, 10(02), 187-203, 2022</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Dynamic Dense Graph Convolutional Network for Skeleton-based Human Motion Prediction</div>
    <div class="pub-authors">X. Wang, W. Zhang, C. Wang, <span class="author-self">Y. Gao</span>, & M. Liu</div>
    <div class="pub-venue">IEEE Transactions on Image Processing, 33, 1-15, 2022</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2021">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2021</span>
    <span class="pub-year-count">7 papers</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">FEANet: Feature-Enhanced Attention Network for RGB-Thermal Real-time Semantic Segmentation</div>
    <div class="pub-authors">F. Deng, H. Feng, M. Liang, H. Wang, Y. Yang, <span class="author-self">Y. Gao</span>, J. Chen, J. Hu, X. Guo, & T. L. Lam</div>
    <div class="pub-venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2021</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">A Dataset of Human and Robot Approach Behaviors into Small Free-Standing Conversational Groups</div>
    <div class="pub-authors">F. Yang, <span class="author-self">Y. Gao</span>, R. Ma, S. Zojaji, G. Castellano, & C. Peters</div>
    <div class="pub-venue">PloS One, 16(2), e0247364, 2021</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Leveraging Activity Recognition to Enable Protective Behavior Detection in Continuous Data</div>
    <div class="pub-authors">C. Wang, <span class="author-self">Y. Gao</span>, A. Mathur, A. C. De C. Williams, N. D. Lane, & N. Bianchi-Berthouze</div>
    <div class="pub-venue">Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 5(2), 1-27, 2021</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">AgreementLearning: An End-to-End Framework for Learning with Multiple Annotators without Groundtruth</div>
    <div class="pub-authors">C. Wang, <span class="author-self">Y. Gao</span>, C. Fan, J. Hu, T. L. Lam, N. D. Lane, & N. Bianchi-Berthouze</div>
    <div class="pub-venue">arXiv Preprint arXiv:2109.03596, 2021</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2109.03596.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Meta Reinforcement Learning Based Sensor Scanning in 3D Uncertain Environments for Heterogeneous Multi-Robot Systems</div>
    <div class="pub-authors">J. Chen, <span class="author-self">Y. Gao</span>, J. Hu, F. Deng, & T. L. Lam</div>
    <div class="pub-venue">arXiv Preprint arXiv:2109.13617, 2021</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2109.13617.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Temporal Pyramid Transformer with Multimodal Interaction for Video Question Answering</div>
    <div class="pub-authors">M. Peng, C. Wang, <span class="author-self">Y. Gao</span>, Y. Shi, & X.-D. Zhou</div>
    <div class="pub-venue">arXiv Preprint arXiv:2109.04735, 2021</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2109.04735.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Invariant Filtering for Bipedal Walking on Dynamic Rigid Surfaces with Orientation-Based Measurement Model</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span> & Y. Gu</div>
    <div class="pub-venue">arXiv Preprint arXiv:2109.01241, 2021</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2109.01241.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2020">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2020</span>
    <span class="pub-year-count">3 papers</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Machine Behavior Development and Analysis using Reinforcement Learning</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span></div>
    <div class="pub-venue">Doctoral Thesis, Acta Universitatis Upsaliensis, 2020</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Skew-Explore: Learn Faster in Continuous Spaces with Sparse Rewards</div>
    <div class="pub-authors">X. Chen, <span class="author-self">Y. Gao</span>, A. Ghadirzadeh, M. Bjorkman, G. Castellano, & P. Jensfelt</div>
    <div class="pub-venue">2020</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Efficient Learning of Socially Aware Robot Approaching Behavior Toward Groups via Meta-Reinforcement Learning</div>
    <div class="pub-authors">C. Li, G. Castellano, & <span class="author-self">Y. Gao</span></div>
    <div class="pub-venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2020</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Recognizing Micro-Expression in Video Clip with Adaptive Key-Frame Mining</div>
    <div class="pub-authors">M. Peng, C. Wang, <span class="author-self">Y. Gao</span>, T. Bi, T. Chen, Y. Shi, & X.-D. Zhou</div>
    <div class="pub-venue">arXiv Preprint arXiv:2009.09179, 2020</div>
    <div class="pub-links"><a class="pub-btn" href="{{ site.url }}/downloads/pdf/2009.09179.pdf" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2019">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2019</span>
    <span class="pub-year-count">3 papers</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Learning Socially Appropriate Robot Approaching Behavior Toward Groups Using Deep Reinforcement Learning</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span>, F. Yang, M. Frisk, D. Hernandez, C. Peters, & G. Castellano</div>
    <div class="pub-venue">IEEE International Conference on Robot and Human Interactive Communication (RO-MAN), 2019</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a> <a class="pub-btn" href="https://github.com/usr-lab/PepperSocial" target="_blank">Code</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Fast Adaptation with Meta-Reinforcement Learning for Trust Modelling in Human-Robot Interaction</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span>, E. Sibirtseva, G. Castellano, & D. Kragic</div>
    <div class="pub-venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2019</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">A Generalized Framework for Self-Play Training</div>
    <div class="pub-authors">D. Hernandez, K. Denamganai, <span class="author-self">Y. Gao</span>, P. York, S. Devlin, S. Samothrakis, & J. A. Walker</div>
    <div class="pub-venue">IEEE Conference on Games (CoG), 2019</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2018">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2018</span>
    <span class="pub-year-count">4 papers</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Investigating Deep Learning Approaches for Human-Robot Proxemics</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span>, S. Wallkotter, M. Obaid, & G. Castellano</div>
    <div class="pub-venue">IEEE International Symposium on Robot and Human Interactive Communication (RO-MAN), 2018</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">When Robot Personalisation Does Not Help: Insights from a Robot-Supported Learning Study</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span>, W. Barendregt, M. Obaid, & G. Castellano</div>
    <div class="pub-venue">IEEE International Symposium on Robot and Human Interactive Communication (RO-MAN), 2018</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Effects of Posture and Embodiment on Social Distance in Human-Agent Interaction in Mixed Reality</div>
    <div class="pub-authors">C. Li, T. Androulakaki, <span class="author-self">Y. Gao</span>, F. Yang, H. Saikia, C. Peters, & G. Skantze</div>
    <div class="pub-venue">Proceedings of the 18th International Conference on Intelligent Virtual Agents (IVA), 2018</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Bandit Learning with Concurrent Transmissions for Energy-Efficient Flooding in Sensor Networks</div>
    <div class="pub-authors">P. Zhang, <span class="author-self">Y. Gao</span>, & O. Theel</div>
    <div class="pub-venue">EAI Endorsed Transactions on Industrial Networks and Intelligent Systems, 4(13), 2018</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2017">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2017</span>
    <span class="pub-year-count">3 papers</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Personalised Human-Robot Co-Adaptation in Instructional Settings Using Reinforcement Learning</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span>, W. Barendregt, & G. Castellano</div>
    <div class="pub-venue">IVA Workshop on Persuasive Embodied Agents for Behavior Change (PEACH), 2017</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Less is More: Learning More with Concurrent Transmissions for Energy-Efficient Flooding</div>
    <div class="pub-authors">P. Zhang, <span class="author-self">Y. Gao</span>, & O. Theel</div>
    <div class="pub-venue">Proceedings of the 14th EAI International Conference on Mobile and Ubiquitous Systems, 2017</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Exploring Users' Reactions towards Tangible Implicit Probes for Measuring Human-Robot Engagement</div>
    <div class="pub-authors">M. Obaid, <span class="author-self">Y. Gao</span>, W. Barendregt, & G. Castellano</div>
    <div class="pub-venue">International Conference on Social Robotics (ICSR), Springer, 2017</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2016">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2016</span>
    <span class="pub-year-count">1 paper</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">Deep Gate Recurrent Neural Network</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span>, & D. Glowacka</div>
    <div class="pub-venue">Asian Conference on Machine Learning (ACML), PMLR, 2016</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

<div class="pub-year" data-year="2015">
  <div class="pub-year-header" onclick="togglePubYear(this)">
    <span class="pub-year-dot"></span>
    <span class="pub-year-label">2015</span>
    <span class="pub-year-count">1 paper</span>
    <span class="pub-year-toggle">expand</span>
  </div>
  <div class="pub-items collapsed">
    <div class="pub-item">
    <div class="pub-image"><div class="pub-image-placeholder">GIF</div></div>
    <div class="pub-info">
    <div class="pub-title">OfficeHours: A System for Student Supervisor Matching Through Reinforcement Learning</div>
    <div class="pub-authors"><span class="author-self">Y. Gao</span>, K. Ilves, & D. Glowacka</div>
    <div class="pub-venue">Companion Proceedings of the 20th International Conference on Intelligent User Interfaces, 2015</div>
    <div class="pub-links"><a class="pub-btn" href="#" target="_blank">PDF</a></div>
    </div>
    </div>
  </div>
</div>

</div>

<script>
function togglePubYear(header) {
  const items = header.nextElementSibling;
  const toggle = header.querySelector('.pub-year-toggle');

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
  const firstYear = document.querySelector('.pub-year-header');
  if (firstYear) {
    togglePubYear(firstYear);
  }
});
</script>
