import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import PushNotification from 'react-native-push-notification';
import OneSignal from 'react-native-onesignal';

export default function App() {
  OneSignal.init('1fe3def1-d66b-4b29-bd49-f32e6ce26b8d');

  useEffect(() => {
    PushNotification.configure({
      onNotification: function(notify) {
        console.log('NOTIFICATION:', notify);
      },
    });
  });

  function notification() {
    PushNotification.localNotification({
      group: 'Verifique',
      vibrate: 300,
      visibility: 'public',
      ticker: 'Olha lá',
      smallIcon: 'ic_launcher',
      largeIcon: 'ic_launcher',
      title: 'Testando',
      message: 'Tá funcionando?',
      bigText: 'Ótimo...',
      subText: 'Pode ver?',
      tag: '<h1>',
      color: 'blue',
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem vindo ao Push Notification</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notification();
        }}>
        <Text style={styles.instructions}>
          Aperte para exibir uma notificação
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4834d4',
  },
  welcome: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  button: {
    // backgroundColor: '#E5ECEE',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
  },
});
