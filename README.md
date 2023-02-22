# Simple_JS_App
Basic JS application
This is a simple JavaScript application- Pokemon list app with its types, height, weight and image.
https://swethaasundar.github.io/Simple_JS_App/

## Functions and Events 
    1.add(pokemon): This function adds (pushes) a pokemon object to the pokemon array
    2.getAll(): This function return the entire pokemon array list into the repository
    3.addListItem(pokemon): This function adds a button to the website with the pokemon name and an event listener that calls the showDetails function on click
    4.loadList():  This function fetches all pokemons from the api ands adds them to the array using the add function
    5.loadDetails(pokemon): This function adds details to a specific pokemon object on the array using the deatilsUrl of the pokemon object to get the details from the api
    6.showDetails(pokemon): shows a modal with the details of a specific Pokemon
    7.addEventListenerToButton(button, pokemon): button that opens a modal showing the details of a Pokemon when clicked
    8.onkeyup event: This is added to the input search text - This function returns a pokemon array with all pokemons that include the "search" term in their Name

## Technologies: 
    -HTML
    -CSS
    -JavaScript
    -Ajax
    -jQuery
    -Bootstrap
    -API- https://pokeapi.co/

## How to use the site:
You can click on the buttons to see the pokémon's height, types, weight and an image of it. The modal window can be closed by clicking on the 'Close' button, clicking outside the window or pressing 'Escape'.

With the use of searchbar you can search for a specific pokémon. Write in the name (or just a part of it), returns a pokemon array with all pokemons that include the "search" term in their Name. If you would like to have all the pokémons again, then clear the search bar.

## Screenshot
![pokémon list app](https://github.com/SwethaaSundar/Simple_JS_App/blob/main/screenshot.png)
<!-- <img src="" alt="Alt text" title="Optional title"> -->


