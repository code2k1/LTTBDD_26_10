import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useRef } from 'react'

export default function Bai3() {
    const planeAnimate = useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 8, justifyContent: 'center' }}>
                <Animated.View
                    style={{
                        transform: [
                            { translateX: planeAnimate },
                        ]
                    }}
                >
                    <Image style={{ width: 150, height: 100 }} source={require("../assets/plane.gif")} />
                </Animated.View>
            </View>
            <View style={{ flex: 2, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => {
                    Animated.timing(planeAnimate, {
                        toValue: 1000,
                        duration: 3000,
                        useNativeDriver: true
                    }).start();
                }} style={{ width: 100, height: 50, borderRadius: 10, alignItems: "center", backgroundColor: "#888", justifyContent: "center" }}><Text>Start</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Animated.timing(planeAnimate, {
                        duration: 0,
                        useNativeDriver: true
                    }).stop();
                }} style={{ width: 100, height: 50, borderRadius: 10, alignItems: "center", backgroundColor: "#888", justifyContent: "center" }}><Text>Stop</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Animated.timing(planeAnimate, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    }).start();
                }} style={{ width: 100, height: 50, borderRadius: 10, alignItems: "center", backgroundColor: "#888", justifyContent: "center" }}><Text>Reset</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})