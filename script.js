function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomOption (options) {
    var randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function amountOptions (maxAmount) {
    var randomAmount = Math.floor(Math.random() * maxAmount) + 1;
    return randomAmount;
}

function randomPizza () {
    var pizzaRandom = {};
    var crusts = ["deep dish", "hand tossed", "thin", "cheesy"];
    var sauces = ["traditional", "marinara", "white"];
    var cheeses = ["mozzarella", "feta", "gorgonzola", "goat cheese"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bell peppers", "pineapple", "bacon crumbles"];

    pizzaRandom.crust = randomOption(crusts);
    pizzaRandom.sauce = randomOption(sauces);
    pizzaRandom.cheeses = [];
    pizzaRandom.toppings = [];
    
    var numCheeses = amountOptions(cheeses.length);
    var numToppings = amountOptions(toppings.length);

    var currentOption = "";

    for (var i=0; i<numCheeses; i++) {
        currentOption = randomOption(cheeses);
        pizzaRandom.cheeses.push(currentOption);
        for (var j=0; j<cheeses.length; j++) {
            if (cheeses[j]==currentOption) {
                cheeses.splice(j,1);
                j--;
            }
        }
    }

    for (var i=0; i<numToppings; i++) {
        currentOption = randomOption(toppings);
        pizzaRandom.toppings.push(currentOption);
        for (var j=0; j<toppings.length; j++) {
            if (toppings[j]==currentOption) {
                toppings.splice(j,1);
                j--;
            }
        }
    }

    return pizzaRandom;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni","sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("hand tossed", "traditional" , ["mozzarella"], ["pineapple","bacon crumbles","sausage"]);
console.log(pizza3);

var pizza4 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["pepperoni","olives","bell peppers","onions"]);
console.log(pizza4);

var pizza5 = randomPizza();
console.log(pizza5);
