'use strict';

module.exports = {
  getRouterStore: function() {
    return this.getStore('router');
  },

  getRouterActions: function() {
    return this.getActions('router');
  },

  registerRouteHandler: function(handler) {
    var store = this.getStore('router');

    store.addChangeListener(handler);

    return this;
  }
}
