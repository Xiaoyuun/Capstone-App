import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

// import { Provider } from 'react-redux';
// import store from '../redux/store';
// import Counter from '../components/Counter';
// import { POSTS } from '../data/posts';
import store from '../posts/reducer/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import AppNavigator from '../posts/navigation/Index';

export default function PostPage() {
    const navigation = useNavigation();

    return (
        <StoreProvider store={store}>
            <PaperProvider>
                <AppNavigator />
            </PaperProvider>
        </StoreProvider>

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
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        borderColor: 'gray',
        backgroundColor: '#84563c'
    },
    view: { flex: 1, padding: 20, backgroundColor: "#BEBOBB" },
    posts: {
        height: '100%',
        backgroundColor: 'lilac',
        alignItems: 'center',
    },
    post: {
        height: 60,
        width: '90%',
        marginTop: 10,
        borderRadius: 10,
        flexDirections: 'row',
        backgroundColor: 'white',
    },
});
