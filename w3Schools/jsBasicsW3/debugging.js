// 1. Help! Customers are not getting their products from the following assembly
// line.

var Product = {
  isPackaged: false,
  isLoaded: false,
  color: "uncolored",
  paint: function (color) {
    console.log("Painting product " + color + ".");
    this.color = color;
    console.log("Product painted " + color + ".");
  },
  package: function (shippingType) {

    console.log("Packaging product for " + shippingType + ".");
    this.shippingType = shippingType;
    this.isPackaged = true;
    console.log("Product packaged for " + shippingType + ".");
  },
  loadOnTruck: function () {

    console.log("Loading product onto truck.");
    this.isLoaded = true;
    console.log("Product loaded onto the truck.");
  }
};

var order = function (color, shippingType) {

  var product = Object.create(Product);

  console.log("Basic product created.");

  product.paint(color);

  product.package(shippingType);

  product.loadOnTruck();

  return product;
};

order('black', 'nextDay')
// The output you see is:

     // "Basic product created."
     // "Painting product black."
     // "Product painted black."
     // "Packaging product for Next Day."
     // "Product packaged for Next Day."
// Based on this output, how would you figure out what the problem is? Identify
// the line(s) that are broken.

//** Answer: The function works all the way through Packaging, e.g. the action
// that is broken is `product.loadOnTruck`. Looking back at the function call,
// loadOnTruck was not written correctly. Should be `product.loadOnTruck()`

//______________________________________________________________________________



var Product = {
  isPackaged: false,
  isLoaded: false,
  color: "uncolored",
  paint: function (color) {
    console.log("Painting product " + color + ".");
    this.color = color;
    console.log("Product painted " + color + ".");
  },
  package: function (shippingType) {

    console.log("Packaging product for " + shippingType + ".");
    this.shippingType = shippingType;
    this.isPackaged = true;
    console.log("Product packaged for " + shippingType + ".");
  },
  loadOnTruck: function () {

    console.log("Loading product onto truck.");
    this.isLoaded = true;
    console.log("Product loaded onto the truck.");
  }
};

var order = function (color, shippingType) {


  var product = Object.create(Product);

  console.log("Basic product created.");

  product.paint(color);

  product.package(shippingType);

  product.loadOnTruck();

  return product;
};



// The output you see is:
    // "Basic product created."
    // "Painting product black."
    // "Product painted black."
    // "Packaging product for undefined."
    // "Product packaged for undefined."
    // "Loading product onto truck."
    // "Product loaded onto the truck."

// Narrow it down! What line(s) are broken? Submit the answer.

// shipping type was not input as the var for the `product.package()`, as it has
// kicked back an undefined value. added `product.package(shippingType)` and
// program works
