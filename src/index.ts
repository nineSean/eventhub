interface Callback {
  (data?: unknown): void
}
class EventHub {
  private cache: { [key: string]: Array<Callback> } = {}
  private safeCache: (eventName: string) => Array<Callback> = (eventName) =>
    this.cache[eventName] || []
  on(eventName: string, cb: Callback) {
    ;(this.cache[eventName] || (this.cache[eventName] = [])).push(cb)
  }
  emit(eventName: string, data?: unknown) {
    this.safeCache(eventName).forEach((cb) => cb(data))
  }
  off(eventName: string, cb: Callback) {
    const index = this.safeCache(eventName).indexOf(cb)
    index > -1 && this.cache[eventName].splice(index, 1)
  }
}

export { EventHub }
