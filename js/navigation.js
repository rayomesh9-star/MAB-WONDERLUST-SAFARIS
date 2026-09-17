(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  const loader = document.getElementById('loader');
  const scrollProgress = document.querySelector('.scroll-progress');
  const pageTransition = document.querySelector('.page-transition');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initNavigation() {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (hamburger) {
      hamburger.addEventListener('click', toggleMobileMenu);
    }

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    setupPageTransitions();
    setupScrollProgress();
  }

  function handleScroll() {
    if (!nav) return;
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  function toggleMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    const isOpen = hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  function setupScrollProgress() {
    if (!scrollProgress) return;
    if (prefersReducedMotion) return;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  function setupPageTransitions() {
    if (!pageTransition || prefersReducedMotion) return;

    document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const href = link.getAttribute('href');
        if (!href || href === '#' || href.startsWith('#') || link.hasAttribute('data-no-transition')) {
          return;
        }

        e.preventDefault();
        pageTransition.classList.add('active');

        setTimeout(function () {
          window.location.href = href;
        }, 800);
      });
    });
  }

  function clearPageTransition() {
    if (!pageTransition) return;
    pageTransition.classList.remove('active');
    const line = pageTransition.querySelector('.page-transition-line');
    if (line) {
      line.style.width = '0';
    }
  }

  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      clearPageTransition();
    }
  });

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      clearPageTransition();
    }
  });

  function hideLoader() {
    if (!loader) return;
    setTimeout(function () {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1200);

    setTimeout(function () {
      if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }, 4000);
  }

  function init() {
    initNavigation();
    hideLoader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
