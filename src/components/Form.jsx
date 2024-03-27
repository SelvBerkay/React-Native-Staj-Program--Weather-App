import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherWithCityName } from '../redux/features/weatherSlice';
import cityJson from "../cities/city.list.json"
import { FontAwesome } from '@expo/vector-icons';
import Error from './Error';
export default function Form() {
  const response = cityJson
  const dispatch = useDispatch()
  const weather = useSelector((state) => state.weather)
  const cities = response
  const validationSchema = Yup.object({
    city: Yup.string().required("Please enter a city name"),
  });
  return (
    <Formik
      initialValues={{ city: '' }}
      validationSchema={validationSchema}
      onSubmit={values =>  {
        dispatch(fetchWeatherWithCityName(values.city))
      }
      }
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.form}>
          <Text style={styles.errmsg}>{errors.city && errors.city}</Text>
          <Error msg={weather.errorMsg} />
          <TextInput
            placeholder='Search location'
            placeholderTextColor={"#7F7F98"}
            style={styles.textInput}
            onChangeText={handleChange('city')}
            value={values.city}
          />
          {
            values.city === "" ? <></> : <FlatList
              data={cities.filter(city => city.name.includes(values.city) && city)}
              renderItem={(item, index, seperators) =>
                <TouchableOpacity onPress={() => { values.city = item.item.name; handleSubmit(); }} style={styles.dataItem}>
                  <Text style={styles.dataItemText}>{item.item.name}</Text>
                </TouchableOpacity>}
              keyExtractor={item => item.id}
              style={styles.data}
            />
          }
          {
            weather.isLoading && <ActivityIndicator color={"#8FB2F5"} />
          }
          <TouchableOpacity style={styles.btn} onPress={() => {
            handleSubmit()

          }}><FontAwesome name="search" size={24} color="black" /></TouchableOpacity>
        </View>
      )}
    </Formik>
  )
}



const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignItems: "center",
    gap: 10
  },
  errmsg: {
    fontFamily : "Nunito_400Regular",
    color: "#D24545",
    fontSize : 14
  },
  data: {
    width: "80%",
    maxHeight: 120,
    overflow: "scroll",
    backgroundColor: "#3B3B54",
    borderRadius: 8,
    flexGrow: 0,
  },
  dataItem: {
    width: "100%",
    height: 60,
    paddingTop: 16,
    paddingStart: 20,
    paddingBottom: 16,
    paddingEnd: 20,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#1E1E29",
    justifyContent: "center"
  },
  dataItemText: {
    fontFamily : "Nunito_400Regular",
    fontSize : 16,
    color : "#FAFAFA"
  },
  textInput: {
    width: "80%",
    height: 56,
    backgroundColor: "#1E1E29",
    borderRadius: 8,
    paddingStart: 20,
    paddingEnd: 20,
    fontFamily : "Nunito_400Regular",
    fontSize : 16,
    color : "#FAFAFA"
  },
  btn: {
    width: "80%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3B3B54",
    borderRadius: 8,

  }
});