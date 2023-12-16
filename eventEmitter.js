/**
 * Испускание событий
 */
class EventEmitter {
    constructor() {
        //Создается обозреватель
        this.observers = Object.create(null);
    }


    on(name, callback) {
      if (!this.observers.hasOwnProperty(name)) {
        this.observers[name] = new Set(callback);
      } else {
        this.observers[name].add(callback);
      }
    }
  
    off(name, callback) {
      this.observers[name]?.delete(callback);
    }

    /**
     * Испускаем событие
     * @param name Имя
     * @param args Аргументы
     */
    emit(name, ...args) {
        //Цикл по коллбэкам обозревателя
      this.observers[name]?.forEach(callback => {
        callback.apply(null, args);
      });
    }
  }
  