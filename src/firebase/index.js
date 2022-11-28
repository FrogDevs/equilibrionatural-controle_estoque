import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB5rmwG5-_EhF-MAcQHEY2gEDMFnQlOBVo',
  authDomain: 'etec-tcc-fb823.firebaseapp.com',
  projectId: 'etec-tcc-fb823',
  storageBucket: 'etec-tcc-fb823.appspot.com',
  messagingSenderId: '497618018737',
  appId: '1:497618018737:web:559da897651e66084c1d90'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
