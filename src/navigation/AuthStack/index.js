import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../screens/Login';
import Signup from '../../screens/Signup';

const Stack = createStackNavigator();

export default function AuthStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Signup"
                component={Signup}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}
