$(document).on('ready', function() {
  var echonest = new EchoNest('SNXAFW8HRV2RLZTNW');
  // var echonest = new MusicFinder.SearchModule(new EchoNest('SNXAFW8HRV2RLZTNW'));

  // echonest.getSimilarArtists('muse');

});

var MusicFinder ={}
MusicFinder.App = Ember.Application.create({
  LOG_TRANSITIONS: true


});