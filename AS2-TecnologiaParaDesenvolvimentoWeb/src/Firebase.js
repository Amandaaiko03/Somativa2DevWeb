import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDWzShfTqnNKW12XahUHdcMWAXdc2i8hRg",
  authDomain: "desenvolvimentoweb-pucpr-4e327.firebaseapp.com",
  projectId: "desenvolvimentoweb-pucpr-4e327",
  storageBucket: "desenvolvimentoweb-pucpr-4e327.firebasestorage.app",
  messagingSenderId: "551790709216",
  appId: "1:551790709216:web:d05c0bdf380a3d6d638385"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export default firebase;