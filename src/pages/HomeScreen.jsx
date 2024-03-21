import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Text>asdf</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
