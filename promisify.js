/**
 * Упаковка в промис
 * @param callback Функция которую требуется упаковать в промис
 * @returns {function(...[*]): Promise<unknown>}
 */
function promisify(callback) {
    //возвращает функцию-обертку с результатом-промис
    return function (...args): Promise {
        //конструктор промиса
        return new Promise((resolve, reject) => {
            //колбэк который должен быть вызван в исходной функции промиса для задавания промису результата
             function handleErrorAndValue(error, value) {
                if (error == null) {
                    resolve(value);
                } else {
                    reject(error);
                }
            }
            //Вызывается исходная функция для выполнения
            callback.call(this, ...args, handleErrorAndValue);
        });
    }
}

exports.promisify = promisify;