NewsReader.Views.DetailShow = Backbone.View.extend({
  template: JST['entry/detail_show'],
  tagName: 'li',

  events: {
    "dblclick" : "renderTitle"
  },


  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.parent = options.parent
  },

  render: function () {
    var content = this.template( {entry: this.model} );
    this.$el.html(content);
    return this;
  },

  renderTitle: function () {
    this.parent.render();
    this.parent.delegateEvents({
      'dblclick' : "renderDetail"
    });
    this.undelegateEvents();
    console.log("in render title")
    // var view = new NewsReader.Views.EntryItem ( {model: this.model} );
    // view.render();
    // this.$el.html(view.$el);
  }
});
