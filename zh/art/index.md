---
layout: page
title: 艺术
lang: zh
---

<div class="art-page">

  <p class="page-intro fade-in">艺术是我提出那些论文无法承载的问题的方式——关于共存、关于观看、关于机器学习共同失败的奇异温柔。</p>

  <!-- ============================================
       艺术家宣言 (总体哲学)
       ============================================ -->
  <section class="art-manifesto art-fade-in">
    <h2 class="art-manifesto-title">艺术家宣言</h2>
    <div class="art-manifesto-inner">
      <p class="art-manifesto-text">
        每个社会归根结底都是不同身体之间的协商——而这种协商不再仅仅属于人类。当双足、四足、轮式和空中智能体进入居住、劳动和运动的共享空间时，社会科学对非人类能动性的长期理论化不再是抽象的：它变得现象学化，成为被见证而非被争论的东西。我在这个令人不安的近距离中创作，让异质机器智能体进行现场遭遇——不是为了说明能力，而是为了保持解释 settle 之前的那个时刻。类似于团结的协调、类似于残忍的背叛、类似于怀疑的停顿：没有内在性的行为，而正是这种缺失令人不安。对我来说，艺术是持续疏离的学科——与浮现出来的东西同坐，直到我们决定我们是在观看一个工具、一个伙伴，还是一面镜子。
      </p>
    </div>
  </section>

  <div class="art-separator art-fade-in">
    <span class="art-separator-line"></span>
    <span class="art-separator-dot"></span>
    <span class="art-separator-label">作品</span>
    <span class="art-separator-dot"></span>
    <span class="art-separator-line"></span>
  </div>

  <!-- ============================================
       艺术作品1: 游戏剧场
       ============================================ -->
  <article class="art-work art-fade-in" id="game-theater">

    <!-- 幻灯片 -->
    <div class="art-slideshow">
      <div class="art-slideshow-track">
        <div class="art-slide art-slide-active">
          <img src="/art/images/game-theater-ensemble.jpg" alt="游戏剧场 - 四台异构机器人在烟雾缭绕的舞台上">
        </div>
        <div class="art-slide">
          <img src="/art/images/game-theater-wide.jpg" alt="游戏剧场 - 广角镜头与大气烟雾">
        </div>
      </div>
      <div class="art-slideshow-overlay">
        <span class="art-slideshow-title">游戏剧场</span>
        <span class="art-slideshow-credit">&copy; 刘子吟 &amp; 高源, 2026</span>
      </div>
      <div class="art-slideshow-dots"></div>
    </div>

    <!-- 标题 -->
    <header class="art-work-header">
      <h2 class="art-work-title">游戏剧场</h2>
      <div class="art-work-subtitle">多机器人装置 · 实时AI · 2026</div>
    </header>

    <!-- 元信息栏 -->
    <div class="art-work-meta-bar">
      <div class="art-meta-chip"><span class="art-meta-key">艺术家</span> 刘子吟 &amp; 高源</div>
      <div class="art-meta-chip"><span class="art-meta-key">媒介</span> 多机器人装置、多视角视频、实时AI</div>
      <div class="art-meta-chip"><span class="art-meta-key">年份</span> 2026</div>
    </div>

    <!-- 带装饰侧边的描述 -->
    <div class="art-work-essay">
      <div class="art-essay-accent"></div>
      <div class="art-essay-body">
        <p>
          <span class="art-drop-cap">在</span>强化学习中，"Actor-Critic"是一个经典的协调框架：演员行动，评论家评估。这个算法背后藏着一个古老的哲学困境——行动者永远无法完全看清自己，而观看者永远无法替代行动本身。
        </p>
        <p>
          <em>游戏剧场</em>将这个抽象概念具象化为一个现场的空间表演。类人机器人、四足机器人、轮式机器人和无人机扮演追捕者、逃避者、协商者的角色。它们不遵循预定的剧本——它们实时计算、协商、背叛和合作。每个动作都是策略网络的涌现；每个停顿都是不确定性的结晶。
        </p>
        <p>
          我试图呈现的不是"机器人能做什么"的演示，而是关于游戏行为作为存在基本形式的冥想。当我们观看这些机器相互追逐、逃避和协商时，我们正看向人类社交结构的镜子——无尽地迭代、策略性地进化、永远不得安宁。
        </p>
      </div>
    </div>

    <!-- 展览信息（可折叠） -->
    <details class="art-work-exhibition">
      <summary>展览信息</summary>
      <div class="art-work-exhibition-grid">
        <div><span class="label">展览</span><span class="value">第十届深港城市\建筑双城双年展（深圳）</span></div>
        <div><span class="label">板块</span><span class="value">机器人剧场——作为多智能体系统的城市</span></div>
        <div><span class="label">场馆</span><span class="value">深圳河套创新中心F3</span></div>
        <div><span class="label">展期</span><span class="value">2026年1月—3月</span></div>
        <div><span class="label">总策展人</span><span class="value">沈少民、丁勇</span></div>
        <div><span class="label">执行策展人</span><span class="value">刘子吟、姜苏轩</span></div>
      </div>
    </details>

  </article>

</div>

<!-- 幻灯片与淡入脚本 -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // 滚动淡入
  var fadeEls = document.querySelectorAll('.art-fade-in');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('art-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    fadeEls.forEach(function(el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function(el) { el.classList.add('art-visible'); });
  }

  // 幻灯片功能
  document.querySelectorAll('.art-slideshow').forEach(function(slideshow) {
    var slides = slideshow.querySelectorAll('.art-slide');
    var dotsContainer = slideshow.querySelector('.art-slideshow-dots');
    var currentIndex = 0;
    var intervalTime = 2500; // 2.5秒

    if (slides.length <= 1) return;

    // 创建圆点
    slides.forEach(function(_, i) {
      var dot = document.createElement('span');
      dot.className = 'art-slideshow-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', function() {
        goToSlide(i);
        resetInterval();
      });
      dotsContainer.appendChild(dot);
    });
    var dots = dotsContainer.querySelectorAll('.art-slideshow-dot');

    function goToSlide(index) {
      slides[currentIndex].classList.remove('art-slide-active');
      dots[currentIndex].classList.remove('active');
      currentIndex = index;
      slides[currentIndex].classList.add('art-slide-active');
      dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
      goToSlide((currentIndex + 1) % slides.length);
    }

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, intervalTime);
    }

    // 开始自动播放
    interval = setInterval(nextSlide, intervalTime);

    // 悬停时暂停
    slideshow.addEventListener('mouseenter', function() {
      clearInterval(interval);
    });
    slideshow.addEventListener('mouseleave', function() {
      interval = setInterval(nextSlide, intervalTime);
    });
  });
});
</script>
