let pokemonRepository= (function() {
    let pokemonList= [];
    let pokeapiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=1000';

// This function adds (pushes) a pokemon object to the pokemon array
function add(list) {
    pokemonList.push(list);
  }
// This function return the entire pokemon array
function getAll(){
    return pokemonList;
}
// This function adds a button to the website with the pokemon name
// and an event listener that calls the showDetails function on click
function addListItem(pokemon){
    let pokeList = $('.poke_list');
    let listItem = $('<li class="list-group-item "></li>');
    let button = $(`<button type="button" class="pokemon-button btn_poke" 
            data-toggle="modal" data-target="#pokeModal">${pokemon.name}</button>`);
            
    listItem.append(button);
    pokeList.append(listItem);
    button.on('click', function(){
    showDetails (pokemon);
    })
}
// This function logs the given pokemon details on the console
    function showDetails(pokemon){  
    loadDetails(pokemon).then(function () {
    showModal(pokemon);
    });
}
// This function fetches all pokemons from the api
// ands adds them ton the array using the add function
    function loadList() {
      return fetch(pokeapiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
       json.results.forEach(function (item) {
       let pokemon = {
        name: item.name,
        detailsUrl: item.url
    };
      add(pokemon);
    });
    }).catch(function (e) {
       console.error(e);
    })
}
// This function adds details to a specific pokemon object on the array
// using the deatilsUrl of the pokemon object to get the details from the api
   function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
    return response.json();
}).then(function (details) {
//  Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
    item.weight = details.weight;
}).catch(function (e) {
     console.error(e);
     });
}
//  This function logs the given pokemon details on the console
    function showModal(item){
      var pokeType = "";
      for (let i in item.types) {
          pokeType += item.types[i].type.name + " ";
      }

      let   modalTitle = $(".modal-title");
      let modalBody = $(".modal-body");

      modalTitle.empty();
      modalBody.empty();
      // add title 
      modalTitle.append (item.name);
      // add type
      modalBody.append(`<p>Types: ${pokeType} </p>`);
      // add height
      modalBody.append(`<p>Height: ${item.height}</p>`);
      // add weight 
      modalBody.append(`<p>weight: ${item.weight}</p>`);
      // add image 
      modalBody.append(`<img class= "modal-img" src="${item.imageUrl}">`)
  }
// Return object with the same names for keys as values
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
  };
})();
pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach (function (pokemon) {
pokemonRepository.addListItem(pokemon);
});
});
// This function returns a pokemon array with all pokemons
// that include the "search" term in their Name
function mySearch() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("poke_search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("poke_lt");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("button")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
