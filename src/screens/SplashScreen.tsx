import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>COLOR RING RUSH</Text>
      <Text style={styles.tag}>Play. Tap. Climb.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07070B",
    alignItems: "center",
    justifyContent: "center",
  },
  brand: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: 2,
  },
  tag: {
    marginTop: 10,
    color: "rgba(255,255,255,0.65)",
    fontSize: 13,
    letterSpacing: 1,
  },
});
