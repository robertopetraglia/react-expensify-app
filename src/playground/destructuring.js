// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'title',
//     author: 'author',
//     publisher: {
//         name: 'publisher name'
//     }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)


const address = ['via address 123', 'city', 'state', 'zipcode']
const [street, city, state, zipcode = 'N/A'] = address
console.log(street, city, state, zipcode)

const item = ['Coffe', '1.00', '2.00', '3.00']
const [itm, , mediumPrice] = item
console.log(`${itm} costs ${mediumPrice}`)
