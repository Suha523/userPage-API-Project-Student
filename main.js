const LOAD_BTN = $("#load");
const DISPLAY_BTN = $("#display");
const SAVE_USER_PAGE = $("#save-user-page");
const LOAD_USER_PAGE = $("#load-user-pages");
const NUM_OF_POKEMONS = 949;
const USERNAME_LIST = $(".select");
let userPages = [];
userPages = JSON.parse(localStorage.getItem("userPages") || "[]");

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
  let userPage = apiManager.getUserData();
  renderUserPage(userPage);
});

SAVE_USER_PAGE.on("click", function () {
  let userPage = apiManager.getUserData();
  userPages.push(userPage);
  localStorage.setItem("userPages", JSON.stringify(userPages));
});

LOAD_USER_PAGE.on("click", function () {
  userPages = JSON.parse(localStorage.getItem("userPages") || "[]");
  // console.log(userPages);
  renderer.renderUsersList(userPages);
});
renderer.renderUsersList(userPages);
USERNAME_LIST.change(function () {
  let username = $(this).val();
  for (let index in userPages) {
    if (username === userPages[index].mainUser.name) {
      let user = userPages[index];
      renderUserPage(user);
    }
  }
});

const renderUserPage = function (user) {
  let mainUser = user["mainUser"];
  let friends = user["friends"];
  let quote = user["quote"];
  let meatText = user["meatText"];
  let pokemon = user["pokemon"];

  renderer.renderMainUser(mainUser);
  renderer.renderFriends(friends);
  renderer.renderQuote(quote);
  renderer.renderPokemon(pokemon);
  renderer.renderMeatText(meatText);
};
