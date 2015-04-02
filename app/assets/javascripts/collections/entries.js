NewsReader.Collections.Entries = Backbone.Collection.extend({
  model: NewsReader.Models.Entry,

  initialize: function (model, options) {
    this.feed = options.feed;
    // this.url = this.feed.url() + '/entries';
  },

  url: function () {
    return this.feed.url() + '/entries';
  },
})
