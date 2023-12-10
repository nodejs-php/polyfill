/* 
Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.

Implement the curry function which accepts a function as the only argument and returns a function that accepts single arguments and can be repeatedly
called until at least the minimum number of arguments have been provided (determined by how many arguments the original function accepts).
The initial function argument is then invoked with the provided arguments.

*/

// Solution 1:

export default function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

// Solution 2:

export default function curry(func) {
 return function(...args) {
    if(args.length >= func.length) {
      return func.call(this,...args)
    }
    return curry(func.bind(this, ...args))
  }
}


/* 
Write a curry function that takes in a required callback function and returns a curried version of that function. This callback function can take in any 
number of arguments, including none at all.
If the curried function is called with arguments, it should return a new function, which can be called with more arguments to be passed to the underlying callback.
If the curried function (or one of the returned new functions) is called with no arguments, this should be considered the end of the curried function calls, and the
callback should be called with every argument that was passed, in the correct order.
*/

// Solution 1:

function curry(callback) {
    return function curriedCallback(...args) {
    if(args.length === 0) {
      return callback.call(this)
    }
    return function(...args2) {
      if(args2.length === 0) {
        return callback.call(this, ...args)
      }
      return curriedCallback.apply(this, [...args, ...args2])
    }
  }

  return curriedCallback;
}

// Do not edit the line below.
exports.curry = curry;

//Solution 2: ( assuming callback doesnt reference this)

function curry(callback) {
  const curriedCallback = (...args) => {
    if(args.length === 0) {
      return callback()
    }
    return (...args2) => {
      if(args2.length === 0) {
        return callback(...args)
      }
      return curriedCallback(...args, ...args2)
    }
  }

  return curriedCallback;
  
}

// Do not edit the line below.
exports.curry = curry;
