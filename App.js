import React, {Component} from 'react';
import {Home} from "./app/views/Home";
import {Contact} from "./app/sections/Contact";
import {StackNavigator} from 'react-navigation'

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
},
    {
      initialRouteName: 'HomeRT'
    }
);

export default class App extends Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}

