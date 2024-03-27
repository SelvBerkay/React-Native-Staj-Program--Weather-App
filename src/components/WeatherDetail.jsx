import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import icons from '../images/icon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function WeatherDetail() {
  const data = useSelector((state) => state.weather.data)
  const detail = [
    {
      name: "Thermal sensation",
      value: `${Math.round(data.main.feels_like)}ºc`,
      icon: icons.thermometer
    },
    {
      name: "Probability of rain",
      value: `${(data.pop * 100).toFixed()}%`,
      icon: icons.cloud
    },
    {
      name: "Wind speed",
      value: `${data.wind.speed} km/h`,
      icon: icons.wind
    },
    {
      name: "Air humidity",
      value: `${data.main.humidity}%`,
      icon: icons.drop
    }
  ]
  return (
    <FlatList
      style={styles.list}
      data={detail}
      renderItem={({ item }) => <View style={styles.listItemDiv}>
        <View style={styles.item}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <Text style={styles.value}>{item.value}</Text>
      </View>}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flexGrow : 0,
    width: wp(98),
    height : hp(40),
    borderRadius: 12,
    paddingTop: 4,
    paddingEnd: 16,
    paddingBottom: 4,
    paddingStart: 16,
    gap: 8,
    backgroundColor: "#16161F"
  },
  listItemDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1C1C27"
  },
  item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#3B3B54"
  },
  itemName: {
    color: "#BFBFD4",
    fontSize: 14,
    fontFamily: "Nunito_700Bold"
  },
  value: {
    color: "#FAFAFA",
    fontSize: 16,
    fontFamily: "Nunito_700Bold"
  },
})