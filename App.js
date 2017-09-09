import 'expo';
import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

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
         console.log(await response.json());
        this.authenticate(token);
    }
}




  render() {
    return (
      <View style={styles.container}>
      <Button
          raised
          onPress={this.login}
          icon={{name: 'cached'}}
          title='Login With Facebook' />
        <Text>Welcome to Favor.Me!</Text>
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
