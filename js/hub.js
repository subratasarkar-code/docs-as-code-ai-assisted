// Enterprise Hub Live Filtering and Instant Client-Side Search
(function() {
  const themeToggle = document.getElementById('hub-theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('tech-portal-theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('tech-portal-theme', isDark ? 'dark' : 'light');
    });
  }

  const searchInput = document.getElementById('hub-search-input');
  const categorySelect = document.getElementById('category-filter');
  const cards = document.querySelectorAll('.doc-card');
  const countBadge = document.getElementById('visible-count');
  const chips = document.querySelectorAll('.search-tag-chip');

  function filterCards() {
    const q = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const cat = (categorySelect ? categorySelect.value : 'ALL');
    let visible = 0;

    cards.forEach(card => {
      const title = card.getAttribute('data-title') || '';
      const cardCat = card.getAttribute('data-category') || '';
      const text = card.innerText.toLowerCase();

      const matchesCat = (cat === 'ALL' || cardCat.toUpperCase() === cat.toUpperCase());
      const matchesQuery = (!q || text.includes(q) || title.toLowerCase().includes(q));

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
  }

  if (searchInput) searchInput.addEventListener('input', filterCards);
  if (categorySelect) categorySelect.addEventListener('change', filterCards);

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
