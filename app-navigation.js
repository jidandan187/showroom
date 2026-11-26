(() => {
  const views = ['home','catalog','news','about'];
  const setView = (name, scroll = true) => {
    if (!views.includes(name)) name = 'home';
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.hidden = v !== name;
    });
    document.querySelectorAll('[data-view]').forEach(el => {
      el.classList.toggle('active', el.dataset.view === name);
      if (el.matches('.bottom-nav-item')) el.setAttribute('aria-current', el.dataset.view === name ? 'page' : 'false');
    });
    document.querySelector('.desktop-nav')?.classList.remove('open');
    document.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');
    if (scroll) window.scrollTo({top:0,behavior:'smooth'});
    document.body.dataset.currentView = name;
  };
  document.addEventListener('click', e => {
    const nav = e.target.closest('[data-view]');
    if (nav) { e.preventDefault(); setView(nav.dataset.view); return; }
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
      const target = anchor.getAttribute('href');
      if (target === '#katalog') { e.preventDefault(); setView('catalog'); }
      else if (target === '#berita') { e.preventDefault(); setView('news'); }
      else if (target === '#tentang' || target === '#layanan' || target === '#faq' || target === '#kontak') {
        e.preventDefault(); setView('about');
        setTimeout(() => document.querySelector(target)?.scrollIntoView({behavior:'smooth',block:'start'}), 100);
      }
    }
  });
  const fillNews = () => {
    const cards = [...document.querySelectorAll('#newsGrid .news-card')];
    if (!cards.length) return;
    const feature = document.getElementById('homeFeatured');
    const list = document.getElementById('homeNewsList');
    if (feature && !feature.dataset.ready) {
      const first = cards[0].cloneNode(true);
      first.classList.add('featured-news-card');
      feature.replaceChildren(first);
      feature.dataset.ready = '1';
    }
    if (list && !list.dataset.ready) {
      list.replaceChildren(...cards.slice(1,4).map(c => c.cloneNode(true)));
      list.dataset.ready = '1';
    }
  };
  const grid = document.getElementById('newsGrid');
  if (grid) {
    new MutationObserver(fillNews).observe(grid,{childList:true});
    fillNews();
  }
  // News category chips are a light filter; original article links stay intact.
  document.querySelectorAll('[data-news-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-news-filter]').forEach(b => b.classList.toggle('active',b===btn));
    const term = btn.dataset.newsFilter;
    document.querySelectorAll('#newsGrid .news-card').forEach(card => {
      const txt = card.textContent.toLowerCase();
      card.hidden = term !== 'all' && !(term === 'ev' ? /listrik|ev|hybrid|baterai|charging|byd|ioniq|aion/.test(txt) : term === 'industry' ? /industri|pabrik|penjualan|pasar|otomotif|produksi/.test(txt) : /baru|launch|meluncur|resmi|facelift|generasi/.test(txt));
    });
  }));
  // If an existing CTA asks for a car, take the visitor to the service form page.
  document.querySelectorAll('[data-find]').forEach(el => el.addEventListener('click', () => {
    setView('about',false);
    setTimeout(() => document.querySelector('#layanan')?.scrollIntoView({behavior:'smooth',block:'start'}),80);
  }));
  document.querySelector('[data-show-electric]')?.addEventListener('click', () => setView('catalog',false));
  setView('home',false);
})();
