import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import dayjs from 'dayjs';

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

const Calender = () => {
  const [selectedDay, setSelectedDay] = useState();
  //   console.log(dayjs(new Date()).format('YYYY-MM-DD'));
  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Calendar
        initialDate={dayjs(new Date()).format('YYYY-MM-DD')}
        onDayPress={day => setSelectedDay(day.dateString)}
        markedDates={{
          [selectedDay]: {
            selected: true,
            selectedColor: 'red',
            selectedTextColor: '#fff',
            activeOpacity: 0.6,
          },
        }}
      />
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({});
