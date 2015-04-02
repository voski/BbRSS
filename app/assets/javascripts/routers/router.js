NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
    this.collection = new NewsReader.Collections.Feeds();
    this.collection.fetch();
  },

  routes: {
    '' : 'index'
  },

  index: function () {
    var view = new NewsReader.Views.FeedIndex({
      collection: this.collection
    });
    view.render();
    this.$rootEl.html(view.$el);
  },
})
