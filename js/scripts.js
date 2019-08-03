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

/* for(var i = 0; i < repository.length; i++)
{
  document.write("<p>" + repository[i].name);
  document.write(" (height: " + repository[i].height + ")");
  if(repository[i].height >= 20)
  {
    document.write(" - Wow, that's big!")
  }
} */

// Using forEach function to loop over Pokemon in the repository array
repository.forEach(function(property) {
  document.write('<h3>==============</h3>');
  Object.keys(property).forEach(function(currentItem) {
    document.write('<p>' + currentItem + ': ' + property[currentItem] + '</p>');
  })
});
