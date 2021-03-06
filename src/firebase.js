import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTk8YMbY_i_reL0zG_fGp5un0nbM-pfmA",
  authDomain: "build-netflix-5a4e7.firebaseapp.com",
  projectId: "build-netflix-5a4e7",
  storageBucket: "build-netflix-5a4e7.appspot.com",
  messagingSenderId: "536016123709",
  appId: "1:536016123709:web:8e953ea7ee3894aa363754",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

// import firebase from "./firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyDTk8YMbY_i_reL0zG_fGp5un0nbM-pfmA",
//   authDomain: "build-netflix-5a4e7.firebaseapp.com",
//   projectId: "build-netflix-5a4e7",
//   storageBucket: "build-netflix-5a4e7.appspot.com",
//   messagingSenderId: "536016123709",
//   appId: "1:536016123709:web:8e953ea7ee3894aa363754",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth };
// export default db;
