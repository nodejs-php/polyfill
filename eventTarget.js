/**
 * Паттерн создания события и последующей обработки
 */
class EventTarget {
    constructor() {
        //Создаем объект слушателя
        this.listeners = Object.create(null);
    }

    /**
     * Добавляем новое событие и коллбэк
     * @param name Имя события
     * @param callback Функция коллбэка
     */
    addEventListener(name, callback) {
        if (!this.listeners.hasOwnProperty(name)) {
            //Создаем множество значений
            this.listeners[name] = new Set(callback);
        } else {
            //Прикрепляем коллбэк к событию
            this.listeners[name].add(callback);
        }
    }

    /**
     * Удаление слушателя
     *
     * @param name
     * @param callback
     */
    removeEventListener(name, callback) {
        //Удаляем с события коллбэк
        this.listeners[name]?.delete(callback);
    }

    /**
     * Вызов события и обработчика происходит здесь
     * @param name
     */
    dispatchEvent(name) {
        //Проходим по массиву коллбэков связанных с данным событием
        this.listeners[name]?.forEach(callback => {
            callback();
        });
    }
}
  