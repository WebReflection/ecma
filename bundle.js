window.WAS_AFTER = window.AFTER;

setTimeout(function () {
  document.documentElement.className = window.WAS_AFTER ? 'ok' : 'error';
  document.body.innerHTML = 'ES5';
}, 1000);