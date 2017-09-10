import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class RequestScreen extends React.Component {
  static navigationOptions = {
    title: 'Favors',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
		<View style={{alignItems: 'center'}}>
			<Text>What is upppp?</Text>
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
});
