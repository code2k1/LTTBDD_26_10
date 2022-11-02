import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

export default function Bai1() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true 
    }).start();
  }, [fadeAnim]);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Text>Welcome to Animation React ative</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
