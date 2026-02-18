import React from "react";
import { View, Dimensions } from "react-native";
import { Canvas, Circle } from "@shopify/react-native-skia";

const { width, height } = Dimensions.get("window");

export default function GameScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Canvas style={{ flex: 1 }}>
        {/* Test Ball */}
        <Circle cx={width / 2} cy={height / 2} r={20} color="cyan" />
      </Canvas>
    </View>
  );
}
