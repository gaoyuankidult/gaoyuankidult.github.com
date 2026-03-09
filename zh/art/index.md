---
layout: page
title: 艺术
lang: zh
---

<p class="page-intro fade-in">艺术是研究离开实验台、进入真实空间的地方。装置在这里变成一块现场测试场，用来观察机器行为一旦公开、具身并暴露在观众目光之下，会呈现出什么。</p>

<div class="art-exhibit fade-in">
  <details class="pub-year" open>
    <summary class="pub-year-summary">
      <div class="rail-head">
        <span class="rail-dot"></span>
        <div>
          <h2>2026</h2>
          <p class="rail-tally">1 件作品</p>
        </div>
      </div>
      <span class="pub-year-toggle">
        <span class="pub-year-toggle-open">收起</span>
        <span class="pub-year-toggle-closed">展开</span>
      </span>
    </summary>
    <div class="rail-body">
  <section class="art-exhibit-hero">
    <figure class="art-exhibit-media art-slideshow">
      <img src="/art/images/game-theater-ensemble.jpg" alt="游戏剧场装置现场" class="slide-image active">
      <img src="/art/images/game-theater-wide.jpg" alt="游戏剧场广角现场" class="slide-image">
      <img src="/art/images/game-theater-people.jpg" alt="游戏剧场展览现场" class="slide-image">
      <div class="slide-indicators">
        <span class="slide-dot active" data-slide="0"></span>
        <span class="slide-dot" data-slide="1"></span>
        <span class="slide-dot" data-slide="2"></span>
      </div>
    </figure>
    <div class="art-exhibit-copy">
      <span class="art-kicker">装置 / 现场多机器人系统</span>
      <h2>Game Theater</h2>
      <p class="art-stage-lead"><em>Game Theater</em> 把异构机器人作为表演者放进同一个实时多智能体系统中。人形、四足、轮式与空中机器体在同一空间里协商、试探、追逐与共处，使行为带上一种社会性的错觉，却并不假装它们拥有人的内在性。</p>
      <p>这件作品不是为了展示模型有多强，而是把协调、迟疑、追踪与临时联盟这些技术逻辑转化成观众能直接观看的空间戏剧。</p>
      <div class="art-fact-grid">
        <div>
          <strong>艺术家</strong>
          <span>Liu Ziyin / 高源</span>
        </div>
        <div>
          <strong>媒介</strong>
          <span>装置、实时 AI、多机器人表演</span>
        </div>
        <div>
          <strong>展览</strong>
          <span>第十届深港城市建筑双城双年展</span>
        </div>
      </div>
    </div>
  </section>

  <section class="art-context-grid">
    <article>
      <h3>展览语境</h3>
      <p>作品诞生于深圳双年展的语境之中，策展框架把城市理解为一个多智能体系统。也因此，机器人之间的协同不再只是工程问题，而成为一种被放大的舞台关系。</p>
      <p>真正重要的并不是这些机器人是否足够“聪明”，而是观众从何时开始把意图、冲突、联盟与不确定性投射到这些仍然明显是机器的身体之上。</p>
    </article>

    <article>
      <h3>为什么要做成装置</h3>
      <p>装置把机器行为重新放回人的尺度里。观众不只是读结果、看 benchmark，而是与这些会犹豫、协商与彼此试探的身体共享时间和空间。</p>
      <p>技术问题与审美问题，也正是在这里重新缠在一起。</p>
    </article>
  </section>
    </div>
  </details>

  <details class="pub-year">
    <summary class="pub-year-summary">
      <div class="rail-head">
        <span class="rail-dot"></span>
        <div>
          <h2>2025</h2>
          <p class="rail-tally">1 件装置作品</p>
        </div>
      </div>
      <span class="pub-year-toggle">
        <span class="pub-year-toggle-open">收起</span>
        <span class="pub-year-toggle-closed">展开</span>
      </span>
    </summary>
    <div class="rail-body">
  <section class="art-exhibit-hero">
    <figure class="art-exhibit-media art-slideshow">
      <img src="/art/images/640.jpg" alt="生命可以被虚拟化装置现场" class="slide-image active">
      <img src="/art/images/640-1.jpg" alt="生命可以被虚拟化细节" class="slide-image">
      <div class="slide-indicators">
        <span class="slide-dot active" data-slide="0"></span>
        <span class="slide-dot" data-slide="1"></span>
      </div>
    </figure>
    <div class="art-exhibit-copy">
      <span class="art-kicker">装置 / 木头 / 虚拟化</span>
      <h2>生命可以被虚拟化</h2>
      <p class="art-stage-lead">通过木雕装置思考生命是否能被完全虚拟化。作品探索有机物质性与数字存在之间的张力。</p>
      <div class="art-fact-grid">
        <div>
          <strong>艺术家</strong>
          <span>高源</span>
        </div>
        <div>
          <strong>媒介</strong>
          <span>木雕装置、数字投影</span>
        </div>
        <div>
          <strong>概念</strong>
          <span>生命虚拟化</span>
        </div>
      </div>
    </div>
  </section>
    </div>
  </details>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const slideshow = document.querySelector('.art-slideshow');
  if (!slideshow) return;

  const images = slideshow.querySelectorAll('.slide-image');
  const dots = slideshow.querySelectorAll('.slide-dot');
  if (images.length <= 1) return;

  let currentSlide = 0;
  let interval;

  function showSlide(index) {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % images.length);
  }

  function startSlideshow() {
    interval = setInterval(nextSlide, 5000);
  }

  function stopSlideshow() {
    clearInterval(interval);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopSlideshow();
      showSlide(index);
      startSlideshow();
    });
  });

  startSlideshow();
});
</script>
