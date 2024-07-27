import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const TravelCard = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={require('../assets/Itomori.png')}
                    style={styles.image} />
                <Text style={styles.overlayText}> Itomori, Japan </Text>
            </View>

            <View style={styles.container}>
                <Image source={require('../assets/mond.png')}
                    style={styles.image} />
                <Text style={styles.overlayText}> Mondstadt </Text>
            </View>
            <View style={styles.container}>
                <Image source={require('../assets/tokyo.png')}
                    style={styles.image} />
                <Text style={styles.overlayText}> Tokyo, Japan </Text>
            </View>
            <View style={styles.container}>
                <Image source={require('../assets/sumeru.png')}
                    style={styles.image} />
                <Text style={styles.overlayText}> Sumeru </Text>
            </View>

            <View style={styles.container}>
                <Image source={require('../assets/belobog.png')}
                    style={styles.image} />
                <Text style={styles.overlayText}> Belobog</Text>

            </View>
            <View style={styles.container}>
                <Image source={require('../assets/fontaine.png')}
                    style={styles.image} />
                <Text style={styles.overlayText}> Fontaine </Text>
            </View>

        </View>


    );
};

export default TravelCard;

const styles = StyleSheet.create({
    container: {
        top: 20,
        left: 18,
        marginBottom: 23,
    },
    image: {
        width: 335,
        height: 150,
        borderRadius: 20,
    },
    overlayText: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 5,
    },
});
