import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="ViewNotes"
            screenOptions={{ headerShown: false, presentation: 'modal' }}
        >
            <Stack.Screen name="ViewNotes" component={ViewNotes} />
            <Stack.Screen name="AddNotes" component={AddNotes} />
        </Stack.Navigator>
    );
}

export default AppNavigator;
