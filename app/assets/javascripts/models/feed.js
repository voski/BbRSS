NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: '/api/feeds',

  entries: function () {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries(
        [], { feed: this }
      );
    }

    return this._entries;
  },

  parse: function(data) {
    if (data.latest_entries) {
      this.entries().set(data.latest_entries);
      delete data.latest_entries;
    };

    return data;
  },
});
