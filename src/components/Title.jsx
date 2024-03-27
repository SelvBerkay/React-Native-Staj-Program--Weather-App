import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to <Text style={styles.titleSpan}>TypeWeather</Text></Text>
      <Text style={styles.subTitle}>Choose a location to see the weather forecast</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    gap : 4,
    marginBottom : 5,
  },
  title : {
    fontFamily : "Nunito_700Bold",
    fontSize : 20,
    color : "#FAFAFA"
  },
  titleSpan : {
    color : "#8FB2F5"
  },
  subTitle : {
    fontFamily : "Nunito_400Regular",
    fontSize : 14,
    color : "#BFBFD4"
  }
})  