/* ov-lite.js — amadeya26 site-owned vanilla-порт механики overheight (ex ov.js детокса, jQuery-free).
   Контракт тот же: #menu-button[data-content="main-menu"] → .over-container#over-container >
   .over-content#over-content + .overheight_close_button; классы is_open/is_show; scroll-lock
   через body.ScrollOff. world.js (Core) навешивает на этот DOM меню v2.1 (подложка/аккордеон/a11y). */
(function () {
  'use strict';

  var overheight = {
    elem: null,
    data: {},
    _container: null,
    _tMove: null,
    _tRemove: null,

    _cancelPending: function () {
      if (this._tMove) { clearTimeout(this._tMove); this._tMove = null; }
      if (this._tRemove) { clearTimeout(this._tRemove); this._tRemove = null; }
    },

    action: function (elem) {
      var isOpen = elem.classList.contains('is_open');
      var shown = document.getElementById('over-container');
      var isShow = shown && shown.classList.contains('is_show');
      if (isOpen && isShow) { this.close(elem); }
      else if (!isOpen && !isShow) { this.open(elem); }
      else if (!isOpen && isShow) {
        if (this.elem) this.close(this.elem);
        var self = this;
        setTimeout(function () { self.open(elem); }, 100);
      } else if (isOpen && !isShow) { this.close(elem); }
    },

    open: function (elem) {
      this._cancelPending();
      if (this._container) { this._container.remove(); this._container = null; }

      this.elem = elem;
      this.data = { content: elem.getAttribute('data-content'), close_button: elem.hasAttribute('data-close_button') };

      var mb = document.getElementById('menu-button');
      if (mb) mb.setAttribute('aria-expanded', 'true');

      var container = document.createElement('div');
      container.className = 'over-container';
      container.id = 'over-container';
      document.body.appendChild(container);
      this._container = container;

      var overContent = document.createElement('div');
      overContent.className = 'over-content';
      overContent.id = 'over-content';
      container.appendChild(overContent);

      var content = document.getElementById(this.data.content);
      if (!content) return;
      if (content.parentElement) content.parentElement.setAttribute('overheight_parent', this.data.content);

      elem.classList.add('is_open', 'overheight_open_button');
      overContent.appendChild(content);
      overContent.dispatchEvent(new Event('eventOverOpen'));

      if (this.data.close_button) {
        var closeBtn = document.createElement('a');
        closeBtn.className = 'overheight_close_button';
        closeBtn.href = 'javascript:;';
        closeBtn.setAttribute('role', 'button');
        closeBtn.setAttribute('aria-label', 'Закрыть меню');
        closeBtn.setAttribute('data-content', this.data.content);
        closeBtn.addEventListener('click', function () { overheight.close(closeBtn); });
        container.appendChild(closeBtn);
      }

      setTimeout(function () {
        container.style.display = 'block';
        setTimeout(function () { container.classList.add('is_show'); }, 10);
        overheight_ScrollOff();
      }, 100);
    },

    close: function (elem) {
      if (elem === undefined) elem = this.elem;
      if (!elem) return;

      var container = this._container;
      this._container = null;

      elem.classList.remove('is_open');
      document.querySelectorAll('.overheight_open_button').forEach(function (b) { b.classList.remove('is_open'); });
      var mb = document.getElementById('menu-button');
      if (mb) mb.setAttribute('aria-expanded', 'false');
      if (container) {
        container.classList.remove('is_show');
        var cb = container.querySelector('.overheight_close_button');
        if (cb) cb.remove();
      }

      overheight_ScrollOn();

      var contentId = this.data.content;
      this._tMove = setTimeout(function () {
        var content = document.getElementById(contentId);
        var parent = document.querySelector('[overheight_parent="' + contentId + '"]');
        if (content && parent) parent.appendChild(content);
      }, 200);

      this._tRemove = setTimeout(function () {
        if (container) container.remove();
      }, 300);
    }
  };

  function overheight_ScrollOff() {
    if (window.innerHeight < document.body.scrollHeight) {
      var winScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      document.body.classList.add('ScrollOff');
      document.body.setAttribute('scroll', String(winScrollTop));
      document.body.style.position = 'fixed';
      document.body.style.top = (-winScrollTop) + 'px';
      document.body.style.overflowY = 'scroll';
      document.body.style.width = '100%';
    }
  }

  function overheight_ScrollOn() {
    if (document.body.classList.contains('ScrollOff')) {
      var y = parseInt(document.body.getAttribute('scroll') || '0', 10);
      document.body.classList.remove('ScrollOff');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';
      window.scrollTo(0, y);
    }
  }

  /* клик по #menu-button — единая точка входа (inline onclick не нужен) */
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('#menu-button') : null;
    if (t) { e.preventDefault(); overheight.action(t); }
  });

  window.overheight = overheight;
})();
