// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we will use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  firstItem(items, item => console.log(`I love my ${item}!`));
  // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    console.log(`this ${article} is worth a million dollars!`);
  };

  firstItem(items, logExorbitantPrice);
  // "this Pencil is worth a million dollars!"
*/

const getLength = (arr, cb) => cb(arr.length);
getLength(items, length => console.log(`${length}`))

const last = (arr, cb) => cb(arr.length - 1);
last(items, lastItem => console.log(items[lastItem]));

const sumNums = (x, y, cb) => cb(x + y);
sumNums(5, 5, whatEverSum => console.log(whatEverSum));

const multiplyNums = (x, y, cb) => cb(x * y);
multiplyNums(2, 4, whatEverMultiply => console.log(whatEverMultiply));

const contains = (item, list, cb) => cb(list.includes(item));
contains("Gum", items, itemWhatEver => console.log(itemWhatEver));

/* STRETCH PROBLEM */

const itemsTest = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil', 'Notebook', 'yo-yo', 'Gum'];

const removeDuplicates = (arr, cb) => {
  var mySet = new Set(arr);
  cb([...mySet]);
};

removeDuplicates(itemsTest, itemsRemoved => {
  console.log(`item duplicates removed: ${itemsRemoved}`);
});