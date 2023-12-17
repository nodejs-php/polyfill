/**
 * Массив классов объединяет в строку
 * @param args Аргументы функции
 */
const classNames = (...args) => {
    /**
     * Промежуточный массив для объединения строк
     * @type {*[]}
     */
    const classArray = [];

    //Цикл по переданным аргументам
    args.forEach((classItem) => {
        if (!classItem) return;

        const type = typeof classItem;

        //Если аргумент число или строка
        if (type === 'string' || type === 'number') {
            classArray.push(classItem);
            return;
        }

        //Если переданный аргумент является массивом, выполняем рекурсивный вызов самой функции
        if (Array.isArray(classItem)) {
            //Результат рекурсии кладем в общий массив
            classArray.push(classNames(...classItem));
            return;
        }

        //Если переданный аргумент является объектом
        if (type === 'object') {
            //циклически обходим по свойствам объекта
            for (const key in classItem) {
                //Если имеется свойство объекта, то добавляем это свойство в промежуточный массив
                if (Object.hasOwn(classItem, key) && classItem[key]) {
                    classArray.push(key)
                }
            }
            return;
        }
    })

    //В конце вычислений объединяем элементы массива в строку
    return classArray.join(" ");
}


console.log(classNames("foo", "bar")); // => 'foo bar'
console.log(classNames("foo", {bar: true})); // => 'foo bar'
console.log(classNames({"foo-bar": true})); // => 'foo-bar'
console.log(classNames({"foo-bar": false})); // => ''
console.log(classNames({foo: true}, {bar: true})); // => 'foo bar'
console.log(classNames({foo: true, bar: true})); // => 'foo bar'

// lots of arguments of various types
console.log(
    classNames("foo", {bar: true, duck: false}, "baz", {quux: true})
); // => 'foo bar baz quux'

// other falsy values are just ignored
console.log(classNames(null, false, "bar", undefined, 0, 1, {baz: null}, "")); // => 'bar 1'
