import React from 'react';
import { ExpoConfigViewm } from '@expo/samples';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Alert,
  AsyncStorage,
  Image,
  View,
  TouchableOpacity,
  TextInput} from 'react-native';

const userValues = ["name", "age", "location"];


function save(uniqKey, inputVal){
  AsyncStorage.setItem(uniqKey, inputVal);
  try {
    AsyncStorage.setItem(uniqKey, inputVal);
    Alert.alert(uniqKey + " " + inputVal)

  } catch (error) {
    Alert.alert("post")
  }
}

function read(uniqKey){
    try {
      const value = AsyncStorage.getItem(uniqKey);
      if (value !== null){
        // We have data!!
        Alert.alert(value)
    }
    } catch (error) {
      Alert.alert("read failed")
      // Error retrieving data
    }

}

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 
    <Image
        source={require('../images/logo.png')}
		style={{resizeMode: 'contain', width:100,height:50, marginTop:5}}		        
      />,
  };
  constructor(props) {
    super(props);
    AsyncStorage.getItem('username')
      .then((value) => this.setState({username: value}));
    this.state = {
      type: 'input',
      score: 'null',
	    text: '',
      text2: '',
      username: ''
    }
    this.showHide = this.showHide.bind(this);
  }
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
		<ScrollView style={{backgroundColor: 'white'}}>
			<View style={{alignItems: 'center', backgroundColor: 'palegreen'}}>
				<Image 
					style={styles.profile}
					source={{uri: 'https://vignette.wikia.nocookie.net/nickelodeon/images/4/46/Patrick.jpg/revision/latest?cb=20110418032110'}}
				/>
			</View>
			<View style={{flex: 1, alignItems: 'center', paddingTop:15, backgroundColor:'white'}}>
				<Text style={{fontSize: 30}}>Hello, {this.state.username}!</Text>
				<Text style={{fontSize: 22, color: 'gray'}}>New York, NY</Text>
				<View style={styles.box}>
					<View style={{marginTop: 15}}>
						<Text style={{fontSize: 15}}>Change Password</Text>
					</View>
					<TextInput
            			type="password"
                  secureTextEntry={true}
            			style={styles.textField}
            			placeholder="   New Password"
            			onChangeText={(text) => this.setState({text})}
					/>
					<TextInput
            			type="password"
                  secureTextEntry={true}
            			style={styles.textField}
            			placeholder="   Confirm Password"
            			onChangeText={(text2) => this.setState({text2})}
					/>
					<TouchableOpacity>
						<View
							style={{borderRadius: 5, backgroundColor: 'palegreen', height:40, width: 200, alignItems: 'center'}}
						>
							<Text style={{fontSize: 20, marginTop: 5}}>Reset</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>    
    );

  }
}

/*
      <label className="password">Password
      <input type={this.state.type} className="password__input" onChange={this.passwordStrength}/>
      <span className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
      <span className="password__strength" data-score={this.state.score} />
      </label>

*/
const styles = StyleSheet.create({
  profile: {
    height: 120,
    borderRadius: 60,
	borderWidth: 5,
	borderColor: 'gray',
    width: 120,
    marginTop: 30,
	marginBottom: 20
  },
  box: {
	alignItems: 'center'
  },
  textField: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15

  },
});

