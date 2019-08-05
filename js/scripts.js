var pokemonRepository = (function () {
  var repository = [
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass', 'poison']
    },
    {
      name: 'Ivysaur',
      height: 10,
      types: ['grass', 'poison']
    },
    {
      name: 'Venusaur',
      height: 20,
      types: ['grass', 'poison']
    }
  ];

  function add(pokemon) {
    if(typeof pokemon === typeof {}) {
     repository.push(pokemon);
   }
    else {
     return document.write('<p> "' + pokemon + '" is a wrong input type! </>');
   }
  }

  function getAll() {
    return repository
  }

  return {
    add: add,
    getAll: getAll
  };
})();


/* for(var i = 0; i < repository.length; i++)
{
  document.write("<p>" + repository[i].name);
  document.write(" (height: " + repository[i].height + ")");
  if(repository[i].height >= 20)
  {
    document.write(" - Wow, that's big!")
  }
} */

// Adding new pokemon
pokemonRepository.add(8);
pokemonRepository.add('Hello World');
pokemonRepository.add({ name: 'Charmander', height: 6, type: ['fire']});

// Using forEach function to loop over Pokemon in the repository array
pokemonRepository.getAll().forEach(function(property) {
  document.write('<h3>==============</h3>');
  Object.keys(property).forEach(function(currentItem) {
    document.write('<p>' + currentItem + ': ' + property[currentItem] + '</p>');
  })
});
