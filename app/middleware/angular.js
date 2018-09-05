'use strict';

module.exports = () => {
  return async function angular(next) {
    return this.app.angular.render(this) || next();
  };
};
