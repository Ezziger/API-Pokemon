//Afficher le pokedex complet

const url = "https://pokeapi.co/api/v2/pokemon/?limit=101";
const searchBar = document.getElementById("searchBar");
const listPokemon = document.getElementById("pokemonCard");
let pokemonCharacters = [];



fetch(url)
    .then((res) => res.json())
    .then(function displayList(data) {
        let pokemonData = data.results;
        console.log(data);

        let displayList = "";
        pokemonData.forEach((element, index) => {
            displayList += `<div class="pokemon"> ${element.name} </div><a id="${index}" onClick="addPokemon(this.id)" href="">Ajouter</a>`;
        });

        let pokemonEl = document.getElementById("pokemonCard");

        if (pokemonData.length != 0) {
            pokemonEl.innerHTML = displayList;
        } else {
            productEl.innerHTML = "";
        };
    });

// LocaleStorage

function addPokemon(id) {
    let pokemonList;
    let pokemonText = localStorage.getItem("Pokemon");

    if (pokemonText == null) {
        pokemonList = [];
    } else {
        pokemonList = JSON.parse(pokemonText);
    }

    let addName = document.getElementsByClassName("pokemon")[id].innerText;
    let dataLocalStorage;
    if (addName !== "") {
        dataLocalStorage = {
            nom: addName
        }
    };
    console.log(dataLocalStorage);
    pokemonList.push(dataLocalStorage);
    localStorage.setItem("Pokemon", JSON.stringify(pokemonList));

    displayTeam();
};

//Affichage de ma liste de pokémons

function displayTeam() {
    let pokemonList;
    let pokemonText = localStorage.getItem("Pokemon");

    if (pokemonText == null) {
        pokemonList = [];
    } else {
        pokemonList = JSON.parse(pokemonText);
    }

    let teamDisplay = "";

    pokemonList.forEach((element, index) => {
        teamDisplay += `<div> ${element.nom} </div><a id="${index}" onClick="deletePokemon(this.id)" href="">Supprimer</a>`
    });

    let teamEl = document.getElementById("myTeam");

    if (pokemonList.length != 0) {
        teamEl.innerHTML = teamDisplay;
    } else {
        teamEl.innerHTML = "";
    }
}

//Suppression d'un élément

function deletePokemon(id) {
    let pokemonList;
    let pokemonText = localStorage.getItem("Pokemon");

    if (pokemonText == null) {
        pokemonList = [];
    } else {
        pokemonList = JSON.parse(pokemonText);
    }

    pokemonList.splice(id, 1);
    localStorage.setItem("Pokemon", JSON.stringify(pokemonList));
};

//Filtrage


searchBar.addEventListener("keyup", e => {
    const searchString = e.target.value;
    console.log(searchString);
});

displayTeam();