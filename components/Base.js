import Rebase from "re-base";

import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9kvanOfp34jCCZ_O5UwjA5t0cL1oQeQY",
  authDomain: "donut-shop-b0109.firebaseapp.com",
  databaseURL: "https://donut-shop-b0109.firebaseio.com"
});

// OLD: const base = Rebase.createClass(firebaseApp.database());
const base = Rebase.createClass(firebase.database(firebaseApp));

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
