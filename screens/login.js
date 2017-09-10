import React from 'react';
import {
  Image,
  Platform,
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ListView,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MainTabNavigator from '../navigation/MainTabNavigator';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Feed: { screen: FeedScreen },
  Exchange: { screen: ExchangeScreen },
  Settings: { screen: SettingsScreen },
});

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state  = {
      username: '',
      password: ''
    };
  }
  static navigationOptions = {
    title: "Login"
  };

  apiRequest = () => {
   fetch('https://favor-me.herokuapp.com/api/accounts/login/token/',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password
    })
   })
     .then(res => res.json())
     .then(function(resp){
       console.log(resp.token);
       if(resp){
          try {
            console.log('are u working');
             AsyncStorage.setItem('id_token', resp.token);
             this.props.navigation.navigate('MainTabNavigator')
            } catch (error) {
              console.log(error);
            }
       }
     })
     .catch(function(error) {
       console.log('There has been a problem with your fetch operation: ' + error.message);
     });
   };

  

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.apiRequest}>
          <TextInput
          placeholder='Username'
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(text) => this.setState({username: text})}
           value={this.state.username}
          />
           <TextInput
           placeholder='Password' type = 'password'
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(text) => this.setState({password: text})}
           value={this.state.password}
          />
          <Image
          source = {require('../images/login-button.png')}
          style={{height:100,width:200,marginTop:150}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});