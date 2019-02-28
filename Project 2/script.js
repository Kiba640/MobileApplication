function getJSON(url) {
  // const myHeaders = new Headers({
  //   'Content-Type': 'application/json'
  // });

  //var request = new Request();
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        //console.log(response.json());
        return response.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

const search = (event) => {
    event.preventDefault();
    const pokenumber = document.getElementById("pokenumber").value;
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    getJSON(baseURL + pokenumber).then( (pokemon) => {
      // console.log(pokemon);
     document.getElementById("pokename").innerHTML = pokemon.name;
      document.getElementById("pokeimage").src = pokemon.sprites.front_default;
    });
  }
  document.getElementById("pokeform").addEventListener('submit', search);