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
    this.state = {
      type: 'input',
      score: 'null'
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
      <ScrollView style={styles.container} contentContainerStyle={styles.center}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <TouchableOpacity>
          <Image style={styles.profileImg} source={{uri: 'https://vignette.wikia.nocookie.net/nickelodeon/images/4/46/Patrick.jpg/revision/latest?cb=20110418032110'}}/>
        </TouchableOpacity>
        <Text ref="fullname" style={styles.headerName}>Patrick Star</Text>
        <Text ref="birthday" style={styles.header}>20 Years Old</Text>
        <Text ref="hometown" style={styles.header}>New York, NY</Text>

        <Text>Find Friends</Text>
        <View style={{padding: 10}}>
          <Text>Change Password</Text>
          <TextInput
            type="password"
            style={{height: 40}}
            placeholder="New Password"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            type="password"
            style={{height: 40}}
            placeholder="Confirm Password"
            onChangeText={(text) => this.setState({text})}
          />
          <Button
            onPress={() => {Alert.alert("saving pw")}}
            title="Save Password"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>


      <Text>Find Friends</Text>




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
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  profileImg: {
    height: 120,
    borderRadius: 50,
    width: 120,
    marginTop: 10,
  },
  center: {
    alignItems: 'center',
  },
  headerName: {
    fontSize:35
  },
  header: {
    fontSize: 20
  },

});

