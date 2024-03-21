import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import searchIcon from '../assets/icons/search.png';
import addIcon from '../assets/icons/add.png';
import alertIcon from '../assets/icons/alert.png';
import settingIcon from '../assets/icons/setting.png';
import myProfile from '../assets/images/myProfile.png';
import rightArrow from '../assets/icons/rightArrow.png';
import dummy_data from '../static/profile_dummy_data';

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat', {params: item})}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginBottom: 16,
          marginRight: 16,
        }}>
        <Image source={item.profileImg} style={{width: 40, height: 40}} />
        <View style={{gap: 4}}>
          <Text style={{fontSize: 14, color: '#333'}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: '#828282'}}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListHeader = () => {
    return (
      <View
        style={{
          marginVertical: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '400', color: '#828282'}}>친구 </Text>
        <Text style={{fontSize: 14, color: '#4F4F4F'}}>
          {dummy_data.length}명
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <View style={styles.icon_group}>
          <TouchableOpacity>
            <Image source={searchIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={addIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={alertIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={settingIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.myProfileWrapper}>
          <View style={{gap: 2}}>
            <Text style={{fontSize: 18, color: '#333', fontWeight: 'bold'}}>
              황세훈
            </Text>
            <Text style={{fontSize: 14, color: '#828282', fontWeight: 500}}>
              D-36
            </Text>
          </View>
          <Image source={myProfile} style={styles.myProfileImg} />
        </View>
        <View style={styles.recommendWrapper}>
          <View style={{maxWidth: 320, gap: 4}}>
            <Text style={{fontSize: 16, color: '#000'}}>추천 친구</Text>
            <Text
              numberOfLines={1}
              style={{fontSize: 14, fontWeight: 400, color: '#828282'}}>
              엘비스프레슬리, 요아소비, 요네즈켄시, 박보영, 크레용신짱구
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={rightArrow} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 16, flex: 1}}>
          <FlatList
            data={dummy_data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={renderListHeader}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  icon_group: {
    flexDirection: 'row',
    marginLeft: 'auto',
    gap: 8,
    marginBottom: 16,
  },
  icon: {width: 32, height: 32},
  myProfileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  myProfileImg: {
    width: 56,
    height: 56,
  },
  recommendWrapper: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingVertical: 16,
    gap: 4,
  },
});
