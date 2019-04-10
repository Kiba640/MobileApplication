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
let pokemon1 = {};
let pokemon2 = {};
// pokemon1.Randomabilities = randomAbility(pokemon1, 1);
// pokemon2.Randomabilities = randomAbility(pokemon2, 2);
//let savedAbilities = randomAbility();
const baseURL = "https://pokeapi.co/api/v2/";
const search = async (event) => {
  event.preventDefault();
  const pokenumber1 = document.getElementById("pokenumber1").value;
  const pokenumber2 = document.getElementById("pokenumber2").value;
  pokemon1 = await getPokemon(pokenumber1, 1);
  pokemon2 = await getPokemon(pokenumber2, 2);
  displaySprites(pokemon1, 1);
  displaySprites(pokemon2, 2);
  pokemon1.Randomabilities = await randomAbility(pokemon1, 1);
  // pokemon1.pokeType = await getPokeTypes(pokemon1, 1);
  pokemon2.pokeType = await getPokeTypes(pokemon2, 2);
  pokemon1.moveType = await getMoves(pokemon1, 1);
  // pokemon1.effective = typeCalc();
  renderAbility(pokemon1, 1);
  // renderTypes();
  // console.log(pokemon2.pokeType.damage_relations);
}
document.getElementById("pokeform").addEventListener('submit', search);

async function getPokemon(pokenumber, player) {
  const pokemon = await getJSON(baseURL + "pokemon/" + pokenumber);
  // console.log(pokemon.moves);
  return pokemon;
};

function displaySprites(pokemon, player) {
  document.getElementById("pokename" + player).innerHTML = pokemon.name;
  if (player === 2) {
    document.getElementById("pokeimage2").src = pokemon.sprites.front_default;
  } else {
    document.getElementById("pokeimage" + player).src = pokemon.sprites.back_default;
  }

}

async function randomAbility(pokemon, player) {
  // document.getElementById("pokename" + player).innerHTML = pokemon.moves;
  // pokeAbilities = await getJSON(baseURL + "move/");
  let abilities = pokemon.moves;
  let abilitiesArray = [];
  // let abilitiesArray2 = [];
  // console.log(baseURL);
  for (i = 0; i <= 3; i++) {
    abilitiesArray.push(Math.floor(Math.random() * abilities.length) + 1);
  }
  let abilitiesDetails1 = [];
  let abilitiesDetails2 = [];
  for (i = 0; i <= 3; i++) {
    abilitiesDetails1.push(abilities[abilitiesArray[i]]);
    //this is working
    // console.log(abilitiesDetails1);
  }
  // console.log(pokemon1.Randomabilities);
  return abilitiesDetails1;
}

async function getPokeTypes(pokemon, player) {
  let pokeType = pokemon.types;
  //   if(player === 1){
  //   if (pokeType.length > 1) {
  //     let typeURL = pokemon.types
  //     // console.log(pokemon.types);
  //     const playerPokeType1 = await getJSON(pokemon.types[0].type.url);
  //     const playerPokeType2 = await getJSON(pokemon.types[1].type.url);
  //     // console.log(playerPokeType1);
  //     return playerPokeType1, playerPokeType2;


  //   }
  //   else{
  //     const playerPokeType1 = await getJSON(pokemon.types[0].type.url);
  //     return playerPokeType1
  //   }
  // } else {
  if (pokeType.length > 1) {
    let typeURL = pokemon.types
    // console.log(pokemon.types);
    const oppPokeType1 = await getJSON(pokemon.types[0].type.url);
    const oppPokeType2 = await getJSON(pokemon.types[1].type.url);
    // console.log(oppPokeType2.name);
    return oppPokeType1, oppPokeType2;


  } else {
    const oppPokeType1 = await getJSON(pokemon.types[0].type.url);
    return oppPokeType1;
  }

}

// }

