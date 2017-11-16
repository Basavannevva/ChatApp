# ChatApp
# Basic ChatApp Using Firebase

1. Authentication of User
2. Login User
3. SignUp User
4. Create Group Chat from the users which are using the app
5. Text chat

# installtion of package
1. npm install firebase --save

# go to firebase console  Add Firebase to your web app  you will get values like this

const firebaseConfig = 

{

  apiKey: "<your-api-key>",

  authDomain: "<your-auth-domain>",

  databaseURL: "<your-database-url>",

  storageBucket: "<your-storage-bucket>",

  projectId: "<your-Project-Id>",

  messagingSenderId: "<your-messagingSenderId>"

};

# Initialize Firebase in your App.js
import * as firebase from 'firebase';

const firebaseConfig = 

{

  apiKey: "<your-api-key>",

  authDomain: "<your-auth-domain>",

  databaseURL: "<your-database-url>",

  storageBucket: "<your-storage-bucket>",

  projectId: "<your-Project-Id>",

  messagingSenderId: "<your-messagingSenderId>"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

