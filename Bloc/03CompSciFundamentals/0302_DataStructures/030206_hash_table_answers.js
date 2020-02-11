/*
1. What is a hash table?
  Hash tables are used to implement associative arrays or key/value mappings. They are a type of data structure that store values by linking them to keys. Each key must be unique so that they can be used to look up values. The key-value pairs are stored in an array that is maintained by the hash table.


2. What is hashing?
  Hashing is converting a key to a numerical index. The process uses a Hashing Function to convert keys to a fixed-length number (hash code). After the hash code is generated, the hash table decides where to store the key-value pair in an internal array.


3. How does a hash table store data?
  The key-value pairs are stored in an array that is maintained by the hash table. The hashing function will take the index number % arrayCapacity, and use the modulus remainder to assign the key-value pair to a location, or bucket. Using the total array capacity prevents the key from exceeding the total size of the array.


4. How are hash tables and objects different?
 Objects are better for static data, where every object has distinct values for each instance, where a hash table is better when each instance may have different values and identifiers.



5. Determine whether you would use a hash table or an object to store each of the following pieces of data:

  A list of pets and their unique names.
    Hash Table

  The name, age, and the birthday of your best friend.
    Object

  The name and location of every company in a given city.
    Hash Table

  All of the books checked out from a library by a particular individual.
    Hash Table

  The primary and secondary phone numbers for a contact.
    Object

----------------------------------------------------------------
Programming Questions:
*/

var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

let HashTable = function() {
  let storage = [];
  const storageLimit = 20;

  this.print = function() {
    console.log(storage);
  }

  this.add = function(key, value) {
    var index = hash(key, storageLimit);
    if(storage[index] === undefined) {
      storage[index] = [ [key, value] ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if(inserted = false) {
        storage[index].push([key,value]);
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for(var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.search = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for(var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  }
};

// 1. Create a hash table that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers.

let cxInfo = new HashTable();

cxInfo.add('(555)555-5555', {name: 'Kieran Milligan', address: '8 Programmer Way', phone: '(555)555-5555'});

cxInfo.add('(666)666-6666', {name: 'Lexx Milligan', address: '7 Daddy\'s Guy Blvd', phone: '(666)666-6666'});

cxInfo.add('(777)777-7777', {name: 'Navi-Rita Puppinses', address: '4 Puppin Lane', phone: '(888)888-8888'});

cxInfo.print();

console.log(cxInfo.search('(555)555-5555'));
console.log(cxInfo.search('(666)666-6666'));
console.log(cxInfo.search('(777)777-7777'));


// 2. Create a hash table that allows a store owner to track their store's inventory and quantity.

let inventory = new HashTable();

inventory.add('Screwdriver', {item: 'Screwdriver', qty: '10'});
inventory.add('Tissues', {item: 'Tissues', qty: '100'});
inventory.add('Folding Chair', {item: 'Folding Chair', qty: '25'});
inventory.add('Table', {item: 'Table', qty: '5'});

inventory.print();
console.log(inventory.search('Screwdriver'));
console.log(inventory.search('Tissues'));
console.log(inventory.search('Folding Chair'));
console.log(inventory.search('Table'));

// 3. Create a hash table that allows digital copies of newspapers to be entered and searched by publisher and publication date.

let digiPub = new HashTable();

digiPub.add('The Times, 07/13/19', {pub: 'The Times', date: '07/13/19'});
digiPub.add('The Times, 07/12/19', {pub: 'The Times', date: '07/13/19'});
digiPub.add('The Times, 07/11/19', {pub: 'The Times', date: '07/13/19'});
digiPub.add('The Times, 07/10/19', {pub: 'The Times', date: '07/13/19'});

digiPub.add('The Herald, 07/13/19', {pub: 'The Herald', date: '07/13/19'});
digiPub.add('The Herald, 07/12/19', {pub: 'The Herald', date: '07/13/19'});
digiPub.add('The Herald, 07/11/19', {pub: 'The Herald', date: '07/13/19'});
digiPub.add('The Herald, 07/10/19', {pub: 'The Herald', date: '07/13/19'})

digiPub.add('USA Today, 07/13/19', {pub: 'USA Today', date: '07/13/19'});
digiPub.add('USA Today, 07/12/19', {pub: 'USA Today', date: '07/13/19'});
digiPub.add('USA Today, 07/11/19', {pub: 'USA Today', date: '07/13/19'});
digiPub.add('USA Today, 07/10/19', {pub: 'USA Today', date: '07/10/19'});

console.log(digiPub.print());
