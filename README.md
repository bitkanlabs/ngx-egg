# Ngx-Egg

Egg Framework for Angular

## QuickStart

```bash
$ yarn add ngx-egg
```

publish your framework to npm, then change app's dependencies:

```js
// {app_root}/index.js
require('ngx-egg').startCluster({
  baseDir: __dirname,
  // port: 7001, // default to 7001
});

```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

