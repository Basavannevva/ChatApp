import React, { Component } from "react";
import Screens from "./src/Screens";
import firebase from 'firebase';
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStore from "./src/store/configStore";
const store = configureStore();
class App extends Component {

 componentWillMount() {

  var fireBaseconfig = {
    apiKey: "AIzaSyCv3c1YjGUVZ2NivTCT7_BhN5vee-4i01Y",
    authDomain: "xelpchat-ef805.firebaseapp.com",
    databaseURL: "https://xelpchat-ef805.firebaseio.com",
    storageBucket: "xelpchat-ef805.appspot.com",
    messagingSenderId: "960763794729"
  };
  // firebase.initializeApp(fireBaseconfig);
  firebase.initializeApp(fireBaseconfig);
  console.disableYellowBox = true;
  }
render() {
return (
    <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}
export default App;
