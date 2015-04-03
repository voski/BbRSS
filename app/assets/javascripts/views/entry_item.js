NewsReader.Views.EntryItem = Backbone.View.extend({
  template: JST['entry/show'],
  tagName: 'li',

  events: {
    'dblclick' : "switchTemplate"
  },

  initialize: function (){
    this.listenTo(this.model, 'sync destroy', this.render);
    this._currentTemplate = this.titleTemplate;
  },

  render: function () {
    var content = this._currentTemplate({ entry: this.model });
    this.$el.html(content);
    return this;
  },

  renderDetail: function () {
    console.log('in detail')
    var detailView = new NewsReader.Views.DetailShow({
                        model: this.model,
                        parent: this
                      });
    this.undelegateEvents();
    detailView.render();
    this.$el.html(detailView.$el);
  },

  switchTemplate: function () {
    var nextTemp = ((this._currentTemplate === this.detailTemplate) ? this.titleTemplate : this.detailTemplate);
    this._currentTemplate = nextTemp;
    this.render();
  },

  detailTemplate: JST['entry/detail_show'],
  titleTemplate: JST['entry/show']

  //
  // _swapView: function (view) {
  //   if (this.currentView) {
  //     this.currentView.remove();
  //   }
  //   this.currentView = view;
  //   view.render();
  //   this.$rootEl.html(view.$el);
  // },
});
