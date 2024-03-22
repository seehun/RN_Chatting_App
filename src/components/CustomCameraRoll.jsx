import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BasicHeader from './BasicHeader';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const {width} = Dimensions.get('window');

const CustomCameraRoll = ({navigation, route}) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const imageWidth = width / 4 - 1;
  const fetchImage = async () => {
    CameraRoll.getPhotos({
      first: 100,
    }).then(res => {
      console.log({res});
      setImages(res.edges.map(e => e.node.image));
    });
  };
  // console.log(images);

  useEffect(() => {
    fetchImage();
  }, []);

  const selectImage = item => {
    setSelectedImage(item);
    route.params.onSelect(item);
    navigation.goBack('Chat', item);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{borderWidth: 0.5, borderColor: '#fff'}}
        onPress={() => selectImage(item)}>
        <Image source={item} style={{width: imageWidth, height: imageWidth}} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <BasicHeader title={'camera'} />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={4}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
};

export default CustomCameraRoll;

const styles = StyleSheet.create({});
