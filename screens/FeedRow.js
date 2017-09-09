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
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const rightstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
  }
});
const newright = StyleSheet.create({
  container:{
    flex: 1,
    marginRight: 3,
    flexDirection: 'row',
    alignItems:'flex-end',
  }
});

const Row = (props) => (
  <View style = {{flexDirection:"row"}}>
  <View style={styles.container}>
    <Image source={{ uri: props.picture.large}} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.name.first} gave you ${props.score} `}
    </Text>
    </View>
  </View>

  

  
);

export default Row;