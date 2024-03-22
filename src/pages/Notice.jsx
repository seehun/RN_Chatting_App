import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BasicHeader from '../components/BasicHeader';

const dummy_data = [
  {
    id: 1,
    title: '12월 24일 크리스마스 이벤트 당첨자 안내',
    content: '당첨자 안내',
  },
  {
    id: 2,
    title: '12월 25일 크리스마스 이벤트 당첨자 안내',
    content: '당첨자 안내',
  },
];

const Notice = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.noticeItem}
        onPress={() => navigation.navigate('NoticeDetail', {item})}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <BasicHeader title={'공지사항'} />
      <View style={{flex: 1}}>
        <FlatList
          data={dummy_data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notice;

const styles = StyleSheet.create({
  noticeItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBlockColor: '#f4f4f4',
  },
});
