import React from 'react';
import "../firebaseConfig";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FAB } from 'react-native-paper';

export default function Login() {

    const navigation = useNavigation()

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [loggedInUser, onChangeLoggedInUser] = React.useState(null);
    const auth = getAuth();

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                onChangeLoggedInUser(user.email);
                Alert.alert("Signed up successfully!");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(`Errorsignin: ${errorMessage}`);
            });
    };

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                onChangeLoggedInUser(user.email);
                Alert.alert("logged in succesfully!");
                // if we've logged in succesfully, then go to next screen
                // in this case dashbaord, or whatever we change it to
                navigation.navigate("Dashboard");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(`Errorlogin: ${errorMessage}`);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image source={require('../assets/Itomori.png')}
                    style={styles.image} />
                <Text style={styles.overlayText}> Find your next travel destination! </Text>
            </View>
            <TextInput
                placeholder='Email'
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
            ></TextInput>
            <TextInput
                placeholder='Password'
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
            ></TextInput>

            <FAB
                style={styles.fab}
                small
                label='Log in!'
                icon='face-woman-shimmer'
                onPress={() => login()}
            />
            <Text style={styles.text}> Don't have an account? </Text>
            <FAB
                style={styles.fab}
                small
                label='Sign Up'
                icon='plus-circle'
                onPress={() => createUser()}
            />
            <StatusBar style="auto" />
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
        padding: 10,
        borderRadius: 15,
        borderColor: 'gray',
    },
    fab: {
        marginTop: 10,
    },
    text: {
        marginTop: 15,
        color: 'gray',
    },
    container2: {
        marginBottom: 23,
    },
    image: {
        width: 300,
        height: 200,
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