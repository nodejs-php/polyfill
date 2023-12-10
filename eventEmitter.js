class EventEmitter {
    constructor() {
        this.observers = Object.create(null); // to get rid of any unnecessary methods associated with the prototype
    }
  
    on(name, callback) {
      if (!this.listeners.hasOwnProperty(name)) {
        this.observers[name] = new Set(callback);
      } else {
        this.observers[name].add(callback);
      }
    }
  
    off(name, callback) {
      this.observers[name]?.delete(callback);
    }
  
    emit(name, ...args) {
      this.observers[name]?.forEach(callback => {
        callback.apply(null, args);
      });
    }
  }
  