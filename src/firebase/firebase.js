import * as firebase from "firebase";
import moment from 'moment'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//     id: '3',
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((child_snapshot) => {
//         expenses.push({
//             id: child_snapshot.key,
//             ...child_snapshot.val()
//         })
//     })

//     console.log(expenses)
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((child_snapshot) => {
//             expenses.push({
//                 id: child_snapshot.key,
//                 ...child_snapshot.val()
//             })
//         })

//         console.log(expenses)
//     })

// const expenses = [{
//     id: '1',
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// }, {
//     id: '2',
//     description: 'Rent',
//     note: '',
//     amount: 1095,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//     id: '3',
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
// }]

// expenses.forEach((expense) => {
//     database.ref('expenses').push(expense)
// })



// const notes = [{
//     id: '12',
//     title: 'title',
//     body: 'body note'
// }, {
//     id: '123',
//     title: 'title 2',
//     body: 'body note 2'
// }]

// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//     const { name, job: { title, company }} = snapshot.val() 
//     console.log(`${name} is a ${title} at ${company}`)
// }, (e) => {
//     console.log('Error with data change', e)
// })

// setTimeout(() => {
//     database.ref('job/company').set('Google')
// }, 3500)

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(25)
// }, 10500)

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'RobPet',
//     age: 37,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Salerno',
//         country: 'Italy'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed!', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Removed')
//     })
//     .catch((e) => {
//         console.log('Error on remove', e)
//     })