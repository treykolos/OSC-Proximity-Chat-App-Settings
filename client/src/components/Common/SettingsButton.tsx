import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { router, useRouter } from "expo-router";
import { useFonts } from "expo-font";

export const SettingsButton = () => {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    "Gilroy-ExtraBold": require("../../../assets/fonts/Gilroy-ExtraBold.otf"),
    "Gilroy-Light": require("../../../assets/fonts/Gilroy-Light.otf"),
  });

  const onHandleSubmit = async () => {
         router.push( { pathname: '/settings' } );
  }

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return(
    <TouchableOpacity style={styles.settings_button} onPress={onHandleSubmit}>
      <Text style={styles.button_text}>Settings</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5dbea3",
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").height * 0.05,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  button_text: {
    color: "white",
    fontFamily: "Gilroy-ExtraBold",
    fontSize: Dimensions.get("window").height * 0.03,

  },
  settings_button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    height: Dimensions.get("window").height * 0.05,
    marginTop: Dimensions.get("window").height * 0.005,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  }
});

