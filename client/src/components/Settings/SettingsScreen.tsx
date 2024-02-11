import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import MessageChannel from "../Common/MessageChannel";
import { LinearGradient } from "expo-linear-gradient";
import { MessageType } from "../../utils/types";
import * as Crypto from "expo-crypto";
import { generateName } from "../../utils/scripts";
import { useSettings } from "../../contexts/SettingsContext";
import { useRouter } from "expo-router";

const SettingsScreen = () => {
  const settings = useSettings();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const keyboardBehavior = Platform.OS === "ios" ? "padding" : undefined;


  return (
    <View
      style={{
        backgroundColor:
          settings && settings.theme != "light" ? "#191d20" : "white", // Needs to be changed to be a prop later (new issue?)
      }}
    >
      <KeyboardAvoidingView
        behavior={keyboardBehavior}
        keyboardVerticalOffset={
          Platform.OS === "ios" ? screenHeight * 0.055 : 0
        }
      >
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Settings Screen
            </Text>
          </View>
          <View style={styles.settingsContainer}>
            <Text style={styles.settings_text}> Change Theme: </Text>
              <Text style={styles.settings_text}> Change Username: </Text>
              <Text style={styles.settings_text}> Change Background: </Text>
              <Text style={styles.settings_text}> Change Profile Picture: </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  headerContainer: {
    width: "100%",
    height: Dimensions.get("window").height * 0.05,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  settingsContainer: {
    width: "100%",
    height: Dimensions.get("window").height * 0.25,
    display: "flex",
    justifyContent: "center",
    alignItems: "left",                                                 
    marginTop: 150,
    marginLeft: 50,
  },

    settings_text: {
    fontFamily: "Gilroy-ExtraBold",
    fontSize: 20,
    marginTop: 100,
  },

});

export default SettingsScreen;
