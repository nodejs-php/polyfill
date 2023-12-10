/* 
without calling Promise.race(), Promise.any(), Promise.all(), Promise.allSettled(), implement the following four similar functions on the
native Promise object:

myrace(promises): Takes in an array of promises and returns a new Promise. This new promise should resolve or reject as soon as any promise
in the array rsolves or rejects, with the value from that serttled promise.



 */



Promise.myRace = function (promises) {
    return new Promise((resolve,reject) => {
      promises.forEach(promise => {
        promise.then(resolve).catch(reject);
      })
    })
  };

  export default function promiseRace(iterable) {
    return new Promise((resolve,reject) => {
      if(iterable.length === 0) {
        return;
      }
     iterable.forEach(async (item) => {
       try {
         const value = await item;
         resolve(value);
       } catch (err) {
         reject(err);
       }
     })
   })
 }
  
  Promise.myAny = function (promises) {
    return new Promise((resolve,reject) => {
      let rejectCount = 0;
      promises.forEach(promise => {
        promise.then(resolve).catch(_ => {
          rejectCount++;
          if(rejectCount === promises.length) {
            reject('all promises rejected');
          }
        });
      })
    })
  };
  
  Promise.myAll = function (promises) {
    return new Promise((resolve,reject) => {
      const results = [];
      let resolvedCount = 0;
      promises.forEach((promise,i) => {
        promise.then(value => {
          results[i] = value;
          resolvedCount++;
          if(resolvedCount === promises.length) {
            resolve(results);
            
          }
        }).catch(reject);
      })
    })
  };

  export default function promiseAll(iterable) {
    return new Promise((resolve,reject) => {
          const results = [];
    let resolvedCount = 0;
       if(iterable.length === 0) {
         resolve(results)
        return;
      }
    iterable.forEach(async (promise,i) => {
      try {
      const value = await promise;
      results[i] = value;
      resolvedCount++;
      if(resolvedCount === iterable.length) {
          resolve(results);
      }       
          
        }
        catch(err) {
          reject(err)
        };
    })
  })
}
  
  Promise.myAllSettled = function (promises) {
    return new Promise((resolve,reject) => {
      const results = [];
      let settledCount = 0;
      promises.forEach((promise,i) => {
        promise.then(value => {
          results[i] = {status: 'fulfilled', value}
        }).catch(error => {
          results[i] = {status: 'rejected', error}
        }).finally(() => {
          settledCount++;
          if(settledCount === promises.length) {
            resolve(results);
          }
        })
      })
    })
  };
  