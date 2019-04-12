import React, {Component} from 'react';
import {Home} from "./src/app/views/Home";
import {Contact} from "./src/app/sections/Contact";
import {Quiz} from './src/app/sections/Quiz'
import {StackNavigator} from 'react-navigation'
import { Provider }from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from "./src/app/redux/reducers/index";

const store = createStore(
    reducers,
    applyMiddleware(thunk));

const MyRoutes = StackNavigator({
      HomeRT: {
        screen: Home
      },
      ContactRT: {
        screen: Contact
      },
      QuizRT: {
        screen: Quiz
      }
    },
    {
      initialRouteName: 'HomeRT'
    }
);

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <MyRoutes />
        </Provider>
    );
  }
}

