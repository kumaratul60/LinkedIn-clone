import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKEyvxs0AktakkfZUjucNFEJ_yj8H-IWk",
  authDomain: "linkedin-clone-e052021.firebaseapp.com",
  projectId: "linkedin-clone-e052021",
  storageBucket: "linkedin-clone-e052021.appspot.com",
  messagingSenderId: "646233440704",
  appId: "1:646233440704:web:05af46e7f0349b586d0825",
  measurementId: "G-CZ9TKKGKBZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
