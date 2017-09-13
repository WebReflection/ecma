# ecma
The simplest way to load ES modules or bundled fallbacks

- - -

## How to

Just put on top of your HTML page (even before polyfills) the script
tag with the following attributes:

  * **data-module** the ES2015 module entry
  * **data-src** the ES3/5 fallback

All browsers that are not implementing `nomodule` on script tags
will be forced to use the fallback.

```html
<script
  data-module="modern.js"
  data-src="bundle.js"
>!function(E,C,M,A){
  // if you don't care about full backward compatibility
  // M = E.querySelector(C + '[data-module]');
  M = E.getElementsByTagName(C)[0];
  A = M.parentNode.insertBefore(E.createElement(C), M);
  'noModule' in M ?
    (A.type = 'module', A.src = M.dataset.module):
    (A.defer = 1, A.src = M.getAttribute('data-src'))
}(document, 'script')</script>
```

As easy as that.


### Compatibility

IE6 and above. [Live test](https://webreflection.github.io/ecma/) <sup><sub>(it shows after one second on purpose)</sub></sup>

### ES6 / ES2015 Browsers

A list of browsers that will use native modules, hence fully compatible with ES2015 syntax.

This list destiny it to keep growing over time.
Meanwhile, the bundled fallback will still work as it's already the case today.

**Desktop**

  * WebKit (GNOME Web, WebKitGTK+)
  * Chrome / Chromium

**Mobile**

No browser as of today ships with ES2015 modules support.


#### [WTFPL License](https://en.wikipedia.org/wiki/WTFPL)
