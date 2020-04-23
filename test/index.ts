import { EventHub } from '../src/index'

type TestCase = (msg: string) => void

const test1: TestCase = (msg) => {
  const eventHub = new EventHub()
  console.assert(typeof eventHub === 'object', 'eventHub is a object')
  console.log(msg)
}

const test2: TestCase = (msg) => {
  const eventHub = new EventHub()
  let called = false
  eventHub.on('xxx', fn)
  eventHub.emit('xxx', 'some data')
  console.assert(called, 'callback is invoked')
  function fn(data) {
    called = true
    console.assert(
      data === 'some data',
      'get the data from emit second parameter'
    )
  }
  console.log(msg)
}
const test3: TestCase = (msg) => {
  const eventHub = new EventHub()
  let called = false,
    called2 = false
  eventHub.on('xxx', fn)
  eventHub.off('xxx', fn2)
  eventHub.emit('xxx', 'some data')
  console.assert(called, 'callback is invoked')
  console.assert(!called2, "off callback won't be invoked")
  function fn(data) {
    called = true
    console.assert(
      data === 'some data',
      'get the data from emit second parameter'
    )
  }
  function fn2(data) {
    called2 = true
    console.assert(
      data === 'some data',
      'get the data from emit second parameter'
    )
  }
  console.log(msg)
}

test1('eventHub is a object')
test2('.emit can trigger .on callback and pass data')
test3('.off can cancel the specified callback')
