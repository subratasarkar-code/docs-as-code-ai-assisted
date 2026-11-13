// Enterprise Documentation Interactions
(function() {
  const themeToggle = document.getElementById('theme-toggle');
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

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  const searchModal = document.getElementById('search-modal');
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');
  const searchInput = document.getElementById('modal-search-input');
  const searchResults = document.getElementById('search-results');

  function openSearch() {
    if (searchModal) {
      searchModal.classList.add('open');
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        renderSearchResults('');
      }
    }
  }

  function closeSearch() {
    if (searchModal) searchModal.classList.remove('open');
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  function renderSearchResults(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    const index = window.DOC_SEARCH_INDEX || [];
    if (!q) {
      searchResults.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-light);font-size:13px;">Type keywords or topic titles to search this document...</div>';
      return;
    }

    const matches = index.filter(item => {
      return item.title.toLowerCase().includes(q) || 
             (item.snippet && item.snippet.toLowerCase().includes(q)) ||
             (item.keywords && item.keywords.some(k => k.toLowerCase().includes(q)));
    }).slice(0, 8);

    if (matches.length === 0) {
      searchResults.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-light);font-size:13px;">No matching sections found for "' + htmlEscape(q) + '"</div>';
      return;
    }

    let out = '';
    matches.forEach(m => {
      out += `
        <a href="${m.url}" class="search-result-item" onclick="document.getElementById('search-modal').classList.remove('open')">
          <div class="search-res-title">${htmlEscape(m.title)}</div>
          <div class="search-res-snippet">${htmlEscape(m.snippet || '')}...</div>
        </a>
      `;
    });
    searchResults.innerHTML = out;
  }

  function htmlEscape(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('.code-container');
      const codeEl = container ? container.querySelector('code') : null;
      if (codeEl) {
        navigator.clipboard.writeText(codeEl.innerText).then(() => {
          const orig = btn.innerText;
          btn.innerText = 'Copied!';
          btn.style.backgroundColor = 'var(--primary)';
          setTimeout(() => {
            btn.innerText = orig;
            btn.style.backgroundColor = '';
          }, 2000);
        });
      }
    });
  });

  document.querySelectorAll('.faq-header').forEach(hdr => {
    hdr.addEventListener('click', () => {
      const item = hdr.closest('.faq-item');
      if (item) item.classList.toggle('open');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id) {
          document.querySelectorAll('.toc-link').forEach(link => {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }
    });
  }, { rootMargin: '0px 0px -70% 0px' });

  document.querySelectorAll('h2.section-heading, h3.subsection-heading').forEach(heading => {
    if (heading.id) observer.observe(heading);
  });
})();
