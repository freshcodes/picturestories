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

export default App
