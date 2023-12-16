/**
 * Статусы промисов
 *
 * @type {{FULFILLED: string, PENDING: string, REJECTED: string}}
 */
const STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
};

/**
 * Реализация промисов
 * Полифил для промисов
 */
class MyPromise {
    /**
     * Устанавливаем начальный статус
     * @type {string}
     */
    #state = STATE.PENDING;
    #value = null;

    /**
     * Выполненные коллбэки
     * @type {[]}
     */
    #fulfilledCallbacks = [];

    /**
     * Откаченные коллбэки
     *
     * @type {[]}
     */
    #rejectedCallbacks = [];

    /**
     * Конструктор класса
     *
     * @param executorFunc Функция которая оборачивается в промис и выполняется. Это тот функционал который мы хотим выполнить
     * формат входного параметра-функции (res, rej) => {res(10)}
     */
    constructor(executorFunc) {
        try {
            executorFunc(value => this.#resolve(value), value => this.#reject(value))
        } catch (error) {
            //При неудаче вызываем this.#reject
            this.#reject(error)
        }
    }

    /**
     * Реализация then
     *
     * @param onFulfilled
     * @param onRejected
     * @returns {MyPromise} Возвращаем сам промис как результат для продолжения цепочки вызовов `then()`
     */
    then(onFulfilled, onRejected): MyPromise {
        //Создаем объект самого промиса
        return new MyPromise((resolve, reject) => {
            //Создаем функцию-коллбэк
            const fulfilledCallback = () => {
                if (!onFulfilled) {
                    return resolve(this.#value);
                }
                //Добавляем в микрозадачи чтобы выполнить коллбэк, который обернут в промис
                queueMicrotask(() => {
                    try {
                        const value = onFulfilled(this.#value);
                        resolve(value);
                    } catch (error) {
                        reject(error)
                    }
                })
            };
            const rejectCallback = () => {
                if (!onRejected) {
                    return reject(this.#value);
                }
                queueMicrotask(() => {
                    try {
                        const value = onRejected(this.#value);
                        resolve(value);
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            switch (this.#state) {
                case STATE.PENDING:
                    //Добавляем в массив коллбэков для выполнения
                    this.#fulfilledCallbacks.push(fulfilledCallback);
                    this.#rejectedCallbacks.push(rejectCallback);
                    break;
                case STATE.FULFILLED:
                    fulfilledCallback();
                    break;
                case STATE.REJECTED:
                    rejectCallback();
                    break;
                default:
                    throw new Error('Unexpected promise state')
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }

    /**
     * Для получения извне статуса промиса
     *
     * @returns {string}
     */
    get state() {
        return this.#state;
    }

    /**
     * Для получения извне результат выполнения промиса, передаваемый в then
     * @returns {null}
     */
    get value() {
        return this.#value;
    }

    /**
     * Приватная функция выполнения коллбэка
     *
     * @param value
     */
    #resolve(value) {
        this.#value = value;
        this.#state = STATE.FULFILLED;
        this.#fulfilledCallbacks.forEach(callback => callback());
    }

    /**
     * Приватная функция отката коллбэка
     *
     * @param value
     */
    #reject(value) {
        this.#value = value;
        this.#state = STATE.REJECTED;
        this.#rejectedCallbacks.forEach(callback => callback());
    }
}


//Создаем промис и вызываем `then()` для обработки результатов запроса
new MyPromise((res, rej) => {
    res(10);
}).then(value => {
    console.log(value * 2);
    return value * 2;
}).then(value => {
    console.log(value * 3);
    return value * 3;
})

exports.MyPromise = MyPromise;
  