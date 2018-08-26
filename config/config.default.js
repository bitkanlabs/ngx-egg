'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.static = {
    dir: path.join(appInfo.baseDir, 'app/browser'),
    prefix: '/',
  };

  config.view = {
    root: path.join(appInfo.baseDir, 'app/browser'),
    mapping: {
      '.html': 'angular',
    },
    defaultExtension: '.html',
    defaultViewEngine: 'angular',
  };

  config.angular = {
    main: path.join(appInfo.baseDir, 'app/server/main'),
  };

  return config;
};
