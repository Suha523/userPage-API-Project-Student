class APIManager {
  constructor() {
    this.userData = {};
  }

  storeUsers() {
    let friends = [];
    let friend = "";
    let mainUser = "";
    for (let i = 1; i <= 7; i++) {
      $.ajax({
        method: "get",
        url: "https://randomuser.me/api/",
        success: (response) => {
          if (i == 1) {
            mainUser = {
              "name": response.results[0].name.first + " " + response.results[0].name.last,
              "picture": response.results[0].picture.medium,
              "city": response.results[0].location.city,
              "state": response.results[0].location.state,
            };
          } else {
            friend = {
              name: response.results[0].name.first + " " + response.results[0].name.last,
            };
          }

          friends.push(friend);
          this.userData["friends"] = friends;
          this.userData["mainUser"] = mainUser;
        },
        error: function (xhr, text, error) {
            alert(error);
        },
      });
    }
  }

  storeQuotes() {
    $.ajax({
      method: "get",
      url: "https://api.kanye.rest/",
      success: (response) => {
        let quote = response.quote;
        this.userData["quote"] = quote;
      },
      error: function (xhr, text, error) {
        alert(error);
      },
    });
  }

  storePokemons(id) {
    $.ajax({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      success: (response) => {
        let pokemon = {
          "name": response.name,
          "picture": response.sprites.back_default,
        };
        this.userData["pokemon"] = pokemon;
      },
      error: function (xhr, text, error) {
        alert(error);
      },
    });
  }

  storeMeatText() {
    $.ajax({
      method: "get",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      success: (response) => {
        let meatText = response[0];
        this.userData["meatText"] = meatText;
      },
      error: function (xhr, text, error) {
        alert(error);
      },
    });
  }

  getUserData() {
    return this.userData;
  }

}
