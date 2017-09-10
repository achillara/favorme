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


function buildRow(score, otherFirst) {
  var innerText = ""
  if(score > 0) {
    innerText = `${otherFirst} gave you ${score} tokens`
  }
  else {
    innerText = `I gave ${otherFirst} ${-score} tokens`
  }
  return innerText;
}

const Row = (props) => (
  <View style = {{flexDirection:"row"}}>
  <View style={styles.container}>
    <Image source={{ uri: props.picture.large}} style={styles.photo} />
      <Text style={styles.text}>{`${buildRow(props.score, props.name.first)}`}</Text>   
    </View>
  </View>

  

  
);

export default Row;