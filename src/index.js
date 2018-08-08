import './style'
import App from './components/app'

import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyALw9bNAZ4KWOP_G0IUGQBDBbXsagcATis',
  authDomain: 'picture-stories-f9a98.firebaseapp.com',
  databaseURL: 'https://picture-stories-f9a98.firebaseio.com',
  projectId: 'picture-stories-f9a98',
  storageBucket: 'picture-stories-f9a98.appspot.com',
  messagingSenderId: '648881912593'
}
firebase.initializeApp(firebaseConfig)

firebase.firestore().settings({ timestampsInSnapshots: true })

// firebase.firestore().enablePersistence().then(function() {
//   console.log('offline supported')
// }).catch(function(err) {
//   if (err.code == 'failed-precondition') {
//     console.log('multiple tabs open')
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//   } else if (err.code == 'unimplemented') {
//     console.log('not supported')
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//   }
// })

export default App
