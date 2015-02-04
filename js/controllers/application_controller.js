MusicFinder.App.ApplicationController = Ember.Controller.extend({
  query: '',
  actions: {
    search: function() {
      var artistName = this.get('query');
      this.getSimilarArtists(artistName)
    }
  },

  getSimilarArtists: function(artistName) {
    var echonest = new EchoNest('SNXAFW8HRV2RLZTNW');
    echonest.artist(artistName).similar(function(similarCollection) {
      return similarCollection.data.artists;
    });
  }
});