const classNames = (...args) => {
    const classArray = [];

    args.forEach((classItem) => {
        if (!classItem) return;

        const type = typeof classItem;

        if (type == 'string' || type == 'number') {
            classArray.push(classItem);
            return;
        }

        if(Array.isArray(classItem)) {
            classArray.push(classNames(...classItem));
            return;
        }

        if(type == 'object') {
            for(const key in classItem) {
                if(Object.hasOwn(classItem, key) && classItem[key]) {
                    classArray.push(key)
                }
            }
            return;
        }
    })

    classArray.join(" ");
}


console.log(classNames("foo", "bar")); // => 'foo bar'
console.log(classNames("foo", { bar: true })); // => 'foo bar'
console.log(classNames({ "foo-bar": true })); // => 'foo-bar'
console.log(classNames({ "foo-bar": false })); // => ''
console.log(classNames({ foo: true }, { bar: true })); // => 'foo bar'
console.log(classNames({ foo: true, bar: true })); // => 'foo bar'

// lots of arguments of various types
console.log(
  classNames("foo", { bar: true, duck: false }, "baz", { quux: true })
); // => 'foo bar baz quux'

// other falsy values are just ignored
console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")); // => 'bar 1'
