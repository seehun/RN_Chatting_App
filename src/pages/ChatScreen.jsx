import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import plus from '../assets/icons/plus.png';

import dummy_data from '../static/dummydata';
import Toast from '../components/toast';
import Modal from 'react-native-modal';

import record from '../assets/icons/record.png';
import camera from '../assets/icons/camera.png';
import album from '../assets/icons/album.png';

import BasicHeader from '../components/BasicHeader';
import LeftBubble from '../components/leftBubble';
import RightBubble from '../components/RightBubble';

const {width} = Dimensions.get('window');

const ChatScreen = ({navigation, route}) => {
  // console.log(route.params.params);
  const {name} = route.params.params;
  const [toastVisible, setToastVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const onSelect = data => {
    console.log(data);
    setSelectedImage(data);
  };

  const gotoCameraRoll = () => {
    setModalVisible(false);
    // navigation.navigate('CustomCameraRoll', {onSelect: data => onSelect(data)});
    navigation.navigate('CustomCameraRoll', {onSelect: data => onSelect(data)});
  };

  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.mainContainer}>
        <BasicHeader title={name} />
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
        {selectedImage && (
          <View style={{position: 'absolute', bottom: 8, right: 16}}>
            <Image source={selectedImage} style={{width: 40, height: 40}} />
          </View>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <TouchableOpacity
          style={styles.plusBorder}
          onPress={() => setModalVisible(true)}>
          <Image source={plus} style={styles.plusIcon} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder={'메세지 입력하기'} />
      </View>
      <Toast
        content={'아직 구현되지 않은 기능입니다.'}
        visible={toastVisible}
        handleCancel={() => setToastVisible(!modalVisible)}
      />
      <Modal
        isVisible={modalVisible}
        useNativeDriver
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        animationInTiming={200}
        animationOutTiming={200}
        backdropOpacity={0}
        style={modalStyles.container}>
        <View style={modalStyles.wrapper}>
          <View style={styles.inputWrapper}>
            <TouchableOpacity
              style={styles.plusBorder}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image
                source={plus}
                style={[styles.plusIcon, modalStyles.icon]}
              />
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder={'메세지 입력하기'} />
          </View>
          <View style={{flexDirection: 'row', gap: 40, marginLeft: 40}}>
            <TouchableOpacity style={modalStyles.btn} onPress={gotoCameraRoll}>
              <Image source={album} style={modalStyles.btnIcon} />
              <Text style={modalStyles.btnText}>앨범</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyles.btn}>
              <Image source={camera} style={modalStyles.btnIcon} />
              <Text style={modalStyles.btnText}>카메라</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyles.btn}>
              <Image source={record} style={modalStyles.btnIcon} />
              <Text style={modalStyles.btnText}>음성 녹음</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

const modalStyles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  wrapper: {width: width, paddingTop: 8, backgroundColor: '#fff', height: 176},
  icon: {
    transform: [{rotate: '45deg'}],
  },
  btn: {
    alignItems: 'center',
    gap: 4,
  },
  btnText: {
    color: '#828282',
    fontWeight: 400,
  },
  btnIcon: {
    width: 48,
    height: 48,
  },
});
