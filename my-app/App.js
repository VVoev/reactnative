import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";

//Register Screens
Navigation.registerComponent("places.AuthScreen", () => AuthScreen);

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: {
      screen: "places.AuthScreen",
      title: "Login"
    }
  }
})

