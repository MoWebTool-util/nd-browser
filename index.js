/**
 * Description: index.js
 * Author: lzhengms <lzhengms@gmail.com>
 * Date: 2015-01-31 12:26:15
 */

'use strict';

module.exports = (function () {
  var ie = !!window.ActiveXObject;
  var firefox = !!window.InstallTrigger;
  var webkit = !!window.devicePixelRatio;
  var opera = !!window.opera;
  var chrome = !!window.chrome;

  var browser = {
    ie: ie,
    ie6: ie && !window.XMLHttpRequest, // IE6没有Window.XMLHttpRequest，其后版本都有
    ie7: ie && navigator.appVersion.match(/7./i) === '7.',
    ie8: !!window.XDomainRequest,
    ie9: ie && +'\v1',
    firefox: firefox,
    opera: webkit && opera,
    safari: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
    chrome: webkit && chrome && !opera
  };

  browser.is = (function () {
    if (browser.ie || browser.ie6 || browser.ie7 || browser.ie8 || browser.ie9) {
      return 'IE';
    }
    for (var b in browser) {
      if (browser.hasOwnProperty(b) && browser[b]) {
        return b;
      }
    }
    return 'Unknown'; // IE version > 9
  })();

  return browser;
})();
