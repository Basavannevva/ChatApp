import React, { Component } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ContactList from './components/ContactList';
import Chat from './components/Chat';
import { StackNavigator, TabNavigator } from "react-navigation";
import {
  AppRegistry,
} from "react-native";

export const Screens = StackNavigator({
  Login: { screen: Login },
  SignUp: {screen : SignUp},
  Home: {screen : Home},
  ContactList: {screen : ContactList},
  Chat: {screen :Chat}
});

export default Screens;