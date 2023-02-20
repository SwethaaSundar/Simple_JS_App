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
function addListItem(pokemon){
  // let pokeList = document.querySelector('.pokedex_lt');
  // let listItem = document.createElement('li');
  // let button = document.createElement('button');

  // button.innerText = pokemon.name;
  // button.classList.add('button');
  // listItem.classList.add('list');
  // pokeList.appendChild(listItem);
  // listItem.appendChild(button);

  let pokeList = $('.pokedex_lt');
  let listItem = $('<li class="group-list-item "></li>');
  let button = $(`<button type="button" class="pokemon-button btn btn-primary" 
          data-toggle="modal" data-target="#pokeModal">${pokemon.name}</button>`);
  pokeList.append(listItem);
  listItem.append(button);

  // button.addEventListener('click',showDetails(pokemon)); it logs when the objects are loaded in the DOM
  // button.addEventListener('click', function() {showDetails (pokemon);}) // this logs only when the button is clicked
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
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
    item.weight = details.weight;
  }).catch(function (e) {
    console.error(e);
  });
}
// This function shows a modal with the pokemon details
function showModal(item){
  let container = document.querySelector('.modal_container');
  container.innerHTML = '';
  let modal = document.createElement('div');
  modal.classList.add('modal');
  // add button with class modal-close
  let closeBtn = document.createElement('button');
  closeBtn.classList.add('modal-close');
  closeBtn.innerText = 'Close';
  // hide when close button is clicked
  closeBtn.addEventListener('click', hideModal);
  // add title 
  let modalTitle = document.createElement('h1');
  modalTitle.classList.add('modal-title');
  modalTitle.innerText= item.name;
  // add type
  let modalTypes = document.createElement('p');
  modalTypes.classList.add('modal-types');
  var pokeType = "";
  for (let i in item.types) {
      pokeType += item.types[i].type.name + " ";
  }
  modalTypes.innerText = "Types: " + pokeType;
  // add height
  let modalHeight = document.createElement('p');
  modalHeight.classList.add('modal-height');
  modalHeight.innerText = "Height: " + item.height + " cm";
  // add weight
  let modalWeight = document.createElement('p');
  modalWeight.classList.add('modal-weight');
  modalWeight.innerText = "Weight: " + item.weight + " kg";   
  // add image 
  let modalImage = document.createElement("img");
  modalImage.classList.add('modal-image')
  modalImage.setAttribute("src", item.imageUrl); 
  // append all the element
  modal.appendChild(closeBtn);
  modal.appendChild(modalTitle);
  modal.appendChild(modalTypes);
  modal.appendChild(modalHeight);
  modal.appendChild(modalWeight);
  modal.appendChild(modalImage);
  container.appendChild(modal);
  // making the container visible
  container.classList.add('is-visible');
  // hide when clicked outside the container
  container.addEventListener('click',(e) =>{
  //   // Since this is also triggered when clicking INSIDE the modal
  //   // We only want to close if the user clicks directly on the overlay
    // let target = e.target;
    if (e.target === container) {
      hideModal();
    }
  });
}
function hideModal(){
  let container = document.querySelector('.modal_container');
  container.classList.remove('is-visible');
}
// hide when esc key is pressed
window.addEventListener('keydown',(e) =>{
let container = document.querySelector('.modal_container');
if (e.key === 'Escape' && container.classList.contains('is-visible')){
hideModal();
}
});
// Return object with the same names for keys as values
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showModal: showModal,
  hideModal: hideModal
};
})();
pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach (function (pokemon) {
pokemonRepository.addListItem(pokemon);
});
});
