class EventTarget {
    constructor() {
        this.listeners = Object.create(null); // to get rid of any unnecessary methods associated with the prototype
    }
  
    addEventListener(name, callback) {
      if (!this.listeners.hasOwnProperty(name)) {
        this.listeners[name] = new Set(callback);
      } else {
        this.listeners[name].add(callback);
      }
    }
  
    removeEventListener(name, callback) {
      this.listeners[name]?.delete(callback);
    }
  
    dispatchEvent(name) {
      this.listeners[name]?.forEach(callback => {
        callback();
      });
    }
  }
  