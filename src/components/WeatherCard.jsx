import { View } from 'react-native'
import React from 'react'
import CurrentWeather from './CurrentWeather'
import WeatherDetail from "./WeatherDetail"
import NextDays from './NextDays'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function WeatherCard() {
  return (
    <View style={{width : wp(100), height : hp(90), gap : 8, paddingTop : 8, paddingEnd : 8, paddingBottom : 20, paddingStart : 8, alignItems : "center"}}>
      <CurrentWeather />
      <WeatherDetail/>
      <NextDays/>
    </View>
  )
}

