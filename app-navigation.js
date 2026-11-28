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

  // Categorize from article headline/summary only; source names must not affect filtering.
  const classifyNews = card => {
    const title = card.querySelector('.news-body h3')?.textContent || '';
    const summary = card.querySelector('.news-body p')?.textContent || '';
    const text = `${title} ${summary}`.toLowerCase();
    if (/mobil listrik|kendaraan listrik|\bev\b|baterai|charging|pengisian daya|hybrid|plug.?in|phev|byd|ioniq|aion|air ev|vinfast|neta|wuling cloud/.test(text)) return 'ev';
    if (/mobil baru|model baru|meluncur|peluncuran|diluncurkan|resmi hadir|resmi meluncur|facelift|generasi terbaru|debut|penyegaran|hadir dengan desain/.test(text)) return 'new';
    if (/industri|pabrik|penjualan|pasar|ekspor|impor|produksi|investasi|manufaktur|persaingan|segmen|merek terlaris|distribusi|kebijakan|menperin|target penjualan|pangsa pasar/.test(text)) return 'industry';
    return 'other';
  };
  let activeNewsFilter = 'all';
  const grid = document.getElementById('newsGrid');
  const feature = document.getElementById('homeFeatured');
  const list = document.getElementById('homeNewsList');
  const getCards = () => grid ? [...grid.querySelectorAll('.news-card')] : [];
  const updateHomeNews = matching => {
    if (!feature || !list) return;
    if (!matching.length) {
      feature.innerHTML = '<div class="home-news-empty">Belum ada berita untuk kategori ini.</div>';
      list.replaceChildren();
      return;
    }
    const featured = matching[0].cloneNode(true);
    featured.classList.add('featured-news-card');
    featured.hidden = false;
    feature.replaceChildren(featured);
    list.replaceChildren(...matching.slice(1,4).map(card => {
      const clone = card.cloneNode(true); clone.hidden = false; return clone;
    }));
  };
  const applyNewsFilter = term => {
    activeNewsFilter = term;
    document.querySelectorAll('[data-news-filter]').forEach(btn => {
      const active = btn.dataset.newsFilter === term;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    const all = getCards();
    const matching = all.filter(card => term === 'all' || classifyNews(card) === term);
    all.forEach(card => { card.hidden = !matching.includes(card); });
    updateHomeNews(matching);
    const empty = document.getElementById('newsEmptyState');
    if (empty) empty.hidden = matching.length !== 0;
  };
  document.querySelectorAll('[data-news-filter]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.newsFilter === 'all'));
    btn.addEventListener('click', () => applyNewsFilter(btn.dataset.newsFilter));
  });
  if (grid) {
    new MutationObserver(() => applyNewsFilter(activeNewsFilter)).observe(grid,{childList:true});
    applyNewsFilter('all');
  }
  document.querySelectorAll('[data-find]').forEach(el => el.addEventListener('click', () => {
    setView('about',false);
    setTimeout(() => document.querySelector('#layanan')?.scrollIntoView({behavior:'smooth',block:'start'}),80);
  }));
  document.querySelector('[data-show-electric]')?.addEventListener('click', () => setView('catalog',false));
  setView('home',false);
})();
