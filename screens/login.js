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
  MainTab: { screen: MainTabNavigator},
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
    title: 'Login', 
  };

  test = () => {

	AsyncStorage.setItem('username', this.state.username)
      .then(() => console.log('Success!'));
	this.props.navigation.navigate('MainTab');
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
     .then(resp => {
       console.log(resp.token);
       if(resp){
            AsyncStorage.setItem('id_token', resp.token)
            .then(() => this.props.navigation.navigate('Home'))
            .catch((error) => console.log(error))
       }
     })
     .catch(function(error) {
       console.log('There has been a problem with your fetch operation: ' + error.message);
     });
   };

 

  render() {
    return (
      <View style={styles.container}>
		<View style={styles.row}>
		    <Image
        		source={require('../images/logo.png')}
				style={{resizeMode: 'contain', width:200,height:120, marginTop:5}}		        
      		/>
		</View>
		<View style={[styles.row, {marginTop:40}]}>
          <TextInput
            autoCapitalize="none"
          	placeholder='Username' type = 'username'
           	style={styles.textField}
           	onChangeText={(text) => {
           	  this.setState({username: text});
              AsyncStorage.setItem('username', text)
                .then(() => console.log('Success!'));
            }}
           	value={this.state.username}
          />
		</View>
		<View style={styles.row}>
           <TextInput
             secureTextEntry={true}
           placeholder='Password' type = 'password'
           style={styles.textField }
           onChangeText={(text) => this.setState({password: text})}
           value={this.state.password}
          />
		</View>
		<TouchableOpacity onPress={this.test}>
		<View style={[styles.row, {marginTop:-30}]}>
          <Image
          source = {require('../images/login-button.png')}
          style={{resizeMode: 'contain', width:250,marginTop:100}}
          />
		</View>
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
  row: {
	marginTop: 15,
	marginBottom: 15,
	alignItems:'center',
  },
  textField: {
	height: 40,
	width: 250,
	borderColor: 'gray',
	borderWidth: 1,
	borderRadius: 5,
  },
});
