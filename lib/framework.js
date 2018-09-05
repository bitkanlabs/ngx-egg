'use strict';
require('zone.js/dist/zone-node');
require('reflect-metadata');

// Shim for common browser env
global.window = { location: '' };
global.document = {};
global.navigator = {};
global.gtag = function() {};

const path = require('path');
const egg = require('egg');
const EGG_PATH = Symbol.for('egg#eggPath');

class Application extends egg.Application {
  get [EGG_PATH]() {
    return path.dirname(__dirname);
  }
}

class Agent extends egg.Agent {
  get [EGG_PATH]() {
    return path.dirname(__dirname);
  }
}

module.exports = Object.assign(egg, {
  Application,
  Agent,
});
