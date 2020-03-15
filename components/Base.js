import Rebase from "re-base";

import firebase from "firebase/app";
import "firebase/database";

//Get Firebase configuration
// import { firebaseConfig } from "../configuration/api_config";

//Initialize firebase if it hasn't already been initialized...
//The ternary logic is needed due to a next.js constraint.
//More info here: https://github.com/zeit/next.js/issues/1999
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp({
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL
    })
  : firebase.app();

// OLD: const base = Rebase.createClass(firebaseApp.database());
const base = Rebase.createClass(firebase.database(firebaseApp));

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
