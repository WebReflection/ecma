setTimeout(function () {
  document.documentElement.className = window.WAS_AFTER ? 'ok' : 'error';
  document.body.textContent = 'ES6 / ES2015';
}, 1000);