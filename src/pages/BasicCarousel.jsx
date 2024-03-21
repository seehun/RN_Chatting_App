import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import dummy_data from '../static/dummydata';
// import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const BasicCarousel = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.content}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        data={dummy_data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={320}
      />
    </SafeAreaView>
  );
};

export default BasicCarousel;

const styles = StyleSheet.create({});
