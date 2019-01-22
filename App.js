/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ToDoList from './Components/todolist';
import {SafeAreaView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,}} >
                <ToDoList/>
      </View>
        
     
    );
  }
}
