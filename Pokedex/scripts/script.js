
const contentPokedex = document.getElementById('content-pokedex');
let search = document.getElementById('srchbr');
let genshow = 1;
const modSearch = document.getElementById('content-pokedex');
/** Objeto con las generaciones */

function showGen(gen) {
    const pokeGen = {
        1:[1, 151],
        2:[152, 251],
        3:[252, 386],
        4:[387, 493],
        5:[494, 649],
        6:[650, 721],
        7:[722, 809],
        8:[810, 898]
    };

    const pokemonGenDef = [1, 151];
    const generation = pokeGen[gen] || pokemonGenDef;
    return generation;
};

let pokemonGen = showGen(genshow);

/** Cambio de generación NAV-BAR */
document.getElementById('gen-1').addEventListener('click', e=>{
    modSearch.innerHTML = '';
    genshow = 1;
    pokemonGen = showGen(genshow);
    drawPokemon();
});
document.getElementById('gen-2').addEventListener('click', e=>{
    modSearch.innerHTML = '';
    genshow = 2;
    pokemonGen = showGen(genshow);
    console.log(showGen(genshow));
    drawPokemon();
});
document.getElementById('gen-3').addEventListener('click', e=>{
    modSearch.innerHTML = '';
    genshow = 3;
    pokemonGen = showGen(genshow);
    drawPokemon();
});
document.getElementById('gen-4').addEventListener('click', e=>{
    modSearch.innerHTML = '';
    genshow = 4;
    pokemonGen = showGen(genshow);
    drawPokemon();
});
document.getElementById('gen-5').addEventListener('click', e=>{
    modSearch.innerHTML = '';
    genshow = 5;
    pokemonGen = showGen(genshow);
    drawPokemon();
});
document.getElementById('gen-6').addEventListener('click', e=>{
    modSearch.innerHTML = '';
    genshow = 6;
    pokemonGen = showGen(genshow);
    drawPokemon();
});
document.getElementById('gen-7').addEventListener('click', e=>{
    modSearch.innerHTML = '';
    genshow = 7;
    pokemonGen = showGen(genshow);
    drawPokemon();
});
document.getElementById('gen-8').addEventListener('click', e=>{
    modSearch.innerHTML = '';
    genshow = 8;
    pokemonGen = showGen(genshow);
    drawPokemon();
});

/** Cambio de generación BOTONES */
document.getElementById('next').addEventListener('click', e=>{
    if (genshow < 10) {
        modSearch.innerHTML = '';
        genshow += 1;
        pokemonGen = showGen(genshow);
        drawPokemon();
    }
});

document.getElementById('previous').addEventListener('click', e=>{
    if (genshow > 0) {
        modSearch.innerHTML = '';
        genshow -= 1;
        pokemonGen = showGen(genshow);
        drawPokemon();
    }
});

const drawPokemon = async () => {
    for (let i = pokemonGen[0]; i <= pokemonGen[1]; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id, modal) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const rest = await fetch(url);
    const pokemon = await rest.json();
    createPokemon(pokemon, modal);
}
/** Crear Color para las cartas */
const colors = {
    fire: '#FFA05D',
    grass: '#8FD594',
    electric: '#ffe43b',
    water: '#7e97c0',
    ground: '#CAAA4D',
    rock: '#90642D',
    poison: '#9D5B9B',
    bug: '#EAFD71',
    dragon: '#AB82FF',
    psychic: '#FF96B5',
    flying: '#CDCDCD',
    fighting: '#FF5D5D',
    fairy: '#FFB0FF',
    steel: '#CCCCCC',
    dark: '#A9A9A9',
    ice: '#ADD8E6',
    ghost: '#778899',
    normal: '#DDCCAA'
};

const main_types = Object.keys(colors);

function createPokemon(pokemon, modal) {
    const pokemonElement = document.createElement('div');

    pokemonElement.classList.add('pokemon');

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];

    pokemonElement.style.backgroundColor = color;

    if (modal !== true) {
        const pokeInnerHTML = `
            <div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.id
                }.png" alt="${name}" />
            <div class="info">
                <span class="number">#${pokemon.id
                    .toString()
                    .padStart(3, '0')}</span>
                <h3 class="name">${name}</h3>
                <small class=type">Type: <span>${type}</span></small>
            </div>
        `;
        pokemonElement.innerHTML = pokeInnerHTML;
        contentPokedex.appendChild(pokemonElement);
    }

    else {
        const pokeInnerHTML = `
            <div class="modal" id="modalPokemon">
                <div class="pokemon">
                    <div class="img-container">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                            pokemon.id
                        }.png" alt="${name}" />
                    </div>
                    <div class="info">
                        <span class="number">#${pokemon.id
                            .toString()
                            .padStart(3, '0')}</span>
                        <h3 class="name">${name}</h3>
                        <small class=type>Type: <span>${type}</span></small>
                    </div>
                </div>
            </div>`;
        
        modSearch.innerHTML = pokeInnerHTML;
    }
}

drawPokemon();

/** Buscar Pokemon */
search.addEventListener('submit', e => {
    e.preventDefault();    
    let searchPokemon = document.getElementById('search').value;
    document.getElementById('footer').style.position = 'fixed';
    document.getElementById('buttons').style.visibility = 'hidden';
    getPokemon(searchPokemon, true);
});

function exitModal() {
    const modalPokemon = document.getElementById('modalPokemon');
    modalPokemon.style.display = 'none';
    document.getElementById('footer').style.position = 'static';
    document.getElementById('buttons').style.visibility = 'visible' ;
    drawPokemon();
}