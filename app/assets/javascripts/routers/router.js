NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new NewsReader.Collections.Feeds();
    this.collection.fetch();
  },

  routes: {
    '' : 'index',
    'feeds/:id' : 'feedShow'
  },

  index: function () {
    var view = new NewsReader.Views.FeedIndex({
      collection: this.collection
    });
    this._swapView(view);
  },

  feedShow: function (id) {
    var feed = this.collection.getOrFetch(id);
    // feed.fetch();
    var view = new NewsReader.Views.Show({ model: feed });
    this._swapView(view);
  },

  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    view.render();
    this.$rootEl.html(view.$el);
  },
});
