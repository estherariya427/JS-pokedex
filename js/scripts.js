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

  function addListItem(pokemon) {
    var $element = document.querySelector('.pokemon-list');
    var $listItems = document.createElement('li');
    var $button = document.createElement('button');
    $button.innerText = pokemon.name;
    $button.classList.add('buttonStyle');
    $element.appendChild($listItems);
    $listItems.appendChild($button);
    $button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {

    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
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
//  pokemonRepository.add(8);
//  pokemonRepository.add('Hello World');
//  pokemonRepository.add({ name: 'Charmander', height: 6, type: ['fire']});



// Using forEach function to loop over Pokemon in the repository array
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
