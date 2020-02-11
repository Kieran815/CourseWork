// In a new JS Bin, create the following functions. Submit a link to the JS Bin.

//  Write a function called even that accepts a single number as an argument and
//    returns true if the number is even and false if the number is odd.

function iCantEven(number) {
  let remOf = number % 2;
  if(remOf == 0) {
    return number + " is an Even Number";
  } else if (remOf == Math.round(remOf)) {
    return number + " is an Odd Number";
  } else {
    return "What are you Doing?";
  };
}


//  Write a function called squared that accepts a single number as an argument
//    and returns the perfect square of the number. So squared(5) returns 25 and
//    squared(3) returns 9.

// ** enter squared(x) in the console in chrome dev tools to run
function squared(x) {
  y = (x * x)
  return y
}

//  Write a function called food that accepts no arguments and returns an array
//    of your 3 favorite foods.

function food(){
var faves = ["Pizza", "Steak", "Tacos"];
  return faves;
}

//  Write a function called menu that accepts no arguments and returns an object
//    of your 3 favorite foods with the name of the foods as keys and the price
//    of each item as the values.

function menu() {
  let faves = {
  "tacos": 1.99,
  "pizza": 2.99,
  "steak": 12.99,
  };
return faves;
};

// Study Project:

// [Medium Mode] Write JavaScript that will print out the popular song '99
// bottles of beer' (or whatever the beverage of your choice is) to the console
// or the page.

for ( i = 99; i > 0; i--) {
  console.log(i + " Bottles of Beer on the Wall, " + i + " Bottles of Beer, " +
  "Take One Down, Pass it Around, " + (i-1) + " Bottles of Beer on the Wall");
}
