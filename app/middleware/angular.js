'use strict';

module.exports = () => {
  return async function angular(ctx, next) {
    return ctx.app.angular.render(ctx) || next();
  };
};
