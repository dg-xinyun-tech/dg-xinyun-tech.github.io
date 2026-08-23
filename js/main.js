/* ========================================
   智创科技官网 - 主逻辑
   产品轮播、筛选、详情弹窗、联系表单
   ======================================== */
(function() {
  'use strict';

  const lang = localStorage.getItem('site_lang') || 'zh';
  function t(zh, en) { return lang === 'zh' ? zh : en; }

  const products = window.PRODUCTS_DATA || [];
  const cases = window.CASES_DATA || [];
  const company = window.COMPANY_DATA || {};

  // ===== Hero背景图轮播（5秒切换，与产品轮播同步，背景+小图联动） =====
  function initHeroBgCarousel() {
    const layers = document.querySelectorAll('.hero-bg-layer');
    const productLayers = document.querySelectorAll('.hero-product-layer');
    if (layers.length === 0) return;
    let current = 0;
    const total = layers.length;

    function switchBg() {
      layers[current].classList.remove('active');
      if (productLayers[current]) productLayers[current].classList.remove('active');
      current = (current + 1) % total;
      layers[current].classList.add('active');
      if (productLayers[current]) productLayers[current].classList.add('active');
    }

    setInterval(switchBg, 5000);
  }

  // ===== 首页产品轮播（无缝循环） =====
  function initProductCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;

    let slidesPerView = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
    const realCount = products.length;
    let currentIndex = 0;
    let isAnimating = false;
    let autoTimer = null;

    // 产品卡片核心特点映射：图传/数传/图数一体显示最大距离，模拟图传显示10ms
    const cardHighlights = {
      1: { value: "150", unit: "km", label: "最远传输距离" },
      2: { value: "10", unit: "ms", label: "超低延时" },
      3: { value: "500", unit: "Hz", label: "输出频率" },
      4: { value: "300", unit: "km", label: "最远传输距离" },
      5: { value: "15", unit: "km", label: "最远传输距离" },
      6: { value: "10", unit: "ms", label: "" },
      7: { value: "30", unit: "km", label: "最远传输距离" },
      8: { value: "500", unit: "km", label: "最远传输距离" },
      9: { value: "150", unit: "km", label: "最远传输距离" }
    };

    // 渲染：真实卡片 + 末尾复制前 slidesPerView 个卡片（用于无缝循环）
    function renderSlides() {
      const clones = products.slice(0, slidesPerView);
      const all = [...products, ...clones];
      track.innerHTML = all.map(p => {
        const hl = cardHighlights[p.id] || null;
        return `
        <div class="carousel-slide-card" data-id="${p.id}">
          <div class="carousel-slide-img">
            ${p.icon || ''}
            ${hl ? `<div class="carousel-highlight"><span class="carousel-highlight-value">${hl.value}</span><span class="carousel-highlight-unit">${hl.unit}</span></div>` : ''}
          </div>
          <div class="carousel-slide-body">
            <div class="carousel-slide-name">${t(p.name.zh, p.name.en)}</div>
            ${hl && hl.label ? `<div class="carousel-highlight-label">${hl.label}</div>` : ''}
            ${p.tagline && (p.tagline.zh || p.tagline.en) ? `<div class="carousel-slide-desc">${t(p.tagline.zh, p.tagline.en)}</div>` : ''}
          </div>
        </div>
      `}).join('');
    }

    function getSlideWidth() {
      const card = track.querySelector('.carousel-slide-card');
      if (!card) return 0;
      return card.offsetWidth + 16; // width + gap
    }

    function setTranslate(index, animate = true) {
      if (!animate) {
        track.style.transition = 'none';
      } else {
        track.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
      }
      track.style.transform = `translateX(-${index * getSlideWidth()}px)`;
      if (!animate) {
        // 强制重排后恢复过渡
        track.offsetHeight;
        track.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
      }
    }

    function updateDots() {
      const realIndex = currentIndex % realCount;
      document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === realIndex));
    }

    function renderDots() {
      const dotsContainer = document.getElementById('carouselDots');
      if (!dotsContainer) return;
      dotsContainer.innerHTML = Array.from({length: realCount}, (_, i) =>
        `<div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
      ).join('');
      dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          if (isAnimating) return;
          goTo(parseInt(dot.dataset.index));
          resetAuto();
        });
      });
    }

    function goTo(index) {
      if (isAnimating) return;
      isAnimating = true;
      currentIndex = index;
      setTranslate(index, true);
      updateDots();
      setTimeout(() => { isAnimating = false; }, 650);
    }

    function next() {
      if (isAnimating) return;
      isAnimating = true;
      currentIndex++;
      setTranslate(currentIndex, true);
      updateDots();
      // 到达复制区域末尾，过渡结束后无动画跳回0
      if (currentIndex >= realCount) {
        const onEnd = () => {
          track.removeEventListener('transitionend', onEnd);
          currentIndex = 0;
          setTranslate(0, false);
          updateDots();
          isAnimating = false;
        };
        track.addEventListener('transitionend', onEnd);
      } else {
        setTimeout(() => { isAnimating = false; }, 650);
      }
    }

    function prev() {
      if (isAnimating) return;
      isAnimating = true;
      if (currentIndex === 0) {
        // 先无动画跳到复制区域起始位置（realCount），再有动画滚到 realCount-1
        currentIndex = realCount;
        setTranslate(realCount, false);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            currentIndex = realCount - 1;
            setTranslate(currentIndex, true);
            updateDots();
            setTimeout(() => { isAnimating = false; }, 650);
          });
        });
      } else {
        currentIndex--;
        setTranslate(currentIndex, true);
        updateDots();
        setTimeout(() => { isAnimating = false; }, 650);
      }
    }

    function startAuto() { autoTimer = setInterval(next, 5000); }
    function stopAuto() { if (autoTimer) clearInterval(autoTimer); }
    function resetAuto() { stopAuto(); startAuto(); }

    function updateSlidesPerView() {
      const newSlidesPerView = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
      if (newSlidesPerView !== slidesPerView) {
        slidesPerView = newSlidesPerView;
        currentIndex = 0;
        renderSlides();
        renderDots();
        setTranslate(0, false);
      }
    }

    // 箭头按钮
    document.getElementById('carouselPrev')?.addEventListener('click', () => { prev(); resetAuto(); });
    document.getElementById('carouselNext')?.addEventListener('click', () => { next(); resetAuto(); });

    // 点击卡片打开详情
    track.addEventListener('click', (e) => {
      const card = e.target.closest('.carousel-slide-card');
      if (card) openProductModal(card.dataset.id);
    });

    // 悬停暂停
    const wrapper = document.querySelector('.carousel-wrapper');
    wrapper?.addEventListener('mouseenter', stopAuto);
    wrapper?.addEventListener('mouseleave', startAuto);

    window.addEventListener('resize', updateSlidesPerView);

    // 初始化
    renderSlides();
    renderDots();
    setTimeout(() => setTranslate(0, false), 100);
    startAuto();
  }

  // ===== 产品中心筛选 =====
  function initProductFilters() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filterBtns = document.querySelectorAll('.filter-btn');
    // 根据当前语言设置按钮文字
    const _lang = localStorage.getItem('site_lang') || 'zh';
    filterBtns.forEach(btn => {
      if (btn.dataset.zh && btn.dataset.en) {
        btn.textContent = _lang === 'zh' ? btn.dataset.zh : btn.dataset.en;
      }
    });
    let currentFilter = localStorage.getItem('products_filter') || 'all';
    let currentPage = parseInt(localStorage.getItem('products_page')) || 1;
    const pageSize = 6; // 每页2行3列=6个

    function getFiltered() {
      return currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    }

    function getTotalPages() {
      return Math.max(1, Math.ceil(getFiltered().length / pageSize));
    }

    function renderPagination() {
      let pag = document.getElementById('productPagination');
      if (!pag) {
        pag = document.createElement('div');
        pag.id = 'productPagination';
        pag.className = 'pagination';
        grid.parentNode.appendChild(pag);
      }
      const total = getTotalPages();
      if (total <= 1) { pag.innerHTML = ''; return; }
      let html = '';
      html += `<button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" data-page="prev">${t('上一页', 'Previous')}</button>`;
      for (let i = 1; i <= total; i++) {
        html += `<button class="page-btn ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>`;
      }
      html += `<button class="page-btn ${currentPage === total ? 'disabled' : ''}" data-page="next">${t('下一页', 'Next')}</button>`;
      pag.innerHTML = html;

      pag.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('disabled')) return;
          const p = btn.dataset.page;
          if (p === 'prev') currentPage = Math.max(1, currentPage - 1);
          else if (p === 'next') currentPage = Math.min(total, currentPage + 1);
          else currentPage = parseInt(p);
          localStorage.setItem('products_page', currentPage);
          renderProducts();
          renderPagination();
          window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
        });
      });
    }

    function renderProducts() {
      const filtered = getFiltered();
      const start = (currentPage - 1) * pageSize;
      const pageItems = filtered.slice(start, start + pageSize);
      const cardValues = { 1: "150km", 2: "10ms", 3: "500Hz", 4: "300km", 5: "15km", 6: "10ms", 7: "30km", 8: "500km", 9: "150km" };

      grid.innerHTML = pageItems.map(p => `
        <div class="product-card" data-id="${p.id}">
          <div class="product-image" data-img="${p.id}">
            <div class="product-image-inner">${p.icon || ''}</div>
            ${cardValues[p.id] ? `<span class="product-category-tag">${cardValues[p.id]}</span>` : ''}
          </div>
          <div class="product-body">
            <h3 class="product-name">${t(p.name.zh, p.name.en)}</h3>
          </div>
        </div>
      `).join('');

      grid.querySelectorAll('.product-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          openProductModal(card.dataset.id);
        });
      });

      grid.querySelectorAll('.product-image').forEach(img => {
        img.addEventListener('dblclick', () => {
          const p = products.find(x => String(x.id) === String(img.dataset.img));
          if (p && window.openLightbox) {
            const svgData = p.icon || '';
            const blob = new Blob([`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="600" height="600">${svgData.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '')}</svg>`], {type: 'image/svg+xml'});
            const url = URL.createObjectURL(blob);
            window.openLightbox(url);
          }
        });
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        currentPage = 1;
        localStorage.setItem('products_filter', currentFilter);
        localStorage.setItem('products_page', 1);
        renderProducts();
        renderPagination();
      });
    });

    // 初始化时根据保存的筛选设置active状态
    filterBtns.forEach(btn => {
      if (btn.dataset.filter === currentFilter) {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });

    // 页码越界检查
    if (currentPage > getTotalPages()) {
      currentPage = 1;
      localStorage.setItem('products_page', 1);
    }
    renderProducts();
    renderPagination();
  }

  // ===== 方案案例4张图片 =====
  function initCasesGrid() {
    const grid = document.getElementById('casesGrid4');
    if (!grid) return;

    // 取前4个案例
    const fourCases = cases.slice(0, 4);
    // 4个案例对应的真人场景封面图
    const coverImages = [
      'assets/scenes/scene_p2p.jpg',     // 点对点控制
      'assets/scenes/scene_relay.jpg',   // 中继桥接传输
      'assets/scenes/scene_star.jpg',    // 星形组网
      'assets/scenes/scene_mesh.jpg'     // MESH组网
    ];

    grid.innerHTML = fourCases.map((c, i) => `
      <div class="case-card-large" data-id="${c.id}">
        <div class="case-card-large-img case-card-cover" style="background-image:url('${coverImages[i % coverImages.length]}')" data-img="${c.id}" data-cover="${coverImages[i % coverImages.length]}">
        </div>
        <div class="case-card-large-body">
          <div class="case-card-large-title">${t(c.title.zh, c.title.en)}</div>
          ${c.summary && (c.summary.zh || c.summary.en) ? `<div class="case-card-large-desc">${t(c.summary.zh, c.summary.en)}</div>` : ''}
        </div>
      </div>
    `).join('');

    // 双击图片打开灯箱
    grid.querySelectorAll('.case-card-large-img').forEach(img => {
      img.addEventListener('dblclick', () => {
        const cover = img.dataset.cover;
        if (cover && window.openLightbox) {
          window.openLightbox(cover);
        }
      });
    });

    // 点击卡片（图片和文字）打开案例详情页
    grid.querySelectorAll('.case-card-large').forEach(card => {
      card.addEventListener('click', (e) => {
        window.location.href = 'case-detail.html?id=' + encodeURIComponent(card.dataset.id);
      });
    });
  }

  // ===== 产品详情跳转 =====
  function openProductModal(id) {
    window.location.href = 'product-detail.html?id=' + encodeURIComponent(id);
  }

  // ===== 案例详情弹窗 =====
  function openCaseModal(id) {
    const c = cases.find(x => String(x.id) === String(id));
    if (!c) return;

    const html = `
      <div class="modal-header">
        <h3 class="modal-title">${t(c.title.zh, c.title.en)}</h3>
        <div class="modal-close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
      </div>
      <div class="modal-body">
        <div style="aspect-ratio:16/7;border-radius:12px;overflow:hidden;background:${c.gradient || 'linear-gradient(135deg,#1e3a8a,#06b6d4)'};display:flex;align-items:center;justify-content:center;margin-bottom:24px;">
          ${c.icon || ''}
        </div>
        <span style="display:inline-block;font-size:13px;font-weight:500;color:var(--primary-600);background:var(--primary-50);padding:4px 12px;border-radius:999px;margin-bottom:12px;">${t(c.industryZh, c.industryEn)}</span>
        <h2 style="font-size:24px;font-weight:700;margin-bottom:8px;">${t(c.title.zh, c.title.en)}</h2>
        <p style="font-size:15px;color:var(--gray-500);margin-bottom:24px;">${t(c.client.zh, c.client.en)}</p>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px;padding:20px;background:var(--gray-50);border-radius:12px;">
          ${(c.metrics || []).map(m => `
            <div style="text-align:center;">
              <div style="font-size:22px;font-weight:700;color:var(--primary-600);">${m.value}</div>
              <div style="font-size:12px;color:var(--gray-500);margin-top:4px;">${t(m.label.zh, m.label.en)}</div>
            </div>
          `).join('')}
        </div>
        <div style="margin-bottom:20px;">
          <h4 style="font-size:18px;font-weight:600;margin-bottom:10px;">${t('项目背景', 'Background')}</h4>
          <p style="font-size:15px;color:var(--gray-600);line-height:1.8;">${t(c.background.zh, c.background.en)}</p>
        </div>
        <div style="margin-bottom:20px;">
          <h4 style="font-size:18px;font-weight:600;margin-bottom:10px;">${t('解决方案', 'Solution')}</h4>
          <p style="font-size:15px;color:var(--gray-600);line-height:1.8;">${t(c.solution.zh, c.solution.en)}</p>
        </div>
        <div>
          <h4 style="font-size:18px;font-weight:600;margin-bottom:10px;">${t('项目成果', 'Results')}</h4>
          <p style="font-size:15px;color:var(--gray-600);line-height:1.8;">${t(c.results.zh, c.results.en)}</p>
        </div>
      </div>
    `;

    showModal(html);
  }

  // ===== 弹窗通用 =====
  function showModal(html) {
    let overlay = document.getElementById('modalOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'modalOverlay';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = '<div class="modal" id="modal"></div>';
      document.body.appendChild(overlay);
    }
    document.getElementById('modal').innerHTML = html;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    overlay.querySelector('.modal-close')?.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', escHandler); }
    });
  }

  function closeModal() {
    document.getElementById('modalOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ===== 联系表单 =====
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const name = document.getElementById('formName');
      const email = document.getElementById('formEmail');
      const phone = document.getElementById('formPhone');
      const message = document.getElementById('formMessage');

      [name, email, phone, message].forEach(el => {
        el.classList.remove('error');
        el.nextElementSibling.textContent = '';
      });

      if (!name.value.trim()) { name.classList.add('error'); name.nextElementSibling.textContent = t('请输入姓名', 'Name is required'); valid = false; }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('error'); email.nextElementSibling.textContent = t('请输入有效邮箱', 'Valid email is required'); valid = false; }
      if (!phone.value.trim()) { phone.classList.add('error'); phone.nextElementSibling.textContent = t('请输入电话', 'Phone is required'); valid = false; }
      if (!message.value.trim()) { message.classList.add('error'); message.nextElementSibling.textContent = t('请输入留言内容', 'Message is required'); valid = false; }

      if (valid) {
        form.style.display = 'none';
        document.getElementById('formSuccess').classList.add('show');
        setTimeout(() => { form.reset(); form.style.display = ''; document.getElementById('formSuccess').classList.remove('show'); }, 4000);
      }
    });
  }

  // ===== 公司简介数据渲染 =====
  function renderAboutPage() {
    if (!document.getElementById('aboutText')) return;

    const d = company;
    const aboutText = document.getElementById('aboutText');
    aboutText.querySelector('h2').textContent = t(d.aboutTitle?.zh, d.aboutTitle?.en);
    const paras = aboutText.querySelectorAll('p');
    if (paras[0]) paras[0].textContent = t(d.aboutSlogan?.zh, d.aboutSlogan?.en);

    // 多段落简介：按换行分割，动态创建 <p>
    const descText = t(d.aboutDesc?.zh, d.aboutDesc?.en) || '';
    const descParagraphs = descText.split('\n').map(s => s.trim()).filter(s => s.length > 0);
    // 移除旧的简介段落（从第2个p开始，保留slogan）
    const oldParas = aboutText.querySelectorAll('p');
    for (let i = oldParas.length - 1; i >= 1; i--) {
      oldParas[i].remove();
    }
    // 插入新段落
    const statsEl = document.getElementById('aboutStats');
    descParagraphs.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      aboutText.insertBefore(p, statsEl);
    });

    const stats = d.aboutStats || [];
    document.getElementById('aboutStats').innerHTML = stats.map(s => `
      <div class="about-stat">
        <div class="about-stat-value">${t(s.value?.zh, s.value?.en)}</div>
        <div class="about-stat-label">${t(s.label?.zh, s.label?.en)}</div>
      </div>
    `).join('');

    // 发展历程
    const milestones = d.milestones || [];
    const timeline = document.getElementById('timeline');
    if (timeline) {
      timeline.innerHTML = milestones.map(m => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-year">${m.year}</div>
          <div class="timeline-title">${t(m.title?.zh, m.title?.en)}</div>
          <div class="timeline-desc">${t(m.desc?.zh, m.desc?.en)}</div>
        </div>
      `).join('');
    }

    // 团队
    const team = d.team || [];
    const teamGrid = document.getElementById('teamGrid');
    if (teamGrid) {
      teamGrid.innerHTML = team.map(m => `
        <div class="team-card">
          <div class="team-avatar">${m.avatar || (t(m.name?.zh, m.name?.en) || '?').charAt(0)}</div>
          <div class="team-name">${t(m.name?.zh, m.name?.en)}</div>
          <div class="team-role">${t(m.role?.zh, m.role?.en)}</div>
          <div class="team-bio">${t(m.bio?.zh, m.bio?.en)}</div>
        </div>
      `).join('');
    }
  }

  // ===== 首页核心优势 =====
  function renderAdvantages() {
    const grid = document.getElementById('advantagesGrid');
    if (!grid) return;
    const items = company.advantages || [];
    grid.innerHTML = items.map(item => `
      <div class="advantage-card">
        <div class="advantage-icon">${item.icon || ''}</div>
        <h3 class="advantage-title">${t(item.title?.zh, item.title?.en)}</h3>
        <p class="advantage-desc">${t(item.desc?.zh, item.desc?.en)}</p>
      </div>
    `).join('');
  }

  // ===== 通用i18n：处理带data-zh/data-en属性的元素 =====
  function initI18n() {
    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
      el.textContent = lang === 'zh' ? el.dataset.zh : el.dataset.en;
    });
    // 处理placeholder
    document.querySelectorAll('[data-zh-placeholder][data-en-placeholder]').forEach(el => {
      el.placeholder = lang === 'zh' ? el.dataset.zhPlaceholder : el.dataset.enPlaceholder;
    });
  }

  // ===== 初始化 =====
  function init() {
    initI18n();
    initHeroBgCarousel();
    initProductCarousel();
    initProductFilters();
    initCasesGrid();
    initContactForm();
    renderAboutPage();
    renderAdvantages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
