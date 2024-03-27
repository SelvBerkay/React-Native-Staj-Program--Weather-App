import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { getDate } from '../utils/getDate'
import { dayBG, nightBG } from '../images/weatherbackground';
import { dayIcon, nightIcon } from '../images/weathericon';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function CurrentWeather() {
  const data = useSelector((state) => state.weather.data)
  const cityName = useSelector((state) => state.weather.name)
  const country = useSelector((state) => state.weather.country);
  const temp = data.main.temp;
  const temp_max = Math.round(data.main.temp_max);
  const temp_min = Math.round(data.main.temp_min);
  const description = data.weather[0].description;
  const main = data.weather[0].main;
  const partOfDay = data.sys.pod;
  const bg = partOfDay === "d" ? dayBG.find(item => item.name === description) : nightBG.find(item => item.name === description)
  const icon = partOfDay === "d" ? dayIcon.find(item => item.name === main) : nightIcon.find(item => item.name === main)
  return (
    <View style={styles.container}>
      <ImageBackground source={bg.url} imageStyle={styles.backgroundImg}>
        <View style={styles.info}>
          <Text style={styles.cityName}>{cityName}, {country}</Text>
          <Text style={styles.date}>{getDate()}</Text>
        </View>
        <View>
          <View style={styles.weather}>
            <Text style={styles.temp}>{Math.round(temp)}ºc</Text>
            <View style={styles.detail}>
              <Text style={styles.minMax}>{temp_min}ºc / {temp_max}ºc</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
          <Image source={icon.url} style={styles.icon} />
        </View>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: wp(98),
    height: hp(40),
    paddingTop : 12,
    paddingEnd : 12,
    paddingBottom : 12,
    paddingStart : 12,
    borderRadius: 12,
    gap: 12,
    backgroundColor: "#16161F"
  },
  backgroundImg: {
    width: "100%",
    height: hp(37),
    borderRadius: 8,
  },
  info: {
    position: "absolute",
    top: 20,
    left: 20,
    gap: 2,
    width: 295,
    height: 41,
  },
  cityName: {
    color: "#FAFAFA",
    fontSize: 16,
    fontFamily: "Nunito_700Bold"
  },
  date: {
    color: "#FAFAFA",
    fontSize: 12,
    fontFamily: "Nunito_400Regular"
  },
  icon: {
    width: 160,
    height: 160,
    position: "absolute",
    top: 144,
    left: 175
  },
  weather: {
    width: 105,
    height: 116,
    position: "absolute",
    top: 172,
    left: 16,
    padding: 4,
    gap: 8
  },
  temp: {
    fontSize: 48,
    color: "#FFFFFF",
    fontFamily: "Nunito_800ExtraBold"
  },
  detail : {
    width : 100,
    height : 42
  },
  minMax: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Nunito_700Bold"
  },
  description: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Nunito_400Regular",
    lineHeight : 19.6
  }
})