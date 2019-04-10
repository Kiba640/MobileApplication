function getJSON(url) {
    //var request = new Request();
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
         // console.log(response.json());
          return response.json();
  
        }
      })
      .catch(function(error) {
        document.getElementById("pokename1").innerHTML = "Pokemon does not exist";
      });
  }