const LOAD_BTN = $("#load");
const DISPLAY_BTN = $("#display");
const NUM_OF_POKEMONS = 949;

let apiManager = new APIManager();
let renderer = new Renderer();

LOAD_BTN.on("click", function () {
  let pokemonId = Math.floor(Math.random() * NUM_OF_POKEMONS);
  apiManager.manageUsers();
  apiManager.manageQuotes();
  apiManager.managePokemons(pokemonId);
  apiManager.manageMeatText();
});

DISPLAY_BTN.on("click", function () {
  let mainUser = apiManager.getUserData()["mainUser"];
  let friends = apiManager.getUserData()["friends"];
  let quote = apiManager.getUserData()["quote"];
  let meatText = apiManager.getUserData()["meatText"];
  let pokemon = apiManager.getUserData()["pokemon"];

  renderer.renderMainUser(mainUser);
  renderer.renderFriends(friends);
  renderer.renderQuote(quote);
  renderer.renderPokemon(pokemon);
  renderer.renderMeatText(meatText);
});
