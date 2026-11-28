(() => {
  const views = ['home', 'catalog', 'news', 'about'];
  const setView = (name, scroll = true) => {
    if (!views.includes(name)) name = 'home';
    views.forEach(view => { const el = document.getElementById(`view-${view}`); if (el) el.hidden = view !== name; });
    document.querySelectorAll('[data-view]').forEach(el => {
      el.classList.toggle('active', el.dataset.view === name);
      if (el.matches('.bottom-nav-item')) el.setAttribute('aria-current', el.dataset.view === name ? 'page' : 'false');
    });
    document.querySelector('.desktop-nav')?.classList.remove('open');
    document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
    if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.dataset.currentView = name;
  };
  document.addEventListener('click', event => {
    const nav = event.target.closest('[data-view]');
    if (nav) { event.preventDefault(); setView(nav.dataset.view); return; }
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = anchor.getAttribute('href');
    if (target === '#katalog') { event.preventDefault(); setView('catalog'); }
    else if (target === '#berita') { event.preventDefault(); setView('news'); }
    else if (['#tentang', '#layanan', '#faq', '#kontak'].includes(target)) {
      event.preventDefault(); setView('about');
      setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  });

  let activeNewsFilter = 'all';
  const grid = document.getElementById('newsGrid');
  const feature = document.getElementById('homeFeatured');
  const list = document.getElementById('homeNewsList');
  const classifyCard = card => {
    if (card.dataset.newsCategory) return card.dataset.newsCategory;
    const title = card.querySelector('.news-body h3')?.textContent || '';
    const summary = card.querySelector('.news-body p')?.textContent || '';
    const text = `${title} ${summary}`.toLowerCase();
    if (/mobil listrik|kendaraan listrik|kendaraan berbasis baterai|\bev\b|baterai|charging|pengisian daya|hybrid|plug.?in|phev|air ev|cloud ev|mg 4 ev/.test(text)) return 'ev';
    if (/mobil baru|model baru|mobil terbaru|model terbaru|meluncur|peluncuran|diluncurkan|resmi hadir|resmi meluncur|facelift|generasi terbaru|debut|penyegaran|perkenalkan|memperkenalkan|launching|launch/.test(text)) return 'new';
    if (/industri|pabrik|penjualan|terlaris|pasar|ekspor|impor|produksi|investasi|manufaktur|persaingan|segmen|distribusi|kebijakan|menperin|target penjualan|pangsa pasar|produsen|merek mobil|merek otomotif/.test(text)) return 'industry';
    return 'other';
  };
  const updateHomeNews = matching => {
    if (!feature || !list) return;
    if (!matching.length) {
      feature.innerHTML = '<div class="home-news-empty">Belum ada berita untuk kategori ini.</div>';
      list.replaceChildren(); return;
    }
    const featured = matching[0].cloneNode(true);
    featured.classList.add('featured-news-card'); featured.hidden = false;
    feature.replaceChildren(featured);
    list.replaceChildren(...matching.slice(1, 4).map(card => { const clone = card.cloneNode(true); clone.hidden = false; return clone; }));
  };
  const applyNewsFilter = term => {
    activeNewsFilter = term;
    document.querySelectorAll('[data-news-filter]').forEach(button => {
      const active = button.dataset.newsFilter === term;
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
    const cards = grid ? [...grid.querySelectorAll('.news-card')] : [];
    const matching = cards.filter(card => term === 'all' || classifyCard(card) === term);
    cards.forEach(card => { card.hidden = !matching.includes(card); });
    updateHomeNews(matching);
    const empty = document.getElementById('newsEmptyState');
    if (empty) empty.hidden = matching.length > 0;
  };
  document.querySelectorAll('[data-news-filter]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.newsFilter === 'all'));
    button.addEventListener('click', () => applyNewsFilter(button.dataset.newsFilter));
  });
  if (grid) {
    const refresh = () => applyNewsFilter(activeNewsFilter);
    new MutationObserver(refresh).observe(grid, { childList: true });
    window.addEventListener('news:updated', refresh);
    applyNewsFilter('all');
  }
  document.querySelectorAll('[data-find]').forEach(el => el.addEventListener('click', () => {
    setView('about', false);
    setTimeout(() => document.querySelector('#layanan')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }));
  document.querySelector('[data-show-electric]')?.addEventListener('click', () => setView('catalog', false));
  setView('home', false);
})();
