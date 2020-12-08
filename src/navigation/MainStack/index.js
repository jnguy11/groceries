import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from '../../components/BottomTab';

// Screen Stacks
import Home from '../../screens/Home';
import SecondScreen from '../../screens/SecondScreen';

const Tab = createBottomTabNavigator();

export default function MainStack({ navigation }) {
    return (
        <Tab.Navigator
            tabBar={props => <BottomTab {...props} />}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="SecondScreen"
                component={SecondScreen}
            />
        </Tab.Navigator>
    )
}
