(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Header toggle
   */
  const headerToggleBtn = select('.header-toggle');
  if (headerToggleBtn) {
    const headerToggle = () => {
      select('#header').classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    }
    on('click', '.header-toggle', headerToggle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  on('click', '#navmenu a', () => {
    if (select('.header-show')) {
      select('#header').classList.remove('header-show');
      headerToggleBtn.classList.remove('bi-x');
      headerToggleBtn.classList.add('bi-list');
    }
  }, true);

  /**
   * Toggle mobile nav dropdowns
   */
  on('click', '.navmenu .toggle-dropdown', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  }, true);


  /**
   * Scroll top button
   */
  const scrollTop = select('.scroll-top');
  if (scrollTop) {
    const toggleScrollTop = () => {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
    on('click', '.scroll-top', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * Animate the skills items on reveal
   */
  const skillsAnimation = select('.skills-animation', true);
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init isotope layout and filters
   */
  const initIsotope = () => {
    select('.isotope-layout', true).forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
        }, false);
      });
    });
  }

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  const hashLinksScroll = () => {
    if (window.location.hash) {
      setTimeout(() => {
        let section = select(window.location.hash);
        if (section) {
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }

  /**
   * Navmenu Scrollspy
   */
  const navmenuScrollspy = () => {
    const navmenulinks = select('.navmenu a', true);
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = select(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        select('.navmenu a.active', true).forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  
  /**
   * Navbar scroll effect
   */
  const navbarScroll = () => {
      const navbar = select('.navbar');
      if (!navbar) return;
      
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  }

  /**
   * Loading animation
   */
  const checkVisibility = () => {
    const elements = select('.loading', true);
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add('loaded');
      }
    });
  }

  /**
   * Window Load Event
   */
  window.addEventListener('load', () => {
    // Preloader
    const preloader = select('#preloader');
    if (preloader) {
      preloader.remove();
    }

    // AOS Init
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    // Typed Init
    const selectTyped = select('.typed');
    if (selectTyped) {
      let typed_strings = selectTyped.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',').map(item => item.trim());
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 1000,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
      });
    }

    // Pure Counter
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    }

    // GLightbox
    if (typeof GLightbox !== 'undefined') {
      GLightbox({
        selector: '.glightbox'
      });
    }
    
    // Isotope
    initIsotope();

    // Swiper
    if (typeof Swiper !== 'undefined') {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
        new Swiper(swiperElement, config);
      });
    }
    
    // Hash link scrolling
    hashLinksScroll();
    
    // Navmenu Scrollspy
    navmenuScrollspy();
  });

  /**
   * DOMContentLoaded Event
   */
  document.addEventListener('DOMContentLoaded', () => {
    navbarScroll();
    checkVisibility();
  });
  
  /**
   * Scroll Event
   */
  document.addEventListener('scroll', () => {
    navbarScroll();
    navmenuScrollspy();
    checkVisibility();
  });

})();