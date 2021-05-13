
import "array.prototype.at/auto";

const { log } = console;

log("%c **** The Logs below are from the arrays.js file ****", "color:green;font-size: 20px");
// Create Array

const fruits = ['apple', 'banana', 'cherry'];

const fruitsWithConstructor = new Array('apple', 'banana', 'cherry');

// Arrays at() method

log('The at() method: ', fruits.at(2));