import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    flexDirection: 'row',
    marginRight: 15,
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    marginRight: 15,
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




function buildRow(score, otherFirst, favor) {
  var innerText = ""
  if(score > 0) {
    innerText = `${otherFirst} gave you ${score} tokens for ${favor}`
  }
  else {
    innerText = `I gave ${otherFirst} ${-score} tokens for ${favor}`
  }
  return innerText;
}

const Row = (props) => (
  <View style = {{flexDirection:"row"}}>
  <View style={styles.container}>
    <Image source={{ uri: props.picture.large}} style={styles.photo} />
      <Text style={styles.text}>{`${buildRow(props.score, props.name.first, props.favor)}`}</Text>   
    </View>
  </View>
);

export default Row;