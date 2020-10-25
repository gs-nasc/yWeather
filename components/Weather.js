import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';

import * as Location from 'expo-location';

import WImage from './WeatherImage';

import { useFonts } from '@expo-google-fonts/quicksand';
import { NunitoSans_400Regular, NunitoSans_300Light } from '@expo-google-fonts/nunito-sans';

const Weather = () => {
    let [loadFonts] = useFonts({ NunitoSans_400Regular, NunitoSans_300Light });

    const [errorMsg, setErrormsg] = useState(null);

    const [temperature, setTemperature] = useState(null);
    const [stateName, setStateName] = useState(null);

    const [date, setDate] = useState(null);

    const [loading, setLoading] = useState(null);

    async function reloadData(latitude, longitude) {
        fetch(`https://api.weatherapi.com/v1/current.json?key=0e753993ba5e44c7b9564428202310&q=${latitude},${longitude}`)
            .then(response => response.json())
            .then(responseJson => {
                const mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const dlist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

                var month = new Date().getMonth();
                var day_week = new Date().getDay();
                var day = new Date().getDate();

                setTemperature(Math.floor(responseJson.current.temp_c));
                setStateName('Light Rain');

                setDate(`${dlist[day_week]}, ${mlist[month].substring(0, 3)} ${day} `);

                setLoading(true)
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestPermissionsAsync();
            if (status !== "granted") {
                setErrormsg('Permission to access location was denied');
            }

            const { latitude, longitude } = (await Location.getCurrentPositionAsync()).coords;
            
            reloadData(latitude, longitude)
            setInterval(() => {
                console.log('setinterval for 5 minute start')
                reloadData(latitude, longitude)
                }, 300000);
        })();
    }, []);
    ;
    if (!loadFonts || errorMsg || !loading) {
        return (<AppLoading />)
    } else {
        return (
            <View style={styles.container}>
                <WImage state={stateName} />
                <View style={styles.bottom}>
                    <Text style={styles.temperature}>{temperature}º</Text>
                    <Text style={styles.dayStatus}>{stateName}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f5fa",
        alignItems: 'center',
        justifyContent: 'center'
    }, bottom: {
        flex: 1,
        position: "absolute",
        bottom: 60,
        left: 40
    }, temperature: {
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 70,
        marginBottom: 10,
        color: "#434343"
    },
    dayStatus: {
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 22,
        letterSpacing: 3,
        marginBottom: 3,
        color: "#434343"
    },
    date: {
        fontFamily: 'NunitoSans_300Light',
        fontSize: 14,
        color: "#434343"
    },
    image: {
        height: 310,
        width: "auto",
        top: 0
    },
});

export default Weather;