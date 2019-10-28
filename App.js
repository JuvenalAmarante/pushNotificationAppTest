import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PushNotification from 'react-native-push-notification';
import OneSignal from 'react-native-onesignal';

export default function App() {
  OneSignal.init('1fe3def1-d66b-4b29-bd49-f32e6ce26b8d');
  OneSignal.enableVibrate(true);
  OneSignal.addTrigger('hour', 11);

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
    <LinearGradient colors={['#4834d4', '#1e136e']} style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <View style={styles.title}>
        <Text style={styles.titleText}>Push Notification</Text>
        <Text style={styles.titleText}>Bem vindo</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          notification();
        }}>
        <Text style={styles.textButton}>
          Aperte para exibir uma notificação
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4834d4',
  },
  title: {},
  titleText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  textButton: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  button: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
  },
});
