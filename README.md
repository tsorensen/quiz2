# quiz2

This quiz is test some more knowledge of some javascript skills you'll need to
have in a web development job.

1. Longest String - Given an array of items, return the longest string in the
  array. There may be things that aren't strings passed into the array.

  ```js
  longestString([
    'foo',
    'bar',
    'test'
  ]) === 'test';

  longestString([
    573927,
    {foo: 'bar'},
    ['hello', 'world', 'i', 'am', 'sentient'],
    'blah'
  ]) === 'blah';
  ```

2. arraySum - Given an array, sum up all of the items in the array, and in all
  of the sub-arrays.

  ```js
  arraySum([1, 2, 3, 4]) === 10;
  arraySum([
    10,
    [1, 2, 3, 4],
    [1, [2, 3], 4]
  ]) === 30;
  ```

3. bindName - Given a first name, last name, and a function, return a new
  function who's first argument will always be the first and last names combined
  with a space between them.

  ```js
  let helloMe = bindName('Keith', 'Smith', function (name, message) {
    return message + ', ' + name;
  });
  helloMe('Hello') === 'Hello, Keith Smith';
  ```

# Resources

* [Array.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)

* [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fbind)