async function getMoves(pokemon, player) {
  let moveURL1 = pokemon1.Randomabilities[0].move.url;
  let moveURL2 = pokemon1.Randomabilities[1].move.url;
  let moveURL3 = pokemon1.Randomabilities[2].move.url;
  let moveURL4 = pokemon1.Randomabilities[3].move.url;
  const move1 = await getJSON(moveURL1);
  const move2 = await getJSON(moveURL2);
  const move3 = await getJSON(moveURL3);
  const move4 = await getJSON(moveURL4);
  // console.log(move1.name);
  let moveTypes = [];
  const move1Type = await getJSON(move1.type.url);
  const move2Type = await getJSON(move2.type.url);
  const move3Type = await getJSON(move3.type.url);
  const move4Type = await getJSON(move4.type.url);
  return {
    move1,
    move2,
    move3,
    move4,
    move1Type,
    move2Type,
    move3Type,
    move4Type
  };

  //  console.log(move1Type);
  //  console.log(move2Type);
  //  console.log(move3Type);
  //  console.log(move4Type);
}





function renderAbility(ability) {
  let abilityListElement = document.getElementById('abilitiesList');
    // console.log(pokemon1.Randomabilities[0].move.name);
    const item = document.createElement('li');
    let abilityArray = []
    for (i =0; i <=3; i++){
      abilityArray[i] = pokemon1.Randomabilities[i].move.name;
    }
    item.innerHTML = `
    <a href="#" type=touchend ontouchend="Calc(0)"> ${ abilityArray[0] } </a>
    <a href="#" type=touchend ontouchend="Calc(1)"> ${ abilityArray[1] } </a>
    <a href="#" type=touchend ontouchend="Calc(2)"> ${ abilityArray[2] } </a>
    <a href="#" type=touchend ontouchend="Calc(3)"> ${ abilityArray[3] } </a>
    `;
    // console.log(abilityArray);
    abilityListElement.appendChild(item);
  //  pokemon1.Randomabilities;   
  // console.log(pokemon1.Randomabilities);
  item.addEventListener('touchend', fight);
}

const fight = async (event) => {
  event.preventDefault();
  console.log("fight works");
  pokemon1.effective = Calc();
  // console.log(pokemon1);
  // renderTypes(); 
  
}

