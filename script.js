(function () {
  'use strict';

  var STORAGE_KEY = 'pm-lang';

  function detectLocale() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'pt') return stored;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.indexOf('pt') === 0 ? 'pt' : 'en';
  }

  function applyLocale(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-en]').forEach(function (el) {
      var value = lang === 'pt' ? el.getAttribute('data-pt') : el.getAttribute('data-en');
      if (value != null) el.textContent = value;
    });

    var toggle = document.getElementById('localeToggle');
    var label = document.getElementById('localeLabel');
    if (toggle && label) {
      label.textContent = lang === 'pt' ? 'pt-BR' : 'en';
      toggle.setAttribute('aria-pressed', String(lang === 'pt'));
      toggle.setAttribute(
        'aria-label',
        lang === 'pt' ? 'Switch to English' : 'Mudar para Português'
      );
    }

    localStorage.setItem(STORAGE_KEY, lang);
    document.body.setAttribute('data-lang', lang);
  }

  function initLocale() {
    var current = detectLocale();
    applyLocale(current);

    var toggle = document.getElementById('localeToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = document.documentElement.lang.indexOf('pt') === 0 ? 'en' : 'pt';
        applyLocale(next);
      });
    }
  }

  function currentLang() {
    return document.documentElement.lang.indexOf('pt') === 0 ? 'pt' : 'en';
  }

  function labelFor(button, state) {
    var lang = currentLang();
    return button.getAttribute('data-' + state + '-' + lang) || '';
  }

  function wireCopyButton(buttonId, textToCopy) {
    var button = document.getElementById(buttonId);
    if (!button) return;
    var labelEl = button.querySelector('span');
    var resetTimer = null;

    button.addEventListener('click', function () {
      var text = typeof textToCopy === 'function' ? textToCopy() : textToCopy;

      function showCopied() {
        button.classList.add('is-copied');
        if (labelEl) labelEl.textContent = labelFor(button, 'done');
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function () {
          button.classList.remove('is-copied');
          if (labelEl) labelEl.textContent = labelFor(button, 'default');
        }, 2200);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(showCopied).catch(function () {
          window.location.href = 'mailto:' + text;
        });
      } else {
        var temp = document.createElement('textarea');
        temp.value = text;
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.select();
        try {
          document.execCommand('copy');
          showCopied();
        } catch (err) {
          window.location.href = 'mailto:' + text;
        }
        document.body.removeChild(temp);
      }
    });
  }

  function wireEmailHint() {
    var button = document.getElementById('copyEmailBtn');
    var hint = document.getElementById('copyHint');
    if (!button || !hint) return;
    button.addEventListener('click', function () {
      var lang = currentLang();
      hint.textContent =
        lang === 'pt'
          ? 'pdr.motta@gmail.com copiado para a área de transferência.'
          : 'pdr.motta@gmail.com copied to clipboard.';
      window.setTimeout(function () {
        hint.textContent = '';
      }, 3000);
    });
  }

  function wireContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var name = document.getElementById('contactName').value.trim();
      var service = document.getElementById('contactService').value;
      var message = document.getElementById('contactMessage').value.trim();

      var subject = 'Contact from portfolio: ' + service;
      var bodyLines = [
        'Name: ' + name,
        'Service: ' + service,
        '',
        message
      ];

      var mailto =
        'mailto:pdr.motta@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailto;
    });
  }

  function wireTopbarElevation() {
    var topbar = document.getElementById('topbar');
    if (!topbar) return;
    var ticking = false;

    function update() {
      topbar.classList.toggle('topbar--scrolled', window.scrollY > 8);
      ticking = false;
    }

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    update();
  }

  function wireActiveSection() {
    var tabs = document.querySelectorAll('.topbar__tab');
    if (!tabs.length) return;

    var sections = Array.prototype.slice
      .call(tabs)
      .map(function (tab) {
        var id = tab.getAttribute('href').slice(1);
        return { id: id, tab: tab, el: document.getElementById(id) };
      })
      .filter(function (entry) {
        return entry.el;
      });

    if (!('IntersectionObserver' in window) || !sections.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var match = sections.find(function (s) {
            return s.el === entry.target;
          });
          if (!match) return;
          if (entry.isIntersecting) {
            tabs.forEach(function (t) {
              t.classList.remove('is-active');
            });
            match.tab.classList.add('is-active');
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach(function (s) {
      observer.observe(s.el);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLocale();
    wireCopyButton('copyEmailBtn', 'pdr.motta@gmail.com');
    wireCopyButton('copyPixBtn', '5724d44b-7060-4794-942e-c2b0411acf57');
    wireEmailHint();
    wireContactForm();
    wireTopbarElevation();
    wireActiveSection();
  });
})();
