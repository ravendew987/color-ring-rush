import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {ready ? <GameScreen /> : <SplashScreen />}
    </View>
  );
}
