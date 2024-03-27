import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import NextDayCard from './NextDayCard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function NextDays() {
  const nextDays = useSelector((state) => state.weather.nextDaysData)
  const getDayName = (number) => {
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dt = new Date();
    const dayIndex = dt.getDay() + number
    if (dayIndex > 6) {
      return weekday[dayIndex - 7].slice(0, 3)
    } else {
      return weekday[dt.getDay() + number].slice(0, 3)
    }
  }

  const nextDay = { data: nextDays[8], day: getDayName(1) }
  const twoDay = { data: nextDays[16], day: getDayName(2) }
  const threeDay = { data: nextDays[24], day: getDayName(3) }
  const fourDay = { data: nextDays[32], day: getDayName(4) }
  const fiveDay = { data: nextDays[39], day: getDayName(5) }
  const daysArr = [nextDay, twoDay, threeDay, fourDay, fiveDay]
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        scrollEnabled={false}
        data={daysArr}
        renderItem={({ item }) => <NextDayCard max={item.data.main.temp_max} min={item.data.main.temp_min} main={item.data.weather[0].main} day={item.day} pod={item.data.sys.pod} />}
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp(98),
    height: hp(17),
    borderRadius: 12,
    backgroundColor: "#16161F",
  },
  list: {
    flex: 1,
    position: "absolute",
    top: 12,
    left: 12,

  }
})