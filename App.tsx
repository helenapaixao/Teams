
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import {Loading} from '@components/Loading'
import theme from "./src/theme";

import {Players} from "@screens/Players";


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent={true}
      />
      {fontsLoaded ? <Players/> : <Loading/>}
    </ThemeProvider>
  );
}
