const obj = {num: 0};

function logNums(x,y) {
  console.log(this.num, x, y);
}


Function.prototype.myCall = function (thisContext, ...args) {
  const symbol = Symbol();
  let originalFunc = this; // when we are inside of prototype, the this keyword will be bound on the actual object we are on, in this case, the function we are on or trying to call
  if (typeof originalFunc !== "function") {
    throw new TypeError("Bind must be called on a function");
  }
  thisContext[symbol] = originalFunc;
  const val = thisContext[symbol](...args);

  delete thisContext[symbol];

  return val;
};

logNums.call(obj, 1, 2); // original call method on function prototype.
logNums.myCall(obj, 2, 4) //polyfill

Function.prototype.myApply = function (thisContext, args = []) {

  const symbol = Symbol();
  let originalFunc = this;
  if (typeof originalFunc !== "function") {
    throw new TypeError("Bind must be called on a function");
  }
  thisContext[symbol] = originalFunc;
  const val = thisContext[symbol](...args);

  delete thisContext[symbol];

  return val;
};

Function.prototype.myBind = function (thisContext, ...args) {

  return (...args2) => {
    const symbol = Symbol();
  let originalFunc = this;
  if (typeof originalFunc !== "function") {
    throw new TypeError("Bind must be called on a function");
  }
  thisContext[symbol] = originalFunc;
  const val = thisContext[symbol](...args, ...args2);

  delete thisContext[symbol];

  return val;
  }
}
