import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COLOR RING RUSH</Text>
      <Text style={styles.subtitle}>Ultra Vertical Climb</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0F",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 10,
    color: "#888",
    fontSize: 14,
  },
});
