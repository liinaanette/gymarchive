import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.weekDay}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    textAlign: "center",
    textAlignVertical: "bottom",
    backgroundColor: "#393e46"
  },
  text: {
    fontSize: 30,
    color: "#eeeeee"
  }
});

export default Header;
