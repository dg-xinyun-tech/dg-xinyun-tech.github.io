/* ========================================
   公共导航栏和页脚 - 动态注入
   四个页面共享同一套导航和页脚
   ======================================== */
(function() {
  'use strict';

  const NAV_ITEMS = [
    { page: 'index', href: 'index.html', zh: '首页', en: 'Home' },
    { page: 'products', href: 'products.html', zh: '产品中心', en: 'Products' },
    { page: 'cases', href: 'cases.html', zh: '应用场景', en: 'Scenarios' },
    { page: 'about', href: 'about.html', zh: '公司简介', en: 'About' }
  ];

  const PRODUCT_CATEGORIES = [
    { zh: '数字图传', en: 'Digital Video Link', filter: 'cat_digital' },
    { zh: '模拟图传', en: 'Analog Video Link', filter: 'cat_analog' },
    { zh: '星型组网', en: 'Star Network', filter: 'cat_star' },
    { zh: 'Mesh组网', en: 'Mesh Network', filter: 'cat_mesh' }
  ];

  // 获取当前页面
  function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1);
    if (!file || file === '' || file === 'index.html') return 'index';
    return file.replace('.html', '');
  }

  const currentPage = getCurrentPage();
  const lang = localStorage.getItem('site_lang') || 'zh';

  function t(zh, en) {
    return lang === 'zh' ? zh : en;
  }

  // 注入导航栏
  function injectNav() {
    const navHTML = `
      <nav class="navbar" id="navbar">
        <div class="container nav-container">
          <a href="index.html" class="logo">
            <span class="logo-icon">
              <img src="assets/logo/logo-icon.png" alt="${lang === 'zh' ? '芯云智家' : 'CoreNexis'}" style="width:100%;height:100%;object-fit:contain;">
            </span>
            <span class="logo-text">${lang === 'zh' ? '芯云智家' : 'CoreNexis'}</span>
          </a>
          <div class="nav-links" id="navLinks">
            ${NAV_ITEMS.map(item => {
              if (item.page === 'products') {
                return `
                  <div class="nav-item-dropdown ${currentPage === item.page ? 'active' : ''}">
                    <a href="${item.href}" class="nav-link" data-page="${item.page}">${t(item.zh, item.en)}<svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                    <div class="dropdown-menu dropdown-menu-cats">
                      ${PRODUCT_CATEGORIES.map(cat => `
                        <a href="products.html?filter=${cat.filter}" class="dropdown-cat-link">${t(cat.zh, cat.en)}</a>
                      `).join('')}
                    </div>
                  </div>
                `;
              }
              return `<a href="${item.href}" class="nav-link ${currentPage === item.page ? 'active' : ''}" data-page="${item.page}">${t(item.zh, item.en)}</a>`;
            }).join('')}
          </div>
          <div class="nav-right">
            <div class="lang-toggle" id="langToggle">
              <span class="lang-option ${lang === 'zh' ? 'active' : ''}" data-lang="zh">中文</span>
              <span class="lang-option ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</span>
            </div>
            <a href="about.html#contact" class="nav-cta">${t('联系我们', 'Contact')}</a>
          </div>
          <div class="hamburger" id="hamburger">
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>
      <!-- 移动端侧边栏 -->
      <div class="sidebar-overlay" id="sidebarOverlay"></div>
      <div class="mobile-sidebar" id="mobileSidebar">
        <div class="sidebar-header">
          <a href="index.html" class="logo"><span class="logo-icon"><img src="assets/logo/logo-icon.png" alt="${lang === 'zh' ? '芯云智家' : 'CoreNexis'}" style="width:100%;height:100%;object-fit:contain;"></span><span class="logo-text">${lang === 'zh' ? '芯云智家' : 'CoreNexis'}</span></a>
          <div class="sidebar-close" id="sidebarClose"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
        </div>
        <div class="sidebar-nav" id="sidebarNav">
          ${NAV_ITEMS.map(item => `
            <a href="${item.href}" class="sidebar-link ${currentPage === item.page ? 'active' : ''}">${t(item.zh, item.en)}</a>
          `).join('')}
        </div>
        <div class="sidebar-footer">
          <div class="sidebar-lang" id="sidebarLang">
            <span class="lang-option ${lang === 'zh' ? 'active' : ''}" data-lang="zh">中文</span>
            <span class="lang-option ${lang === 'en' ? 'active' : ''}" data-lang="en">English</span>
          </div>
          <a href="about.html#contact" class="btn btn-primary btn-block">${t('联系我们', 'Contact')}</a>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }

  // 注入页脚
  function injectFooter() {
    const footerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-main">
            <div class="footer-brand">
              <a href="index.html" class="logo"><span class="logo-icon"><img src="assets/logo/logo-icon.png" alt="${lang === 'zh' ? '芯云智家' : 'CoreNexis'}" style="width:100%;height:100%;object-fit:contain;"></span><span class="logo-text">${lang === 'zh' ? '芯云智家' : 'CoreNexis'}</span></a>
              <p class="footer-brand-desc">${t('深耕低空经济，为低空智能装备产业提供高性能核心硬件。', 'Deeply rooted in low-altitude economy, providing high-performance core hardware for intelligent equipment.')}</p>
            </div>
            <div class="footer-col">
              <h4>${t('产品中心', 'Products')}</h4>
              <ul>
                <li><a href="products.html">${t('数字图传', 'Digital Video Link')}</a></li>
                <li><a href="products.html">${t('模拟图传', 'Analog Video Link')}</a></li>
                <li><a href="products.html">${t('星型组网', 'Star Network')}</a></li>
                <li><a href="products.html">${t('Mesh组网', 'Mesh Network')}</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>${t('应用案例', 'Cases')}</h4>
              <ul>
                <li><a href="solution-inspection.html">${t('巡检安防', 'Inspection Security')}</a></li>
                <li><a href="solution-emergency.html">${t('应急作业', 'Emergency Operations')}</a></li>
                <li><a href="solution-survey.html">${t('勘测测绘', 'Surveying & Mapping')}</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>${t('关于我们', 'About')}</h4>
              <ul>
                <li><a href="about.html">${t('公司简介', 'Company')}</a></li>
                <li><a href="about.html">${t('核心团队', 'Team')}</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>${t('联系我们', 'Contact')}</h4>
              <div class="footer-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><span>${t('广东省惠州市惠城区陈江街道澄海大道中电北斗芯创谷', 'Zhongdian Beidou Xinchuang Valley, Chenghai Ave, Chenjiang, Huizhou, Guangdong')}</span></div>
              <div class="footer-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span><a href="tel:13301311008" style="color:inherit;text-decoration:none">${t('袁绍昌（总经理）', 'Yuan Shaochang (General Manager)')} 13301311008</a></span></div>
              <div class="footer-contact-item" style="margin-top:-8px"><span style="padding-left:30px"><a href="mailto:859179101@qq.com" style="color:inherit;text-decoration:none">859179101@qq.com</a></span></div>
              <div class="footer-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span><a href="tel:13430678070" style="color:inherit;text-decoration:none">${t('尚兴团（技术）', 'Shang Xingtuan (Technical)')} 13430678070</a></span></div>
              <div class="footer-contact-item" style="margin-top:-8px"><span style="padding-left:30px"><a href="mailto:Henry.019@live.com" style="color:inherit;text-decoration:none">Henry.019@live.com</a></span></div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-bottom-left">
              <span>© 2025 ${t('芯云智家', 'CoreNexis')}</span>
            </div>
          </div>
        </div>
      </footer>
      <div class="back-to-top" title="${t('返回顶部', 'Back to Top')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><polyline points="18 15 12 9 6 15"></polyline></svg></div>
      <!-- 灯箱 -->
      <div class="lightbox" id="lightbox">
        <div class="lightbox-close" id="lightboxClose">&times;</div>
        <div class="lightbox-zoom lightbox-zoom-in" id="lightboxZoomIn">+</div>
        <div class="lightbox-zoom lightbox-zoom-out" id="lightboxZoomOut">−</div>
        <div class="lightbox-content" id="lightboxContent">
          <div class="lightbox-img-wrapper" id="lightboxImgWrapper">
            <img id="lightboxImg" src="" alt="">
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // 导航交互
  function initNavInteraction() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('sidebarClose');

    // 滚动效果
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
      document.querySelector('.back-to-top')?.classList.toggle('show', window.scrollY > 400);
    });
    if (window.scrollY > 50) navbar.classList.add('scrolled');

    // 汉堡菜单
    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('open');
      hamburger.classList.add('active');
    }
    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      hamburger.classList.remove('active');
    }
    hamburger.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) closeSidebar(); else openSidebar();
    });
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // 语言切换
    function switchLang(newLang) {
      localStorage.setItem('site_lang', newLang);
      window.location.reload();
    }
    document.querySelectorAll('.lang-toggle .lang-option, .sidebar-lang .lang-option').forEach(opt => {
      opt.addEventListener('click', () => switchLang(opt.dataset.lang));
    });

    // 回到顶部
    document.querySelector('.back-to-top')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 灯箱功能
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxImgWrapper = document.getElementById('lightboxImgWrapper');
    const lightboxClose = document.getElementById('lightboxClose');
    const zoomIn = document.getElementById('lightboxZoomIn');
    const zoomOut = document.getElementById('lightboxZoomOut');

    let scale = 1;

    function openLightbox(src) {
      lightboxImg.src = src;
      scale = 1;
      lightboxImgWrapper.style.transform = 'scale(1)';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === document.getElementById('lightboxContent')) closeLightbox();
    });

    zoomIn.addEventListener('click', (e) => {
      e.stopPropagation();
      scale = Math.min(scale + 0.25, 4);
      lightboxImgWrapper.style.transform = `scale(${scale})`;
    });

    zoomOut.addEventListener('click', (e) => {
      e.stopPropagation();
      scale = Math.max(scale - 0.25, 0.5);
      lightboxImgWrapper.style.transform = `scale(${scale})`;
    });

    // 滚轮缩放
    lightbox.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY < 0) scale = Math.min(scale + 0.1, 4);
      else scale = Math.max(scale - 0.1, 0.5);
      lightboxImgWrapper.style.transform = `scale(${scale})`;
    }, { passive: false });

    // ESC关闭
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });

    // 暴露给全局
    window.openLightbox = openLightbox;
  }

  // 初始化
  injectNav();
  injectFooter();
  initNavInteraction();
  initLightbox();

  // 暴露当前页面和语言
  window.__page = currentPage;
  window.__lang = lang;
})();
