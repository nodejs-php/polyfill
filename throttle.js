/**
 * Надо ли дросселировать
 * @type {boolean}
 */
let shouldThrottle = false;

/**
 *
 * Дросселирование функции, запуск некоторого другого обработчика с некоторым интервалом времени
 *
 * @param func
 * @param wait
 * @returns {(function(...[*]): void)|*}
 */
export default function throttle(func, wait) {

    return function (...args) {
        //Не запускаем новую обработку пока таймер не завершил свою работу
        if (shouldThrottle) {
            return;
        }

        //запрещаем запуск дросселирования
        shouldThrottle = true;

        //Запускает в асинхронном режиме таймер
        setTimeout(function () {
            //разрешаем запуск дросселирования
            shouldThrottle = false;
        }, wait);

        //Запускает исходную функцию
        func.apply(this, args);
    };
}