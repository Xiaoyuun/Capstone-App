import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FAB } from 'react-native-paper'
import TravelCard from '../components/TravelCard';

export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <Text style={styles.title}>
                Dashboard
            </Text>
            <ScrollView>
                <Text style={styles.subtext}>
                    Where will your travels take you next?
                </Text>
                <View style={styles.margin}>
                    <FAB
                        style={styles.fabSearch}
                        small
                        icon='magnify'
                        label='Search places'
                        onPress={() => navigation.navigate("Search")}
                    />
                    <FAB
                        style={styles.fabPost}
                        small
                        icon='post-outline'
                        label='Post'
                        onPress={() => navigation.navigate("PostPage")}
                    />
                    <FAB
                        style={styles.fabProfile}
                        small
                        icon='face-woman-profile'
                        label='Profile'
                        onPress={() => navigation.navigate("ProfilePage")}
                    />
                    <FAB
                        style={styles.fabActivity}
                        small
                        icon='campfire'
                        label='Add Activity'
                        onPress={() => navigation.navigate("ActivityPage")}
                    />
                </View>
                <Text style={styles.subtext}>
                    Based on your recent travel destinations
                </Text>
                <TravelCard />
            </ScrollView>
        </View >
    )
}


const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input2: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 50,
        left: 20,
    },
    texta2: {
        color: "black",
        fontSize: 18,
    },
    subtext: {
        color: "gray",
        fontSize: 16,
        left: 20,
    },
    margin: {
        marginBottom: 315
    },
    button: {
        backgroundColor: "lightgray",
        padding: 10,
        width: "100%",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: "center",
    },
    profileButton: {
        backgroundColor: "lightgray",
        padding: 10,
        width: "100%",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: "center",
    },
    view: { marginTop: 15, flex: 1, padding: 10, backgroundColor: "#BEBOBB" },
    container: {
        marginHorizontal: 20
    },
    form: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    todo: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    todoText: {
        flex: 1,
        paddingHorizontal: 4
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 4
    },
    fab: {
        backgroundColor: 'pink',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    fabSearch: {
        backgroundColor: 'pink',
        position: 'absolute',
        margin: 20,
        top: 0
    },
    fabPost: {
        backgroundColor: 'pink',
        position: 'absolute',
        margin: 20,
        top: 70
    },
    fabProfile: {
        backgroundColor: 'pink',
        position: 'absolute',
        margin: 20,
        top: 140
    },
    fabActivity: {
        backgroundColor: 'orange',
        position: 'absolute',
        margin: 20,
        top: 210
    },
});
