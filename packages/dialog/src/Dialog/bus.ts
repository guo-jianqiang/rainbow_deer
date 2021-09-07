type TListener = Map<string, Function[]>
class Bus {
  listenerMap: TListener
  constructor() {
    this.listenerMap = new Map<string, Function[]>()
  }
  subscribe = (key: string, cb: () => void) => {
    let listenersFromKey: Function[] = []
    if (!this.listenerMap.has(key)) {
      this.listenerMap.set(key, [cb])
    } else {
      listenersFromKey = this.listenerMap.get(key) || []
      listenersFromKey.push(cb)
      this.listenerMap.set(key, [...listenersFromKey])
    }
    return () => {
      const index = listenersFromKey.findIndex((fn) => fn === cb)
      listenersFromKey.splice(index, 1)
      this.listenerMap.set(key, [...listenersFromKey])
    }
  }
  notify = (key: string, data?: any) => {
    const listenersFromKey = this.listenerMap.get(key) || []
    listenersFromKey.forEach((fn) => fn(data))
  }
}

export default new Bus()
