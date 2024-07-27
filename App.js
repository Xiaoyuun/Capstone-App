import React from 'react';
import "./firebaseConfig";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/LoginScreen';
import Detail from './src/DetailScreen';
import Dashboard from './src/Dashboard';
import Search from './src/SearchScreen';
import PostPage from './src/PostScreen';
import Profile from './src/ProfileScreen';
import ActivityPage from './src/ActivityScreen';
// import AddPostScreen from './src/AddPostScreen';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostPage"
          component={PostPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActivityPage"
          component={ActivityPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
  }
});
