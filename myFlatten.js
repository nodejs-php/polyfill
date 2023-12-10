function flatten(value) {
    if(typeof value !== 'object' || typeof value === null) {
        return value;
    }

    if(Array.isArray(value)) {
        return flattenArray(value)
    }

    return flattenObject(value);
  }
  

  function flattenArray(arr) {
    return arr.reduce((acc, curr) => acc.concat(flatten(curr)), [])
  }

  function flattenObject(obj) {
    let flattenedObj = {};
  
    for ([key, value] of Object.entries(obj)) {
      const valueIsObject =
        typeof value === "object" && value !== null && !Array.isArray(value);
      const flattenedValue = flatten(value);
  
      if (valueIsObject) {
        Object.assign(flattenedObj, flattenedValue);
      } else {
        flattenedObj[key] = flattenedValue;
      }
    }
  
    return flattenedObj;
  }