const EventHub = require('../src/index.js').EventHub

const eh = new EventHub()

console.log('eh', eh)
eh.on('call', () => console.log(1))
eh.on('call', () => console.log(3))
eh.on('call', () => console.log(5))
eh.on('shout', () => console.log(5))

eh.emit('call')
eh.off('shout')
eh.emit('shout')
