import React from 'react';
import { ScrollView, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ExchangeScreen extends React.Component {
  static navigationOptions = {
    title: 'Exchange',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
		<View style={{alignItems: 'center', flexDirection: 'row'}}>
			<View style={styles.box}>
				<TouchableOpacity>
					<Image
						source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}	
						style={{width:400, height:400}}	
					/>
				</TouchableOpacity>	
			</View>
			<View style={styles.box}>
				<TouchableOpacity>
					<Image
						source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
						style={{width:400, height:400}}	
					/>
				</TouchableOpacity>	
			</View>
		</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'lightgreen',
  },
  box: {
	flex: 1,
	paddingTop: 20,
	marginTop: 15,
	marginBottom: 15,
	height: 70,
	alignItems: 'center',
  },
});


