(function () {
  function isLocalLink(a) {
    return a.hostname === location.hostname &&
      !a.hasAttribute('download') &&
      a.target !== '_blank' &&
      a.href.indexOf('#') === -1;
  }

  function swapContent(html, url) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var newMain = doc.querySelector('main');
    var newTitle = doc.querySelector('title');
    var newHeader = doc.querySelector('.site-header');
    var newLang = doc.documentElement.getAttribute('lang');
    var oldMain = document.querySelector('main');
    var oldHeader = document.querySelector('.site-header');

    if (newMain && oldMain) {
      oldMain.innerHTML = newMain.innerHTML;
    }

    if (newHeader && oldHeader) {
      oldHeader.innerHTML = newHeader.innerHTML;
    }

    if (newTitle) {
      document.title = newTitle.textContent;
    }

    if (newLang) {
      document.documentElement.setAttribute('lang', newLang);
    }

    // Re-run scroll animations for new content
    document.querySelectorAll('.fade-up').forEach(function (el) {
      if (window._fadeObserver) {
        window._fadeObserver.observe(el);
      }
    });

    window.scrollTo(0, 0);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a || !isLocalLink(a)) return;

    e.preventDefault();

    // Close mobile nav if open
    var navLinks = document.querySelector('.nav-links');
    var mobileToggle = document.querySelector('.nav-mobile-toggle');
    if (navLinks) navLinks.classList.remove('nav-open');
    if (mobileToggle) mobileToggle.classList.remove('active');

    if (a.href === location.href) return;

    fetch(a.href)
      .then(function (res) { return res.text(); })
      .then(function (html) {
        swapContent(html, a.href);
        history.pushState(null, '', a.href);
      })
      .catch(function () {
        location.href = a.href;
      });
  });

  window.addEventListener('popstate', function () {
    fetch(location.href)
      .then(function (res) { return res.text(); })
      .then(function (html) {
        swapContent(html, location.href);
      })
      .catch(function () {
        location.reload();
      });
  });
})();
