This is a testcase that uses a very basic webpack + babel setup to compile ES6 to ES5.
It makes use of the `transform-runtime` babel plugin, with the `helpers` flag set to `true`.

With these settings, any use of the `extends` keyword will cause the initial evaluation of
the JS to take at least 20ms in Firefox, because one of the transform-runtime helper modules
calls `Object.getOwnPropertyNames(window)` during module initialization.

```
npm install
npm run build
```
This will run webpack + babel to compile `index.js` to `bundle.js`.

Loading `index.html` will print how long it took to `require('./benchmark')`.
