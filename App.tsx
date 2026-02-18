import React, { useState, useEffect } from "react";
import { View, StatusBar } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {isReady ? <GameScreen /> : <SplashScreen />}
    </View>
  );
}
