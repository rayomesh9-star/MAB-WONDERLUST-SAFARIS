(function () {
  'use strict';

  let scrollRevealsInitialized = false;

  document.documentElement.classList.add('reveal-ready');
  initScrollReveals();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

  function init() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (!prefersReducedMotion) {
      initParticles();
      initCustomCursor();
      initHeroAnimations();
      initScrollReveals();
      initParallaxImages();
      initExperienceCards();
      initPhilosophyWords();
      initHorizontalScroll();
      initMagneticButtons();
      initFormAnimations();
      initHeroMouseInteraction();
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
      document.querySelectorAll('.hero-eyebrow, .hero-tagline, .hero-desc, .hero-buttons').forEach(function (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      document.querySelectorAll('.hero-title .line span').forEach(function (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      document.querySelector('.hero-scroll').style.opacity = '1';
    }
  }

  function initParticles() {
    const container = document.querySelector('.hero-particles');
    if (!container) return;

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (8 + Math.random() * 12) + 's';
      particle.style.animationDelay = (Math.random() * 10) + 's';
      particle.style.width = (1 + Math.random() * 2) + 'px';
      particle.style.height = particle.style.width;
      container.appendChild(particle);
    }
  }

  function initCustomCursor() {
    if (isTouchDevice) return;

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorDot.setAttribute('aria-hidden', 'true');
    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    cursorRing.setAttribute('aria-hidden', 'true');
    const cursorLabel = document.createElement('div');
    cursorLabel.className = 'cursor-label';
    cursorLabel.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);
    document.body.appendChild(cursorLabel);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
      cursorLabel.style.left = mouseX + 'px';
      cursorLabel.style.top = (mouseY - 40) + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverTargets = 'a, button, .btn, .experience-card, .destination-card, .story-card, img, .safari-category, .why-us-card, .culture-feature, .conservation-stat, .footer-social-link';

    document.querySelectorAll(hoverTargets).forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursorDot.classList.add('hover');
        cursorRing.classList.add('hover');
        if (el.closest('.experience-card')) {
          cursorLabel.textContent = 'EXPLORE';
        } else if (el.closest('.destination-card')) {
          cursorLabel.textContent = 'VIEW';
        } else if (el.closest('.story-card')) {
          cursorLabel.textContent = 'READ';
        } else if (el.tagName === 'IMG') {
          cursorLabel.textContent = 'DISCOVER';
        } else {
          cursorLabel.textContent = '';
        }
        if (cursorLabel.textContent) {
          cursorLabel.classList.add('visible');
        }
      });

      el.addEventListener('mouseleave', function () {
        cursorDot.classList.remove('hover');
        cursorRing.classList.remove('hover');
        cursorLabel.classList.remove('visible');
      });
    });
  }

  function initHeroAnimations() {
    if (typeof gsap === 'undefined') {
      document.querySelectorAll('.hero-eyebrow, .hero-tagline, .hero-desc, .hero-buttons').forEach(function (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      document.querySelectorAll('.hero-title .line span').forEach(function (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      document.querySelector('.hero-scroll').style.opacity = '1';
      return;
    }

    const tl = gsap.timeline({ delay: 1.2 });

    tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to('.hero-title .line span', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
      .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to('.hero-scroll', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3');

    setTimeout(function () {
      document.querySelectorAll('.hero-eyebrow, .hero-tagline, .hero-desc, .hero-buttons').forEach(function (el) {
        if (el.style.opacity !== '1') {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
      document.querySelectorAll('.hero-title .line span').forEach(function (el) {
        if (el.style.opacity !== '1') {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
      var scroll = document.querySelector('.hero-scroll');
      if (scroll && scroll.style.opacity !== '1') {
        scroll.style.opacity = '1';
      }
    }, 6000);
  }

  function initScrollReveals() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      document.querySelectorAll('.reveal').forEach(function (el) {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none resume none'
            }
          }
        );
      });
    } else {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
      });
    }

      setTimeout(function () {
        document.querySelectorAll('.reveal').forEach(function (el) {
          if (!el.classList.contains('visible')) {
            el.classList.add('visible');
          }
        });
      }, 1500);
  }

  function initParallaxImages() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    document.querySelectorAll('.hero-bg').forEach(function (el) {
      gsap.to(el, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    document.querySelectorAll('.nature-bg-layer').forEach(function (el, index) {
      const speed = (index + 1) * 15;
      gsap.to(el, {
        yPercent: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: '.nature-adventure',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

  function initExperienceCards() {
    document.querySelectorAll('.experience-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  }

  function initPhilosophyWords() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    document.querySelectorAll('.philosophy-word').forEach(function (word, index) {
      gsap.fromTo(word,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: word,
            start: 'top 92%',
            toggleActions: 'play none resume none'
          },
          delay: index * 0.15
        }
      );
    });

    const quote = document.querySelector('.philosophy-quote');
    if (quote) {
      gsap.fromTo(quote,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: quote,
            start: 'top 92%',
            toggleActions: 'play none resume none'
          }
        }
      );
    }

    document.querySelectorAll('.philosophy-word').forEach(function (word) {
      word.addEventListener('mousemove', function (e) {
        const rect = word.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        word.style.transform = 'translateY(0) translateX(' + (x * 10) + 'px) translateY(' + (y * 5) + 'px)';
      });

      word.addEventListener('mouseleave', function () {
        word.style.transform = '';
      });
    });
  }

  function initHorizontalScroll() {
    const wrapper = document.querySelector('.culture-scroll-wrapper');
    const container = document.querySelector('.culture-scroll-container');
    if (!wrapper || !container) return;

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.to(container, {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: '+=200%',
        scrub: 1,
        pin: false
      }
    });
  }

  function initMagneticButtons() {
    if (isTouchDevice) return;

    document.querySelectorAll('.btn, .nav-cta').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  function initFormAnimations() {
    document.querySelectorAll('.form-input').forEach(function (input) {
      input.addEventListener('focus', function () {
        const parent = input.closest('.form-group');
        if (parent) {
          parent.style.transform = 'scale(1.01)';
          parent.style.transition = 'transform 0.3s ease';
        }
      });

      input.addEventListener('blur', function () {
        const parent = input.closest('.form-group');
        if (parent) {
          parent.style.transform = '';
        }
      });
    });
  }

  function initHeroMouseInteraction() {
    if (isTouchDevice) return;

    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    if (!hero || !heroBg) return;

    hero.addEventListener('mousemove', function (e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroBg.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
