import 'expo';
import React from 'react';

import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

export default class App extends React.Component {
  
  authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);
    return firebase.auth().signInWithCredential(credential);
  }

  login = async () => {
    const ADD_ID = '130629304233835';
    const options = {
        permissions: ['public_profile', 'email'],
    }
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(ADD_ID, options)
    if (type === 'success') {
         const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
          console.log(token);
          try {
            await AsyncStorage.setItem('id_token', token);
          } catch (error) {
            // Error saving data
          }
         console.log(await response.json());
        // this.authenticate(token);
    }
  }

  apiRequest = () => {
    fetch('https://favor-me.herokuapp.com/api/favors/users/')
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        console.log(json);
        return json;
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    };



  render() {
    return (
      <View style={styles.container}>
      <Button
          raised
          onPress={this.login}
          icon={{name: 'cached'}}
          title='Login With Facebook' />
        <Text>Welcome to Favor.Me!</Text>
        <Button raised onPress={this.apiRequest} title="Test API Fetch"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
