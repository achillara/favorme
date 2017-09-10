import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Row from './FeedRow'

let foo = "fft" //let or const

var user = ""



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 
    <Image
        source={require('../images/logo.png')}
        
      />
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    }; 
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
        />
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
