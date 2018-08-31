'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.angular = {
    dist: path.join(appInfo.baseDir, 'app'),
  };

  config.static = {
    dir: path.join(config.angular.dist, 'browser'),
    prefix: '/',
  };

  config.view = {
    root: path.join(config.angular.dist, 'browser'),
    mapping: {
      '.html': 'angular',
    },
    defaultExtension: '.html',
    defaultViewEngine: 'angular',
  };

  return config;
};
