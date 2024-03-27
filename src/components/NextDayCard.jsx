import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { dayIcon, nightIcon } from '../images/weathericon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function NextDayCard({max,min,main,day,pod}) {
  const icon = pod === "d" ? dayIcon.find(item => item.name === main) : nightIcon.find(item => item.name === main)
  return (
    <View style={styles.list}>
      <Text style={styles.day}>{day}</Text>
      <Image source={icon.url} style={styles.icon}/>
      <Text style={styles.max}>{max}ºc</Text>
      <Text style={styles.min}>{min}ºc</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  list : {
    width : wp(19),
    height : 152,
    gap : 4,
    alignItems : "center"
  },
  day : {
    fontSize : 14,
    fontFamily : "Nunito_700Bold",
    color : "#BFBFD4"
  },
  icon : {
    width : 56,
    height : 56
  },
  max : {
    fontSize : 14,
    color : "#FAFAFA",
    fontFamily : "Nunito_700Bold"
  },
  min : {
    fontSize : 14,
    color : "#7F7F98",
    fontFamily : "Nunito_700Bold"
  }
})
