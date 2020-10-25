import React from 'react';
import { View, Image } from 'react-native';

const WImage = (props) => {
    const state = props.state;

    switch (state) {
        case "Heavy Rain":
            return (
                <View style={{flex: 1,height: 550,width: 270,position: "absolute",top: 85,right: 25}}>
                    <Image style={{height: 490,width: "auto"}} source={require('../assets/image-days/1x/hrain.png')} />
                </View>
            );
            break;
        case "Thunderstorm":
            return (
                <View style={{flex: 1,height: 550,width: 270,position: "absolute",top: 85,right: 25}}>
                    <Image style={{height: 490,width: "auto"}} source={require('../assets/image-days/1x/hrain.png')} />
                </View>
            );
            break;
        case "Light drizzle":
            return (
                <View style={{flex: 1,height: 340,width: 175,position: "absolute",top: 85,right: 25}}>
                    <Image style={{height: 500,width: "auto"}} source={require('../assets/image-days/1x/showers.png')} />
                </View>
            );
            break;
        case "Freezing drizzle":
            return (
                <View style={{flex: 1,height: 340,width: 175,position: "absolute",top: 85,right: 25}}>
                    <Image style={{height: 500,width: "auto"}} source={require('../assets/image-days/1x/showers.png')} />
                </View>
            );
            break;
        case "Heavy Cloud":
            return (
                <View style={{flex: 1,height: 340,width: 285,position: "absolute",top: 155,right: 25}}>
                    <Image style={{height: 355,width: "auto"}} source={require('../assets/image-days/1x/hcloud.png')} />
                </View>
            );
            break;
        case "Light Rain":
            return (
                <View style={{flex: 1,height: 340,width: 175,position: "absolute",top: 85,right: 25}}>
                    <Image style={{height: 500,width: "auto"}} source={require('../assets/image-days/1x/showers.png')} />
                </View>
            );
            break;
        case "Partly cloudy":
            return (
                <View style={{flex: 1,height: 340,width: 285,position: "absolute",top: 155,right: 25}}>
                    <Image style={{height: 355,width: "auto"}} source={require('../assets/image-days/1x/hcloud.png')} />
                </View>
            );
            break;
        case "Mist":
            return (
                <View style={{flex: 1,height: 340,width: 400,position: "absolute",top: 260}}>
                    <Image style={{height: 250,width: "auto"}} source={require('../assets/image-days/1x/sleet.png')} />
                </View>
            );
            break;
        case "Fog":
            return (
                <View style={{flex: 1,height: 340,width: 400,position: "absolute",top: 260}}>
                    <Image style={{height: 250,width: "auto"}} source={require('../assets/image-days/1x/sleet.png')} />
                </View>
            );
            break;
        case "Overcast":
            return (
                <View style={{flex: 1,height: 340,width: 400,position: "absolute",top: 260}}>
                    <Image style={{height: 250,width: "auto"}} source={require('../assets/image-days/1x/sleet.png')} />
                </View>
            );
            break;
        case "Cloudy":
            return (
                <View style={{flex: 1,height: 340,width: 400,position: "absolute",top: 260}}>
                    <Image style={{height: 250,width: "auto"}} source={require('../assets/image-days/1x/sunday.png')} />
                </View>
            );
            break;
        case "Clear":
            return (
                <View style={{flex: 1,height: 340,width: 400,position: "absolute",top: 260}}>
                    <Image style={{height: 250,width: "auto"}} source={require('../assets/image-days/1x/sunday.png')} />
                </View>
            );
            break;
        case "Sunny":
            return (
                <View style={{flex: 1,height: 340,width: 400,position: "absolute",top: 260}}>
                    <Image style={{height: 250,width: "auto"}} source={require('../assets/image-days/1x/sunday.png')} />
                </View>
            );
            break;
        case "Blizzard":
            return (
                <View style={{flex: 1,height: 370,width: 210,position: "absolute",top: 130,right: 25}}>
                    <Image style={{height: 370,width: "auto"}} source={require('../assets/image-days/1x/snow.png')} />
                </View>
            );
            break;
        case "Blowing snow":
            return (
                <View style={{flex: 1,height: 400,width: 170,position: "absolute",top: 85,right: 25}}>
                    <Image style={{height: 438,width: "auto"}} source={require('../assets/image-days/1x/sleet.png')} />
                </View>
            );
            break;
        case "Freezing fog":
            return (
                <View style={{flex: 1,height: 400,width: 170,position: "absolute",top: 85,right: 25}}>
                    <Image style={{height: 438,width: "auto"}} source={require('../assets/image-days/1x/sleet.png')} />
                </View>
            );
            break;
        case "Hail":
            return (
                <View style={{flex: 1,height: 400,width: 170,position: "absolute",top: 85,right: 25}}>
                    <Image style={{height: 438,width: "auto"}} source={require('../assets/image-days/1x/sleet.png')} />
                </View>
            );
            break;
        default:
            return (
                <View style={{flex: 1,height: 340,width: 285,position: "absolute",top: 155,right: 25}}>
                    <Image style={{height: 355,width: "auto"}} source={require('../assets/image-days/1x/hcloud.png')} />
                </View>
            );
            break;
    }
}

export default WImage;