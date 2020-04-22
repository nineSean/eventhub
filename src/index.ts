interface Callback {
  (data?: unknown): void
}
class EventHub {
  private cache: { [key: string]: Array<Callback> } = {}
  on(eventName: string, cb: Callback) {
    ;(this.cache[eventName] || (this.cache[eventName] = [])).push(cb)
  }
  emit(eventName: string, data?: unknown) {
    ;(this.cache[eventName] || []).forEach((cb) => cb(data))
  }
  off(eventName: string, fn: Callback) {
    const index = (this.cache[eventName] || []).indexOf(fn)
    index > -1 && this.cache[eventName].splice(index, 1)
  }
}

export { EventHub }
