NewsReader.Views.Show = Backbone.View.extend({
  template: JST['feeds/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "click .title" : "refresh"
  },

  render: function () {
    var content = this.template({
        feed: this.model
      });

    this.$el.html(content);

    var $ul = this.$('ol');
    this.model.entries().each(function (entry) {
      var view = new NewsReader.Views.EntryItem({ model: entry });
      view.render();
      $ul.append(view.$el);
    });

    return this;
  },

  refresh: function () {
    this.model.fetch();
  }

});
