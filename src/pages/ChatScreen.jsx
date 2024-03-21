import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import leftArrow from '../assets/icons/leftArrow.png';
import plus from '../assets/icons/plus.png';

import LeftBubble from '../components/leftBubble';
import RightBubble from '../components/RightBubble';
import dummy_data from '../static/dummydata';
import Toast from '../components/toast';

const ChatScreen = () => {
  const [toastVisible, setToastVisible] = useState(false);
  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            <Image source={leftArrow} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>이민구</Text>
          <View style={styles.backButton}></View>
        </View>

        <View style={styles.chattingScreen}>
          <FlatList
            data={dummy_data}
            renderItem={({item, index}) =>
              item.position === 'left' ? (
                <LeftBubble data={item} />
              ) : (
                <RightBubble data={item} nextData={dummy_data[index + 1]} />
              )
            }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View style={styles.chatDayWrapper}>
                <Text style={styles.chatDay}>2022년 2월 7일</Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <TouchableOpacity
          style={styles.plusBorder}
          onPress={() => setToastVisible(!toastVisible)}>
          <Image source={plus} style={styles.plusIcon} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder={'메세지 입력하기'} />
      </View>
      <Toast
        content={'아직 구현되지 않은 기능입니다.'}
        visible={toastVisible}
        handleCancel={() => setToastVisible(false)}
      />
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
    // justifyContent: 'flex-end',
    marginLeft: 'auto',
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
