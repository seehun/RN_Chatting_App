import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import leftArrow from '../assets/icons/leftArrow.png';
import rightBubbleTriangle from '../assets/icons/rightChatArrow.png';
import plus from '../assets/icons/plus.png';

import LeftBubble from '../components/leftBubble';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            <Image source={leftArrow} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>sehun</Text>
          <View style={styles.backButton}></View>
        </View>
        <View style={styles.chattingScreen}>
          <View style={styles.chatDayWrapper}>
            <Text style={styles.chatDay}>2022년 2월 7일</Text>
          </View>

          <LeftBubble chatText={'점심 먹었냐'} />

          <View style={styles.rightChatRowWrapper}>
            <View style={styles.bubbleContainer}>
              <View style={styles.rightBubbleWrapper}>
                <Text style={styles.myChat}>그럼 안먹었겠음?</Text>
              </View>
              <Image
                source={rightBubbleTriangle}
                style={styles.leftBubbleTriangle}
              />
            </View>
          </View>

          <View style={styles.rightChatRowWrapper}>
            <View style={styles.bubbleContainer}>
              <View style={styles.chatInfoWrapper}>
                <Text style={styles.chatTime}>읽음</Text>
                <View style={styles.microBar} />
                <Text style={styles.chatTime}>12:03PM</Text>
              </View>
              <View style={styles.rightBubbleWrapper}>
                <Text style={styles.myChat}>
                  안먹었으면 같이 먹을까?? 먹고싶은 메뉴가 있으면 말해보겠니?
                </Text>
              </View>
              <Image
                source={rightBubbleTriangle}
                style={styles.leftBubbleTriangle}
              />
            </View>
          </View>

          <LeftBubble
            chatText={
              '나는 풍자 또 간집에 나온 소라 편의점의 제육볶음이 너무 먹고싶구나ㅎㅎㅎㅎ'
            }
          />

          <View style={styles.rightChatRowWrapper}>
            <View style={styles.bubbleContainer}>
              <View style={styles.chatInfoWrapper}>
                <Text style={styles.chatTime}>읽음</Text>
                <View style={styles.microBar} />
                <Text style={styles.chatTime}>12:03PM</Text>
              </View>
              <View style={styles.rightBubbleWrapper}>
                <Text style={styles.myChat}>ㄱㄱㄱ</Text>
              </View>
              <Image
                source={rightBubbleTriangle}
                style={styles.leftBubbleTriangle}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <TouchableOpacity style={styles.plusBorder}>
          <Image source={plus} style={styles.plusIcon} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder={'메세지 입력하기'} />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  backButton: {
    width: 18,
    height: 18,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    textAlign: 'center',
    color: '#000',
  },
  chattingScreen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  chatDayWrapper: {
    marginTop: 16,
    marginBottom: 16,
  },
  chatDay: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 17.47,
    color: '#828282',
    textAlign: 'center',
  },
  rightChatRowWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  //
  leftChatRowWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  chat: {
    color: '#000',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 22.5,
  },
  profileImg: {
    width: 40,
    height: 40,
  },
  bubbleContainer: {
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
  //
  rightBubbleWrapper: {
    backgroundColor: '#6297FF',
    borderRadius: 8,
    padding: 8,
    maxWidth: 232,
  },
  myChat: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 22.5,
  },
  microBar: {
    width: 1,
    height: 4,
    backgroundColor: '#D5D5D5',
  },
  chatInfoWrapper: {
    flexDirection: 'row',
    marginTop: 'auto',
    alignItems: 'center',
    gap: 4,
    marginRight: 4,
  },
  inputWrapper: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 8,
  },
  plusBorder: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: 12,
    height: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#efefef',
    paddingHorizontal: 12,
  },
});
