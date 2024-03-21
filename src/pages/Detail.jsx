import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import AlertModal from '../components/AlertModal';

const {width, height} = Dimensions.get('window');

const Detail = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <Text>모달 오픈</Text>
      </TouchableOpacity>
      <AlertModal
        isVisible={isVisible}
        headerTitle={'detail'}
        okText={'ok'}
        noText={'no'}
        onPressOk={() => setIsVisible(!isVisible)}
        onPressNo={() => setIsVisible(!isVisible)}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
