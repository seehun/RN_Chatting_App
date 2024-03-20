import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ProfileImg from '../assets/images/dummy_image.png';
import leftBubbleTriangle from '../assets/icons/leftChatArrow.png';

const LeftBubble = ({data}) => {
  return (
    <View style={styles.leftChatRowWrapper}>
      <Image source={ProfileImg} style={styles.profileImg} />
      <View style={{marginLeft: 8}}>
        <Text style={styles.userName}>{data.name}</Text>
        <View style={styles.bubbleContainer}>
          <Image
            source={leftBubbleTriangle}
            style={styles.leftBubbleTriangle}
          />
          <View style={styles.leftBubbleWrapper}>
            <Text style={styles.chat}>{data.content}</Text>
          </View>
        </View>
      </View>
      <View style={styles.chatTimeWrapper}>
        <Text style={styles.chatTime}>{data.created_date}</Text>
      </View>
    </View>
  );
};

export default LeftBubble;

const styles = StyleSheet.create({
  leftChatRowWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  profileImg: {
    width: 40,
    height: 40,
  },

  userName: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 16,
    color: '#000',
  },

  bubbleContainer: {
    maxWidth: 232,
    marginTop: 4,
    flexDirection: 'row',
  },

  leftBubbleTriangle: {
    width: 8,
    height: 8,
    marginTop: 5,
  },

  leftBubbleWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },

  chat: {
    color: '#414141',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 22.5,
  },

  chatTimeWrapper: {
    marginLeft: 4,
    justifyContent: 'flex-end',
  },

  chatTime: {
    fontSize: 10,
    fontWeight: 500,
    color: '#737373',
    lineHeight: 15,
  },
});
