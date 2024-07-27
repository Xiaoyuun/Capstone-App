import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();

    return (

        <View style={styles.view}>
            <Text style={styles.text}>
                Profile Page
            </Text>
            <Text style={styles.text3}>
                Check for the the newest posts here!
            </Text>
            <Button
                style={styles.button}
                title="Go back to Dashboard"
                onPress={() => navigation.navigate("Dashboard")} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 40,
        marginTop: 150,
    },
    text2: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
    },
    text3: {
        color: "black",
        fontSize: 18,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#841584",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: "center",
    },
    view: { flex: 1, padding: 20, backgroundColor: "#BEBOBB" },
});
