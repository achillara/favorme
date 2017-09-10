import React from 'react';
import { ExpoConfigViewm } from '@expo/samples';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Alert,
  AsyncStorage,
  Image} from 'react-native';
var AutosizeInput = require('react-input-autosize');

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
    title: 'Settings',
  };
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  };
  getInitialState () {
    return {
      value1: '',
      value2: 'example',
      value3: 0,
      value4: '',
      value5: '',
    };
  };
  updateInputValue (input, event) {
    const newState = {};
    newState[input] = event.target.value;
    this.setState(newState);
  };
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.center}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Image style={styles.profileImg} source={{uri: 'https://vignette.wikia.nocookie.net/nickelodeon/images/4/46/Patrick.jpg/revision/latest?cb=20110418032110'}}/>
        <Text ref="fullname" style={styles.header}>Patrick Star</Text>
        <Text ref="birthday" style={styles.header}>20 Years Old</Text>
        <Text ref="hometown" style={styles.header}>New York, NY</Text>


        <Button
          onPress={() => {save("hi", "foo")}}
          title="Save"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => {read("hi")}}
          title="Save"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />


      </ScrollView>
    );

  }
}


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
  header: {
  },

});
