/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import PushNotification from 'react-native-push-notification'


type Props = {};
export default class App extends Component<Props> {
  componentWillMount = () => {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      }
    })
  }

  notification = () => {
    PushNotification.localNotification({
      vibrate: 300,
      title: 'Testando',
      message: 'Tá funcionando?',
      bigText: 'Ótimo...',
      subText: 'Pode ver?'
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao Push Notification</Text>
        <TouchableOpacity style={styles.button} onPress={() => {
          this.notification();
        }}>
        <Text style={styles.instructions}>Aperte para exibir uma notificação</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }, 
  button: {
    backgroundColor: '#E5ECEE',
    padding: 15,
    borderRadius: 15,
  },
});
