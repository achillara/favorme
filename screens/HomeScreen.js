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
  Modal,
  TouchableHighlight
} from 'react-native';
import { WebBrowser } from 'expo';
import Row from './Rows';
import data from './fakeData';
import { Ionicons } from '@expo/vector-icons';

import ExchangeScreen from '../screens/ExchangeScreen';




//ios-add
//md-add


export default class HomeScreen extends React.Component {

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  static navigationOptions = {
    title: 
    <Image
        source={require('../images/logo.png')}
    		style={{resizeMode:'contain', width:100,height:50, marginTop:5}} />,
   headerRight:
    <TouchableOpacity>
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
        size={28}
        style={{ marginBottom: -3, marginRight: 15 }}
      />
    </TouchableOpacity>
      
    
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
        renderRow={this._renderRow.bind(this)} 

        /*renderRow={(data) => <Row {...data} />}*/
      />
      </View>

    );

  }

  getUnderLayColor(score){
    console.log(score)
    if(score <= -30){
      return  "#99FF99"
      ;
    }
    else if(score < 30 && score > -30){
      return "#FFFF99";
    }
    else if(score >= 30){
      console.log('wtf');
      return "#FF3333";
     
    }
  }

_renderRow(row, sectionId, rowId, highlightRow) {
    var self = this;
    return (
      <TouchableHighlight activeOpacity={80}
                underlayColor={this.getUnderLayColor(row.score)}
                onPress={function() {
                  highlightRow(sectionId, rowId)

                  
                }}>

        <View style = {{flexDirection:"row"}}>
            <View style={[styles.containerr, {marginLeft:30}]}>
            <View>
                <Image source={{ uri: row.picture.large}} style={styles.photo} />
            </View>
            <View>
                <Text style={styles.text}>
                    {`${row.name.first}`}
                </Text>
            </View>
            </View>
            <View style = {[styles.containerr, {justifyContent:'center'}]}>
              <Text style={styles.text}>
                  {`${row.score}`}
              </Text>
            </View>
          </View>
      </TouchableHighlight>
    )
  }



  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  icons:{
    width:24,
    height:24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  containerr: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});






