// import { getJSON } from './utilities';

function getJSON(url) {
  //var request = new Request();
  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        // console.log(response.json());
        return response.json();

      }
    })
    .catch(function (error) {
      document.getElementById("pokename1").innerHTML = "Pokemon does not exist";
    });
}

const search = (event) => {
  event.preventDefault();
  const pokenumber1 = document.getElementById("pokenumber1").value;
  const pokenumber2 = document.getElementById("pokenumber2").value;
  const baseURL = "https://pokeapi.co/api/v2/";
  // console.log(pokemon);
  async function getPokemon(pokenumber, player) {
    const pokemon = await getJSON(baseURL + "pokemon/" + pokenumber);
    document.getElementById("pokename" + player).innerHTML = pokemon.name;
    document.getElementById("pokeimage" + player).src = pokemon.sprites.back_default;
    if (player = 2) {
      document.getElementById("pokeimage2").src = pokemon.sprites.front_default;
    }
    let abilities = pokemon.moves;
    let abilitiesArray = [];
    if (player = 1) {
    for (i = 0; i <= 2; i++) {
      abilitiesArray.push(Math.floor(Math.random() * abilities.length) + 1);
    }
    let abilitiesDetails = [];
    for (i = 0; i <= 2; i++) {
      abilitiesDetails.push(await getJSON(baseURL + "move/" + abilitiesArray[i]));
      console.log(abilitiesDetails);
    }

    console.log('working');
    let abilityListElement = document.getElementById('abilitiesList');
    abilitiesDetails.map((ability) => {
      abilityListElement.appendChild(renderAbility(ability));
    });

   function renderAbility(ability) {
    const item = document.createElement('li');
    item.innerHTML = `
    <a href="#"> ${ ability.name } </a>
    `;
    return item;
  }

  }
    console.log(abilitiesArray);


  };

    
  getPokemon(pokenumber1, 1);
  getPokemon(pokenumber2, 2);
}
document.getElementById("pokeform").addEventListener('submit', search);
//Randomizer for random pokemon #
function pokeNumRndm() {
  Math.floor(Math.random() * 800) + 1
}
// console.log(abilitiesArray);


//Use abilities Sudo   !!!!LARGE EFFORT!!!!
//grab abilities eventListener from button press
//