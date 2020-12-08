import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Navigation Stacks
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import SettingsStack from './navigation/SettingsStack';

const Stack = createStackNavigator();

function App() {

    const loggedIn = true;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!loggedIn ? (
                    <Stack.Screen 
                        name="AuthStack"
                        component={AuthStack}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="MainStack"
                            component={MainStack}
                        />
                        <Stack.Screen
                            name="SettingsStack"
                            component={SettingsStack}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default registerRootComponent(App);