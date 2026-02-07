/* For the given start state of an array, change it to final form using methods.
  start : ['january','july','march','august']
  final : ['july','june','march','august']
*/

let arr = ['january','july','march','august'];

arr.shift();
arr.shift();
arr.unshift('june');
arr.unshift('july');

console.log(arr);

/* Return the index of the "javascript" from the given array, if it was reversed. */

let arr2 = ['c','c++','html','javascript','python','java','c#','sql'];

arr2.reverse();
console.log(arr2.indexOf('javascript'));