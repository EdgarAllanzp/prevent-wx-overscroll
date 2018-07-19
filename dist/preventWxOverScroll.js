(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.preventWxOverscroll = factory());
}(this, (function () { 'use strict';

  function preventWxOverscroll(el) {
    let y1, scrollTop;

    el.addEventListener('touchstart', (evt) => {
      scrollTop = el.scrollTop;
      y1 = evt.touches[0].clientY;
    });

    el.addEventListener('touchmove', (evt) => {
      let y2 = evt.touches[0].clientY;
      let { scrollHeight, clientHeight } = el;
      if (scrollHeight > clientHeight && (scrollTop !== 0 || y2 - y1 < 0)) {
        evt._isScroller = true;
      }
      scrollTop = el.scrollTop;
    });
  }

  document.body.addEventListener('touchmove', (evt) => {
    if (!evt._isScroller) {
      evt.preventDefault();
    }
  }, { passive: false });

  return preventWxOverscroll;

})));
