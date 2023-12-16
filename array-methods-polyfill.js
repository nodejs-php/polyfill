/**
 * Прототип функции для массива Array для обхода всех элементов и выполнения над ними операции `callback`
 * @param callback Выполняемая функция
 * @returns {[]} Возвращается как результат массив
 */
Array.prototype.myMap = function (callback) {
    const output = [];
    //Цикл по всем элементам
    for (let i = 0; i < this.length; i++) {
        //Выполняем функцию `callback` и кладем результат в массив `output`
        output.push(callback(this[i], i, this));
    }

    return output;
};

/**
 * Прототипа функции для обхода всех элементов массива `thisArg` и выполнения над ними  операции  `callback`
 * @param callbackFn Выполняемая функция
 * @param thisArg массив
 * @returns {[]} Возвращается как результат массив
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        if (Object.hasOwn(this, i)) {
            output[i] = callbackFn.call(thisArg, this[i], i, this);
        }
    }

    return output;
};

/**
 * Фильтрация массива
 * @param callback Функция фильтрации  возвращающая true/false, 1/0
 * @returns {[]}
 */
Array.prototype.myFilter = function (callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        //Проверка условия
        if (callback(this[i], i, this) === true) {
            output.push(this[i]);
        }
    }

    return output;
};

/**
 * Фильтрация массива
 * @param callbackFn
 * @param thisArg Массив
 * @returns {[]}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        //Проверка существования индекса элемента в массиве, и выполнения условия проверки заданной функцией `callbackFn`
        if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this) === true) {
            output.push(this[i]);
        }
    }

    return output;
};

/**
 * Получение результирующего значения, накапливаемой функцией `callback`
 * @param callback Функция
 * @param initialValue Начальное значение
 * @returns {*}
 */
Array.prototype.myReduce = function (callback, initialValue) {
    //Инициализация накопителя начальным значением
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        if (i === 0 && initialValue === undefined) {
            //Если начальное значение не задано, то инициализируем накопитель начальным значением массива
            accumulator = this[i];
        } else {
            //Вычисляем значение `callback`-функции по отношению к элементу
            accumulator = callback(accumulator, this[i], i, this);
        }
    }

    return accumulator;
};

/**
 * Получение результирующего значения функции, накапливаемой функцией `callbackFn`
 * @param callbackFn Функция
 * @param initialValue Инициализируемое значение
 *
 * @returns {*} Возвращаемое значение
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
    //Устанавливаем начальное значение которое может быть любого типа
    let accumulator = initialValue;
    //Если массив пустой или неопределенный, выбрасываем ошибку
    if (initialValue === undefined && this.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    for (let i = 0; i < this.length; i++) {
        //Если не задано начальное значение, то инициализируем накопитель 1-м элементом массива
        if (i === 0 && initialValue === undefined) {
            accumulator = this[i];
        } else {
            //Если существует такой индекс массива
            if (Object.hasOwn(this, i)) {
                //Вычисляем значение и присваиваем результат
                accumulator = callbackFn(accumulator, this[i], i, this);
            }
        }
    }

    return accumulator;
};
  