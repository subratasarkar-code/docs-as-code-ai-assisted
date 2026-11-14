// Enterprise Hub Live Filtering and Instant Client-Side Search
(function() {
  const themeToggle = document.getElementById('hub-theme-toggle');
  let prefersDark = false;
  let savedTheme = null;
  try {
    prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    savedTheme = localStorage.getItem('tech-portal-theme');
  } catch (e) { /* File origins can restrict storage; search must still work. */ }

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      try { localStorage.setItem('tech-portal-theme', isDark ? 'dark' : 'light'); } catch (e) {}
    });
  }

  const searchInput = document.getElementById('hub-search-input');
  const categorySelect = document.getElementById('category-filter');
  const resultsPanel = document.getElementById('hub-search-results');
  const cards = document.querySelectorAll('.doc-card');
  const countBadge = document.getElementById('visible-count');
  const chips = document.querySelectorAll('.search-tag-chip');

  function filterCards() {
    const q = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const cat = (categorySelect ? categorySelect.value : 'ALL');
    const engine = window.HUB_BM25_ENGINE;
    const rankedDocs = q && engine
      ? new Set(engine.search(q, {topK: 1000}).map(result => result.passage.doc_id))
      : new Set();
    const rankedPassages = q && engine ? engine.search(q, {topK: 8}) : [];
    let visible = 0;

    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category') || '';

      const matchesCat = (cat === 'ALL' || cardCat.toUpperCase() === cat.toUpperCase());
      const docId = card.getAttribute('data-doc-id') || '';
      const matchesQuery = (!q || rankedDocs.has(docId));

      if (matchesCat && matchesQuery) {
        card.style.display = 'flex';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.innerText = `Showing ${visible} of ${cards.length} Guides`;
    }
    if (resultsPanel) {
      if (!q) {
        resultsPanel.innerHTML = '';
      } else if (!engine) {
        resultsPanel.innerHTML = '<p class="hub-search-empty">The passage search index did not load. Reload the page and confirm that js/bm25.js and js/hub-passages.js are available.</p>';
      } else if (!rankedPassages.length) {
        resultsPanel.innerHTML = '<p class="hub-search-empty">No relevant passages found. Try describing the topic or question another way.</p>';
      } else {
        resultsPanel.innerHTML = '<div class="hub-search-results-title">Relevant passages</div>' + rankedPassages.map(({passage, snippet}) =>
          `<a class="hub-search-result" href="${escapeAttribute(passage.url)}"><strong>${escapeHtml(passage.doc_title)} · ${escapeHtml(passage.section_title)}</strong><span>${snippet}</span></a>`
        ).join('');
      }
    }
  }

  function escapeHtml(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function escapeAttribute(value) { return escapeHtml(value); }

  if (searchInput) searchInput.addEventListener('input', filterCards);
  if (categorySelect) categorySelect.addEventListener('change', filterCards);
  const searchButton = document.getElementById('hub-search-button');
  if (searchButton) searchButton.addEventListener('click', filterCards);
  if (searchInput) searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') { event.preventDefault(); filterCards(); }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const term = chip.getAttribute('data-search') || chip.innerText.replace('Try: ', '').trim();
      if (searchInput) {
        searchInput.value = term;
        filterCards();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
})();
