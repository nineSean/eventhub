class EventHub {
  cache = {}
  on(event, cb) {
    if (!this.cache[event]) {
      this.cache[event] = []
    }
    this.cache[event].push(cb)
  }
  emit(event) {
    if (this.cache[event]) {
      this.cache[event].forEach((cb) => cb())
    }
  }
  off(event) {
    if (this.cache[event]) {
      this.cache[event].length = 0
    }
  }
}
module.exports = {
  EventHub,
}
