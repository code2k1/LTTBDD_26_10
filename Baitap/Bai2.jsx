import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { useRef } from 'react'

export default function Bai2() {
    const leftrightAnim = useRef(new Animated.Value(0)).current;
    const topbottommAnim = useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View
                    style={{
                        transform: [
                            { translateX: leftrightAnim },
                            { translateY: topbottommAnim },
                        ]
                    }}
                >
                    <View><Text style={{ width: 50, height: 50, backgroundColor: "red" }}></Text></View>
                </Animated.View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity onPress={() => {
                        Animated.timing(topbottommAnim, {
                            toValue: -50,
                            duration: 1000,
                            useNativeDriver: true
                        }).start();
                    }} style={{ width: 50, height: 50, backgroundColor: "#888", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ textAlign: "center" }}>Top</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {
                        Animated.timing(leftrightAnim, {
                            toValue: -50,
                            duration: 1000,
                            useNativeDriver: true
                        }).start();
                    }} style={{ width: 80, height: 30, backgroundColor: "#888", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ textAlign: "center", marginRight: 10 }}>Left</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Animated.timing(leftrightAnim, {
                            toValue: 50,
                            duration: 1000,
                            useNativeDriver: true
                        }).start();
                    }} style={{ width: 80, height: 30, backgroundColor: "#888", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ textAlign: "center", marginLeft: 10 }}>Right</Text></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        Animated.timing(topbottommAnim, {
                            toValue: 50,
                            duration: 1000,
                            useNativeDriver: true
                        }).start();
                    }} style={{ width: 50, height: 50, backgroundColor: "#888", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ textAlign: "center" }}>Bottom</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})