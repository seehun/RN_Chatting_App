import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useRef} from 'react';
import BasicHeader from '../components/BasicHeader';
import Video, {VideoRef} from 'react-native-video';
import dummy_video from '../assets/videos/video.mp4';

const VideoPlayer = () => {
  const videoRef = useRef();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <BasicHeader title={'video'} />
      <Video
        source={dummy_video}
        ref={videoRef}
        style={styles.backgroundVideo}
        repeat={true}
      />
    </SafeAreaView>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
