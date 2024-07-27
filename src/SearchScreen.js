import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { apiKey } from '../config'; // Path to your config file
import { ScrollView, SafeAreaView, View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import TravelCard from '../components/TravelCard';


export default function Search() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.view}>
            <Text style={styles.text}>
                Search screen
            </Text>

            <GooglePlacesAutocomplete
                placeholder="Type a place"
                onPress={(data, details = null) => {
                    console.log(data, details);
                    // Perform any actions on selection if needed
                }}

                query={{
                    key: apiKey,
                    language: 'en', // Optional: Specify language for results
                }}
                fetchDetails={true} // Optional: Fetch detailed information
                onFail={(error) => console.error('Error:', error)} // Optional: Handle failure
                onNotFound={() => console.log('No results found')} // Optional: Handle no results
                listEmptyComponent={() => (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>No results were found</Text>
                    </View>
                )}
            />
            <View style={styles.view}>
                <Text style={styles.subtext}>Suggestions</Text>
                <ScrollView style={styles.scrollview}>
                    <TravelCard />
                </ScrollView>
            </View>
            <FAB
                style={styles.fabdash}
                small
                icon='home'
                onPress={() => navigation.navigate("Dashboard")}
            />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    view: {
        marginTop: 0,

    },
    scrollview: {
        right: 9,
        marginBottom: 15,
    },
    subtext: {
        color: "gray",
        fontSize: 16,
        left: 20,
        marginBottom: 8,
    },
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
        marginTop: 25,
        left: 15,
    },
    text2: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#841584",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: "center",
    },
    view: { flex: 1, padding: 20, backgroundColor: "#BEBOBB" },
    fabdash: {
        backgroundColor: 'lilac',
        position: 'absolute',
        margin: 20,
        left: 0,
        bottom: 10
    },
});
