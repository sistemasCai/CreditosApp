import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {createStackNavigator } from "react-navigation";
import  Login  from './componets/Login';
import Dashboard from './componets/Dashboard'

const Application = createStackNavigator({
  Home: {
    screen: Login
  },
  Dashboard : {
    screen: Dashboard
  }
},{
  navigationOptions : {
    header : false
  }
});
export default class App extends React.Component {
  constructor() {
    super();
    //
  }
  render() {
    return (<Application/>);
  }
}
