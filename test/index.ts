// const EventHub = require('../src/index.js').EventHub
import { EventHub } from '../src/index'

const eh = new EventHub()

console.log('eh', eh)
eh.on('call', () => console.log(1))
eh.on('call', () => console.log(3))
eh.on('call', () => console.log(5))
eh.on('shout', fn)

function fn() {
  console.log('fn')
}

eh.emit('call')
eh.off('shout', fn)
eh.emit('shout')
eh.emit('asdfds')
