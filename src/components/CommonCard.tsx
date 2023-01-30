import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CommonCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bulbasaur 10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 150,
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },

  title: {
    textAlign: 'center',
  },
});

export default CommonCard;
