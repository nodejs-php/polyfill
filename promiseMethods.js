/**
 * Выполняет промисы
 * resolve, если один из промисов коллекции успешный
 * reject, если один из промисов проваливается
 *
 * @param promises Массив промисов
 * @returns {Promise<unknown>} Возвращается один промис
 */
Promise.myRace = function (promises: Promise[]) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            //Вызывается resolve в случае успеха, или reject, в случае провала
            promise.then(resolve).catch(reject);
        })
    })
};


/**
 * Выполняет промисы(алгоритм другой)
 * resolve, если один из промисов коллекции успешный
 * reject, если один из промисов проваливается
 *
 * @param iterable Массив промисов
 * @returns {Promise<unknown>} Возвращается один промис
 */
export  function promiseRace(iterable) {
    return new Promise((resolve, reject) => {
        if (iterable.length === 0) {
            return;
        }
        //Итерируем объекты с использованием асинхронной функции
        iterable.forEach(async (item) => {
            try {
                //ждем, когда промис выполнится
                const value = await item;
                //разрешаем промис
                resolve(value);
            } catch (err) {
                //Отклоняем промис
                reject(err);
            }
        })
    })
}

/**
 * Выполняет колекцию промисов
 * Разрешает промис, если один из промисов коллекции успешный
 *
 * @param promises
 * @returns {Promise<unknown>}
 */
Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
        let rejectCount = 0;
        promises.forEach(promise => {
            promise.then(resolve).catch(_ => {
                rejectCount++;
                if (rejectCount === promises.length) {
                    reject('all promises rejected');
                }
            });
        })
    })
};

/**
 * Разрешает промисы если все промисы успешные
 * @param iterable
 * @returns {Promise<unknown>}
 */
Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;
        promises.forEach((promise, i) => {
            promise.then(value => {
                results[i] = value;
                resolvedCount++;
                if (resolvedCount === promises.length) {
                    resolve(results);

                }
            }).catch(reject);
        })
    })
};

/**
 * Разрешает промисы если все промисы успешные
 * @param iterable
 * @returns {Promise<unknown>}
 */
export  function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;
        if (iterable.length === 0) {
            resolve(results)
            return;
        }
        iterable.forEach(async (promise, i) => {
            try {
                const value = await promise;
                results[i] = value;
                resolvedCount++;
                if (resolvedCount === iterable.length) {
                    resolve(results);
                }

            } catch (err) {
                reject(err)
            }
            ;
        })
    })
}

/**
 * Выполняет коллекцию промисов
 * Разрешает промис когда все промисы выполнились
 *
 * @param promises
 * @returns {Promise<unknown>}
 */
Promise.myAllSettled = function (promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let settledCount = 0;
        promises.forEach((promise, i) => {
            promise.then(value => {
                results[i] = {status: 'fulfilled', value}
            }).catch(error => {
                results[i] = {status: 'rejected', error}
            }).finally(() => {
                settledCount++;
                if (settledCount === promises.length) {
                    resolve(results);
                }
            })
        })
    })
};
  