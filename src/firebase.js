import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSeo4hDrLH-c3E1AcKc-tEjpaPEMxlkF0",
    authDomain: "whatsapp-clone-1f217.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-1f217.firebaseio.com",
    projectId: "whatsapp-clone-1f217",
    storageBucket: "whatsapp-clone-1f217.appspot.com",
    messagingSenderId: "1053022953829",
    appId: "1:1053022953829:web:a8b2746c4c02c33550c18c",
    measurementId: "G-XEYSG9N20H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;