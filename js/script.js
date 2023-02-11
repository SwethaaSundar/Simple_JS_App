/*// Ex-1.1
// Displays the output in the pop-up window
alert("Hello World");

//document.write - displays the result on the screen or 
//on DOM  and it’ll do so in the exact place where it’s inserted in your HTML
let myFavFood ="Pizza";
document.write(myFavFood);*/

// Ex-1.2
// new variable pokemonList and adding obects to the array
/*let pokemonList= [
    {name: "Pikachu" , height: 0.4 , 
    types: 'electric', weight: 6 },

    {name: "Bulbasaur", height: 0.7 , 
    types: ['grass','poison'], weight: 6.9 },

    {name: "Ponyta", height: 1 , 
    types: 'fire', weight: 30},

    {name: "Butterfree", height: 1.1 , 
    types: ['bug' , 'fly'] , weight: 32},

    {name: "Squirtle", height: 0.5 , 
    types: 'water' , weight: 9},

    {name: "Nidoking", height: 1.4 , 
    types: ['ground' , 'poison'] , weight: 62},

    {name: "Wigglytuff", height: 1 , 
    types: ['fairy' , 'normal'] , weight: 12},

    {name: "Kangaskhan", height: 2.2 , 
    types: 'normal' , weight: 80},

    {name: "Poliwrath", height: 1.3 , 
    types: ['water' , 'fighting'] , weight: 54},

    {name: "Metagross", height: 1.6 , 
    types: ['psychic' , 'steel'] , weight: 550}
];*/

let pokemonRepository= (function() {
    let pokemonList= [
        {name: "Pikachu" , height: 0.4 , 
        types: 'electric', weight: 6 },
    
        {name: "Bulbasaur", height: 0.7 , 
        types: ['grass','poison'], weight: 6.9 },
    
        {name: "Ponyta", height: 1 , 
        types: 'fire', weight: 30},
    
        {name: "Butterfree", height: 1.1 , 
        types: ['bug' , 'fly'] , weight: 32},
    
        {name: "Squirtle", height: 0.5 , 
        types: 'water' , weight: 9},
    
        {name: "Nidoking", height: 1.4 , 
        types: ['ground' , 'poison'] , weight: 62},
    
        {name: "Wigglytuff", height: 1 , 
        types: ['fairy' , 'normal'] , weight: 12},
    
        {name: "Kangaskhan", height: 2.2 , 
        types: 'normal' , weight: 80},
    
        {name: "Poliwrath", height: 1.3 , 
        types: ['water' , 'fighting'] , weight: 54},
    
        {name: "Metagross", height: 1.6 , 
        types: ['psychic' , 'steel'] , weight: 550}
    ] 

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
    pokeList.appendChild(listItem);
    listItem.appendChild(button);

    // button.addEventListener('click',showDetails(pokemon)); it logs when the objects are loaded in the DOM
    button.addEventListener('click', function() {showDetails (pokemon);}) // this logs only when the button is clicked
}
function showDetails(pokemon){
console.log('Name: '+ pokemon.name+ ', '+ 'Height: '+ pokemon.height+ 'cm, '+ 'Types: '+ pokemon.types+', '+ 'Weight: '+ pokemon.weight + 'kg' + '.')
}
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();
// console.log(pokemonList[5]);
// console.log(pokemonList[2].weight);
// console.log(pokemonList[3].types[1]);

// Ex-1.3
/*for ( let i = 0; i <= pokemonList.length; i++)
{
    if (pokemonList[i].height < 1){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " weight: " + pokemonList[i].weight + ")- Too small!!" + "<br><br>");
    }
    else if (pokemonList[i].height > 1 && pokemonList[i].height <= 1.5){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " weight: " + pokemonList[i].weight + ")- Average size" + "<br><br>");
    }
    else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " weight: " + pokemonList[i].weight + ")- Too Big!!" + "<br><br>");
    }
} */

//Ex-1.5
// part-1
// pokemonList.forEach (function(list) {
// pokemonRepository.getAll().forEach (function(list) {
//     if (list.height < 1){
//         document.write(list.name + " (height: " + list.height + " weight: " + list.weight + ")- Too small!!" + "<br><br>");
//     }
//     else if (list.height > 1 && list.height <= 1.5){
//         document.write(list.name + " (height: " + list.height + " weight: " + list.weight + ")- Average size" + "<br><br>");
//     }
//     else {
//         document.write(list.name + " (height: " + list.height + " weight: " + list.weight + ")- Too Big!!" + "<br><br>");
//     }  
// });
pokemonRepository.getAll().forEach (function (pokemon) {
pokemonRepository.addListItem(pokemon);
});
