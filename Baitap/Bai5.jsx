import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useRef } from 'react'

export default function Bai5() {
    const box1_show = useRef(new Animated.Value(0)).current;
    const box1_run = useRef(new Animated.Value(0)).current;
    const box2_show = useRef(new Animated.Value(0)).current;
    const box2_run = useRef(new Animated.Value(0)).current;
    const box3_show = useRef(new Animated.Value(0)).current;
    const box3_run = useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.sequence([
            Animated.timing(box1_show, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(box1_run, {

                toValue: 310,
                duration: 3000,
                useNativeDriver: true
            }),
            Animated.timing(box1_show, {
                toValue: 0,

                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(box2_show, {

                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(box2_run, {

                toValue: 200,
                duration: 3000,
                useNativeDriver: true
            }),
            Animated.timing(box2_show, {

                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(box3_show, {

                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(box3_run, {
                // delay: 11000,
                toValue: -310,
                duration: 3000,
                useNativeDriver: true
            }),
        ]).start()
    }, [box1_show])
    return (
        <View style={{ flex: 1 }}>
            <Animated.View
                style={{
                    opacity: box1_show,
                    transform: [
                        { translateX: box1_run },
                    ]
                }}
            >
                <View><Text style={{ width: 100, height: 100, backgroundColor: "red" }}></Text></View>
            </Animated.View>
            <Animated.View
                style={{
                    opacity: box2_show,
                    transform: [
                        { translateY: box2_run },
                    ]
                }}
            >
                <View style={{ transform: [{ translateX: 310 }, { translateY: -100 }] }}><Text style={{ width: 100, height: 100, backgroundColor: "yellow" }}></Text></View>
            </Animated.View>
            <Animated.View
                style={{
                    opacity: box3_show,
                    transform: [
                        { translateX: box3_run },
                    ]
                }}
            >
                <View style={{ transform: [{ translateX: 310 }] }}><Text style={{ width: 100, height: 100, backgroundColor: "green" }}></Text></View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({})