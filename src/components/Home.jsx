import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Form from './Form'
import WeatherCard from './WeatherCard'
import { useDispatch, useSelector } from 'react-redux'
import Title from './Title'
import { changeisLoaded } from '../redux/features/weatherSlice'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function Home() {
  const isLoaded = useSelector((state) => state.weather.isLoaded)
  const dispatch = useDispatch()
  return (
    <>
      <View style={styles.mainContainer}>
        
        {
          !isLoaded && <Image style={styles.logo} source={require("../images/Logo.png")} />
        }
        {
          !isLoaded && <Title />
        }
        {
          !isLoaded && <Form />
        }
        {
          isLoaded && <TouchableOpacity style={styles.backBtn} onPress={() => dispatch(changeisLoaded())}><Text style={styles.btnText}>Click to return to the search form</Text></TouchableOpacity>
        }
        {
          isLoaded && <WeatherCard />
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    justifyContent : "center", 
    alignItems : "center",
  },
  logo  : {
    position : "absolute",
    top : hp(5)
  },
  backBtn : {
    marginTop : hp(5),
    width : wp(90),
    alignItems : "center",
    justifyContent : "center",
    borderWidth : 1,
    borderColor : "#16161F",
    borderRadius : 8,
    backgroundColor : "#16161F",
    padding : 8,
  },
  btnText : {
    fontFamily : "Nunito_800ExtraBold",
    color : "#FAFAFA"
  }
})