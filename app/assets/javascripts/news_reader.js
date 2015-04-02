window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    new NewsReader.Routers.Router({ $rootEl: $('#content') });
    Backbone.history.start();
    // feeds = new NewsReader.Collections.Feeds;
    // feeds.fetch().then(function(){ feed = feeds.models[0]})
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
