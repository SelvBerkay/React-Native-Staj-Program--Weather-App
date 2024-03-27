import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const APIKEY = process.env.EXPO_PUBLIC_OPENWEATHERMAP_API_KEY



export const fetchWeatherWithCityName = createAsyncThunk("fetchWeatherWithCityName", async (cityName) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKEY}&units=metric`)
  return response.data
})


const initialState = {
  name : "",
  country : "",
  data: [],
  hourlyData : null,
  nextDaysData : null,
  isLoading: false,
  isError: false,
  errorMsg: "",
  isLoaded: false,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeisLoaded : (state) => {
      state.isLoaded = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherWithCityName.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isLoaded = false
    })
    builder.addCase(fetchWeatherWithCityName.fulfilled, (state, action) => {
      state.name = action.payload.city.name 
      state.country = action.payload.city.country 
      state.data = action.payload.list[0]
      state.nextDaysData = action.payload.list
      state.hourlyData = action.payload.list
      state.isLoading = false
      state.isLoaded = true
      state.isError = false
    })
    builder.addCase(fetchWeatherWithCityName.rejected, (state, action) => {
      state.isError = true
      state.isLoading = false
      if (action.error.message === "Request failed with status code 404") {
        state.errorMsg = "You have entered an incorrect city name. Please try again."
      } else if (action.error.message === "Request failed with status code 429") {
        state.errorMsg = "You've made too many requests recently. Please wait and try your request again later."
      } else {
        state.errorMsg = "There was a problem receiving the data. Please try again."
      }
    })    
  }
})
export const { changeisLoaded } = weatherSlice.actions
export default weatherSlice.reducer