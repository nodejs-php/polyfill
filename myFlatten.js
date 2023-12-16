/**
 * Поднимает на один уровень элементы массива и объекта
 *
 * @param value
 * @returns {{}|*}
 */
function flatten(value) {
    if (typeof value !== 'object' || typeof value === null) {
        return value;
    }

    //Если массив, то поднимаем массивы
    if (Array.isArray(value)) {
        return flattenArray(value)
    }

    return flattenObject(value);
}

/**
 * Поднимаем на один уровень элементы подмассивов
 * @param arr
 * @returns {*}
 */
function flattenArray(arr) {
    return arr.reduce((acc, curr) => acc.concat(flatten(curr)), [])
}

/**
 * Поднимаем на один уровень переменные объекты
 * @param obj
 * @returns {{}}
 */
function flattenObject(obj) {
    //Объявляем пустой объект в начале
    let flattenedObj = {};

    //Цикл по всем переменным и их значениям в объекте
    for ([key, value] of Object.entries(obj)) {
        //Проверяем является ли объект массивом
        const valueIsObject =
            typeof value === "object" && value !== null && !Array.isArray(value);

        //Поднимаем на один уровень значения
        const flattenedValue = flatten(value);

        if (valueIsObject) {
            //Назначаем объекту все значения, которые были подняты из сложных структур внутренних переменных
            Object.assign(flattenedObj, flattenedValue);
        } else {
            //Если объект является массивом, то назначаем по ключу
            flattenedObj[key] = flattenedValue;
        }
    }

    return flattenedObj;
}