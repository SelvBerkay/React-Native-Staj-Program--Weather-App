import rainDay from "./rainDay.jpg"
import rainNight from "./rainNight.jpg"
import clearDay from "./clearDay.jpg"
import clearNight from "./clearNight.jpg"
import cloudyDay from "./cloudyDay.jpg"
import cloudyNight from "./cloudyNight.jpg"
import stormDay from "./stormDay.jpg"
import stormNight from "./stormNight.jpg"
import fewCloudsDay from "./fewCloudsDay.jpg"
import fewCloudsNight from "./fewCloudsNight.jpg"

const dayBG = [
  {name : "clear sky", url : clearDay},
  {name : "few clouds", url : fewCloudsDay},
  {name : "scattered clouds", url : cloudyDay},
  {name : "broken clouds", url : cloudyDay},
  {name : "shower rain", url : rainDay},
  {name : "rain", url : rainDay},
  {name : "thunderstorm", url : stormDay},
  {name : "snow", url : rainDay},
  {name : "light rain", url : rainDay},
  {name : "moderate rain", url : rainDay},
  {name : "heavy intensity rain", url : rainDay},
  {name : "very heavy rain", url : rainDay},
  {name : "extreme rain", url : rainDay},
  {name : "freezing rain", url : rainDay},
  {name : "light intensity shower rain", url : rainDay},
  {name : "shower rain", url : rainDay},
  {name : "heavy intensity shower rain", url : rainDay},
  {name : "ragged shower rain", url : rainDay},
  {name : "thunderstorm with light rain", url : stormDay},
  {name : "thunderstorm with rain	", url : stormDay},
  {name : "thunderstorm with heavy rain", url : stormDay},
  {name : "light thunderstorm", url : stormDay},
  {name : "heavy thunderstorm", url : stormDay},
  {name : "ragged thunderstorm", url : stormDay},
  {name : "thunderstorm with light drizzle", url : stormDay},
  {name : "thunderstorm with drizzle", url : stormDay},
  {name : "thunderstorm with heavy drizzle", url : stormDay},
  {name : "light intensity drizzle", url : rainDay},
  {name : "drizzle", url : rainDay},
  {name : "heavy intensity drizzle", url : rainDay},
  {name : "light intensity drizzle rain", url : rainDay},
  {name : "drizzle rain", url : rainDay},
  {name : "heavy intensity drizzle rain", url : rainDay},
  {name : "shower rain and drizzle", url : rainDay},
  {name : "heavy shower rain and drizzle", url : rainDay},
  {name : "shower drizzle", url : rainDay},
  {name : "light snow", url : rainDay},
  {name : "heavy snow", url : rainDay},
  {name : "sleet", url : rainDay},
  {name : "light shower sleet", url : rainDay},
  {name : "shower sleet", url : rainDay},
  {name : "light rain and snow", url : rainDay},
  {name : "rain and snow", url : rainDay},
  {name : "light shower snow", url : rainDay},
  {name : "shower snow", url : rainDay},
  {name : "heavy shower snow", url : rainDay},
  {name : "mist", url : stormDay},
  {name : "smoke", url : stormDay},
  {name : "haze", url : stormDay},
  {name : "sand/dust whirls", url : stormDay},
  {name : "fog", url : stormDay},
  {name : "sand", url : stormDay},
  {name : "volcanic ash", url : stormDay},
  {name : "dust", url : stormDay},
  {name : "squalls", url : stormDay},
  {name : "tornado", url : stormDay},
  {name : "overcast clouds", url : cloudyDay},
]

const nightBG = [
  {name : "clear sky", url : clearNight},
  {name : "few clouds", url : fewCloudsNight},
  {name : "scattered clouds", url : cloudyNight},
  {name : "broken clouds", url : cloudyNight},
  {name : "shower rain", url : rainNight},
  {name : "rain", url : rainNight},
  {name : "thunderstorm", url : stormNight},
  {name : "snow", url : rainNight},
  {name : "light rain", url : rainNight},
  {name : "moderate rain", url : rainNight},
  {name : "heavy intensity rain", url : rainNight},
  {name : "very heavy rain", url : rainNight},
  {name : "extreme rain", url : rainNight},
  {name : "freezing rain", url : rainNight},
  {name : "light intensity shower rain", url : rainNight},
  {name : "shower rain", url : rainNight},
  {name : "heavy intensity shower rain", url : rainNight},
  {name : "ragged shower rain", url : rainNight},
  {name : "thunderstorm with light rain", url : stormNight},
  {name : "thunderstorm with rain	", url : stormNight},
  {name : "thunderstorm with heavy rain", url : stormNight},
  {name : "light thunderstorm", url : stormNight},
  {name : "heavy thunderstorm", url : stormNight},
  {name : "ragged thunderstorm", url : stormNight},
  {name : "thunderstorm with light drizzle", url : stormNight},
  {name : "thunderstorm with drizzle", url : stormNight},
  {name : "thunderstorm with heavy drizzle", url : stormNight},
  {name : "light intensity drizzle", url : rainNight},
  {name : "drizzle", url : rainNight},
  {name : "heavy intensity drizzle", url : rainNight},
  {name : "light intensity drizzle rain", url : rainNight},
  {name : "drizzle rain", url : rainNight},
  {name : "heavy intensity drizzle rain", url : rainNight},
  {name : "shower rain and drizzle", url : rainNight},
  {name : "heavy shower rain and drizzle", url : rainNight},
  {name : "shower drizzle", url : rainNight},
  {name : "light snow", url : rainNight},
  {name : "heavy snow", url : rainNight},
  {name : "sleet", url : rainNight},
  {name : "light shower sleet", url : rainNight},
  {name : "shower sleet", url : rainNight},
  {name : "light rain and snow", url : rainNight},
  {name : "rain and snow", url : rainNight},
  {name : "light shower snow", url : rainNight},
  {name : "shower snow", url : rainNight},
  {name : "heavy shower snow", url : rainNight},
  {name : "mist", url : stormNight},
  {name : "smoke", url : stormNight},
  {name : "haze", url : stormNight},
  {name : "sand/dust whirls", url : stormNight},
  {name : "fog", url : stormNight},
  {name : "sand", url : stormNight},
  {name : "volcanic ash", url : stormNight},
  {name : "dust", url : stormNight},
  {name : "squalls", url : stormNight},
  {name : "tornado", url : stormNight},
  {name : "overcast clouds", url : cloudyNight},
]

export {dayBG, nightBG}
