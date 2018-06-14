const hunter = {
  firstName: 'Alice',
  lastName: 'the Rabbit Hunter'
}

console.log('Value of Object One', hunter)

const niceGirl = {...hunter }
niceGirl.lastName = 'The nice girl'

console.log('Value of Object hunter', hunter)
console.log('Value of Object niceGirl', niceGirl)

const cast = {
  hunter,
  prey: 'The Rabbit'
}

console.log('Value of object hunter:', hunter)
console.log('Value of Object cast:', cast)

hunter.firstName = 'Bob'

console.log('Value of Object hunter:', hunter)
console.log('Value of Object cast:', cast)
