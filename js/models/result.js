App.Result = DS.Model.extend({
  artistName: DS.attr('string'),
  artistImage: DS.attr('string')
});

App.Result.FIXTURES = [
  { id: 1,
    artistName: 'Queen',
    artistImage: 'dev-imgs/Queen.jpg'
  },
  { id: 2,
    artistName: 'The Rolling Stones',
    artistImage: 'dev-imgs/TheRollingStones.jpg'
  },
  { id: 3,
    artistName: 'The Beach Boys',
    artistImage: 'dev-imgs/TheBeachBoys.jpg'
  },
  { id: 4,
    artistName: 'The Who',
    artistImage: 'dev-imgs/TheWho.jpg'
  },
  { id: 5,
    artistName: 'The Kinks',
    artistImage: 'dev-imgs/TheKinks.jpg'
  },
  { id: 6,
    artistName: 'The Animals',
    artistImage: 'dev-imgs/TheAnimals.jpg'
  },
  { id: 7,
    artistName: 'The Monkees',
    artistImage: 'dev-imgs/TheMonkees.jpg'
  },
  { id: 8,
    artistName: 'Paul McCartney',
    artistImage: 'dev-imgs/PaulMcCartney.jpg'
  },
  { id: 9,
    artistName: 'John Lennon',
    artistImage: 'dev-imgs/JohnLennon.jpg'
  },
];