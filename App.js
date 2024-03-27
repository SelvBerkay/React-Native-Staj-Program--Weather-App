import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store from "./src/redux/store"
import Home from './src/components/Home';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from '@expo-google-fonts/nunito';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <ImageBackground source={require("./src/images/Background.png")} resizeMode='cover' style={styles.backgroundImg}>
        <StatusBar hidden /> 
        <Home/>   
      </ImageBackground>
    </Provider>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    width : wp(100),
    height : hp(100),
  },
});
