class Renderer {
  renderMainUser(mainUser) {
    let userContainer = $(".user-container");
    userContainer.html("");
    let source = $("#main-user-template").html();
    let template = Handlebars.compile(source);
    let mainUserInfo = template(mainUser);
    userContainer.append(mainUserInfo);
  }

  renderFriends(friends) {
    let friendsContainer = $(".friends-container");
    friendsContainer.html("");
    let source = $("#friends-template").html();
    let template = Handlebars.compile(source);
    let friendList = template({ friends });
    friendsContainer.append(friendList);
  }

  renderPokemon(pokemon) {
    let pokemonContainer = $(".pokemon-container");
    pokemonContainer.html("");
    let source = $("#pokemon-template").html();
    let template = Handlebars.compile(source);
    let preferedPokemon = template(pokemon);
    pokemonContainer.append(preferedPokemon);
  }

  renderQuote(quote) {
    let quoteContainer = $(".quote-container");
    quoteContainer.html("");
    let source = $("#quote-template").html();
    let template = Handlebars.compile(source);
    let quoteText = template({ quote });
    quoteContainer.append(quoteText);
  }

  renderMeatText(meat) {
    let meatContainer = $(".meat-container");
    meatContainer.html("");
    let source = $("#meat-text-template").html();
    let template = Handlebars.compile(source);
    let meatText = template({ meat });
    meatContainer.append(meatText);
  }

  renderUsersList(userPages){
    let userSelection = $(".select");
    userSelection.html("");
    let source = $("#users-list-template").html();
    let template = Handlebars.compile(source);
    let userList = template({ userPages });
    userSelection.append(userList);
  }
}
