let pokemonRepository= (function() {
    let pokemonList= [];
    let pokeapiUrl= 'https://pokeapi.co/api/v2/pokemon/';

function add(list) {
    pokemonList.push(list);
  }
function getAll(){
    return pokemonList;
}
function addListItem(pokemon){
    let pokeList = document.querySelector('.pokedex_lt');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.classList.add('list');
    pokeList.appendChild(listItem);
    listItem.appendChild(button);

    // button.addEventListener('click',showDetails(pokemon)); it logs when the objects are loaded in the DOM
    button.addEventListener('click', function() {showDetails (pokemon);}) // this logs only when the button is clicked
}
function showDetails(pokemon){  
loadDetails(pokemon).then(function () {
  showModal(pokemon);
});
}

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
  function showModal(item){
    let container = document.querySelector('.container');
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
    let container = document.querySelector('.container');
    container.classList.remove('is-visible');
}
 // hide when esc key is pressed
 window.addEventListener('keydown',(e) =>{
 let container = document.querySelector('.container');
 if (e.key === 'Escape' && container.classList.contains('is-visible')){
 hideModal();
 }
});
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
