import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
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

const Row = (props) => (
  <View style = {{flexDirection:"row"}}>
  	<View style={[styles.container, {marginLeft:30}]}>
		<View>
    		<Image source={{ uri: props.picture.large}} style={styles.photo} />
		</View>
		<View>
    		<Text style={styles.text}>
      			{`${props.name.first}`}
    		</Text>
		</View>
  	</View>
  	<View style = {[styles.container, {justifyContent:'center'}]}>
  		<Text style={styles.text}>
      		{`${props.score}`}
  		</Text>
  	</View>
  </View>
);

export default Row;
