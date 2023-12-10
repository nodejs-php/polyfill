Array.prototype.myMap = function (callback) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
      output.push(callback(this[i],i,this));
    }
    return output;
  };

  Array.prototype.myMap = function (callbackFn, thisArg) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      if (Object.hasOwn(this, i)) {
        output[i] = callbackFn.call(thisArg, this[i], i, this);
      }
    }
    return output;
  };
  
  Array.prototype.myFilter = function (callback) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
      if(callback(this[i],i,this) === true) {
        output.push(this[i]);
      }
    }
    return output;
  };

  Array.prototype.myFilter = function (callbackFn, thisArg) {
    const output = [];
      for(let i = 0; i < this.length; i++) {
        if(Object.hasOwn(this,i) && callbackFn.call(thisArg,this[i],i,this) === true) {
          output.push(this[i]);
        }
      }
      return output;
  };

  
  Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
    for(let i = 0; i <this.length; i++) {
      if(i === 0 && initialValue === undefined) {
        accumulator = this[i];
      } else {
            accumulator = callback(accumulator, this[i], i, this);
      }
  
    }
    return accumulator;
  };

  Array.prototype.myReduce = function (callbackFn, initialValue) {
    let accumulator = initialValue;
      if (initialValue === undefined && this.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
      for(let i = 0; i <this.length; i++) {
        if(i === 0 && initialValue === undefined) {
          accumulator = this[i];
        } else {
          if(Object.hasOwn(this, i)) {
   accumulator = callbackFn(accumulator, this[i], i, this);
          }
             
        }
    
      }
      return accumulator;
  };
  