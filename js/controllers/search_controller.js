MusicFinder.App.SearchController = Ember.Controller.extend({
  query: '',
  echonest: new EchoNest('SNXAFW8HRV2RLZTNW'),
  actions: {
    search: function() {
      var artistName = this.get('query');
      var searchArtist = this.getArtist(artistName);

      console.log(searchArtist)
      debugger
      // this.getSimilarArtists(artistName);
      // console.log(artistsCollection)
    }
  },

  getArtist: function(artistName) {
    return this.echonest.artist(artistName);
  },

  getSimilarArtists: function(artistName) {
    var echonest = new EchoNest('SNXAFW8HRV2RLZTNW');
    echonest.artist(artistName).similar(function(similarCollection) {
      console.log(similarCollection.data.artists);
    });
  }
});