import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAb2r2rcnjYZCO_bBfWEsIbDFJiBI__8wI",
    authDomain: "netflix-cloune-web.firebaseapp.com",
    projectId: "netflix-cloune-web",
    storageBucket: "netflix-cloune-web.appspot.com",
    messagingSenderId: "634710593981",
    appId: "1:634710593981:web:611a5c45b8fbbd5a8482d4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();

  export {auth}
  export default db;