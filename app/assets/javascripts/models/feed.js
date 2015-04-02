NewsReader.Models.Feed = Backbone.Model.extend({
  rootUrl: '/api/feeds',

  entries: function () {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries(
        [], { feed: this }
      );
    };
    return this._entries;
  }
})