function Calc(id) {
  let doubledamage = [];
  for (i = 0; i <= pokemon2.pokeType.damage_relations.double_damage_from.length - 1; i++) {
    doubledamage.push(pokemon2.pokeType.damage_relations.double_damage_from[i].name);

  }

  let halfdamage = [];
  for (i = 0; i <= pokemon2.pokeType.damage_relations.half_damage_from.length - 1; i++) {
    halfdamage.push(pokemon2.pokeType.damage_relations.half_damage_from[i].name);

  }

  let nodamage = [];
  for (i = 0; i <= pokemon2.pokeType.damage_relations.no_damage_from.length - 1; i++) {
    nodamage.push(pokemon2.pokeType.damage_relations.no_damage_from[i].name);

  }
  let moveResults = [];
  // console.log(nodamage);
  // move1
if (id === 0) {
  if (doubledamage.includes(pokemon1.moveType.move1Type.name) === true) {
    let moveResult = pokemon1.moveType.move1.name + " is Super Effective";
    // return moveResult1;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move1.name + " is Super Effective");
  } else if (halfdamage.includes(pokemon1.moveType.move1Type.name) === true) {
    let moveResult = pokemon1.moveType.move1.name + " is Not Very Effective";
    // return moveResult1;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move1.name + " is Not Very Effective");
  } else if (nodamage.includes(pokemon1.moveType.move1Type.name) === true) {
    let moveResult = pokemon1.moveType.move1.name + " does No damage";
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move1.name + " does No damage");
    // return moveResult1;
  } else {
    let moveResult = pokemon1.moveType.move1.name + " does normal damage";
    // console.log(pokemon1.moveType.move1.name + " does normal damage");
    moveResults.push(moveResult);    
  }
}
else if(id === 1) {
  // moveResults.push(moveResult1);
  //move 2

  if (doubledamage.includes(pokemon1.moveType.move2Type.name) === true) {
    let moveResult = pokemon1.moveType.move2.name + " is Super Effective";
    // return moveResult2;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move2.name + " is Super Effective");
  } else if (halfdamage.includes(pokemon1.moveType.move2Type.name) === true) {
    let moveResult = pokemon1.moveType.move2.name +  " is not very effective";
    // return moveResult2;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move2.name + " is Not Very Effective");
  } else if (nodamage.includes(pokemon1.moveType.move2Type.name) === true) {
    let moveResult = pokemon1.moveType.move2.name +  " does no damage";
    // return moveResult2;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move2.name + " does No damage");
  } else {
    let moveResult = pokemon1.moveType.move2.name +  " does normal damage";
    // console.log(pokemon1.moveType.move2.name + " does normal damage");
    moveResults.push(moveResult);
  }
} else if (id === 2) {
  // moveResults.push(moveResult2);
  //move 3
  if (doubledamage.includes(pokemon1.moveType.move3Type.name) === true) {
    let moveResult = pokemon1.moveType.move3.name + " is Super Effective";
    // return moveResult3;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move3.name + " is Super Effective");
  } else if (halfdamage.includes(pokemon1.moveType.move3Type.name) === true) {
    let moveResult = pokemon1.moveType.move3.name + " is not very effective";
    // return moveResult3;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move3.name + " is Not Very Effective");
  } else if (nodamage.includes(pokemon1.moveType.move3Type.name) === true) {
    let moveResult = pokemon1.moveType.move3.name + " does no damage";
    // return moveResult3;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move3.name + " does No damage");
  } else {
    let moveResult = pokemon1.moveType.move3.name + " does normal damage";
    // console.log(pokemon1.moveType.move3.name + " does normal damage");
    moveResults.push(moveResult);
  }
} else if (id === 3) {
  // moveResults.push(moveResult3);
  //move 4
  if (doubledamage.includes(pokemon1.moveType.move4Type.name) === true) {
    let moveResult = pokemon1.moveType.move4.name + " is Super Effective";
    // return moveResult4;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move4.name + " is Super Effective");
  } else if (halfdamage.includes(pokemon1.moveType.move4Type.name) === true) {
    let moveResult = pokemon1.moveType.move4.name + " is not very effective";
    // return moveResult4;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move4.name + " is Not Very Effective");
  } else if (nodamage.includes(pokemon1.moveType.move4Type.name) === true) {
    let moveResult = pokemon1.moveType.move4.name + " does no damage";
    // return moveResult4;
    moveResults.push(moveResult);
    // console.log(pokemon1.moveType.move4.name + " does No damage");
  } else {
    let moveResult = pokemon1.moveType.move4.name + " does normal damage";
    // console.log(pokemon1.moveType.move4.name + " does normal damage");
    moveResults.push(moveResult);
  }
  console.log(moveResult);
  // return moveResult;
}
  // moveResults.push(moveResult1, moveResult2, moveResult3, moveResult4);
  let typesListElement = document.getElementById('conditions');
// console.log(pokemon1.effective);
  // console.log(type);
  const stuff = document.createElement('p');
    stuff.innerHTML = `
    <p> ${ moveResults } </p> <br>
    `;
    typesListElement.appendChild(stuff);
return moveResults;
}
// document.getElementById("abilitiesList").addEventListener('touchend', fight);
// const find = (event) => {
//   effectiveness();
// }  
// document.getElementById("abilitiesList").addEventListener('check', find);

// function effectiveness() {
//   console.log("it works!")
// }
//Randomizer for random pokemon #
// function pokeNumRndm() {
//   Math.floor(Math.random() * 800) + 1
// }
// console.log(abilitiesArray);


//Use abilities Sudo   !!!!LARGE EFFORT!!!!
//grab abilities eventListener from button press
//