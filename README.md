# ChatApp
Basic ChatApp Using Firebase

1. Authentication of User
2. Login User
3. SignUp User
4. Craete Group Chat from the users which are using the app
5. Text chat


installtion of package
1. npm install firebase --save

in your App.js
// Initialize Firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

