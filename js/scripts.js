var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imgUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

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

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
