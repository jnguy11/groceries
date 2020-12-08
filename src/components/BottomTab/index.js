import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function BottomTab({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
  
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    const onPress = (route, isFocused) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    };

    const onLongPress = (route) => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
    };

    const tabItems = state.routes
    .map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
            options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        return (
            <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={() => {onPress(route)}}
                onLongPress={ () => {onLongPress(route)}}
                style={{ flex: 1 }}
            >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
            </Text>
            </TouchableOpacity>
        );
    })

    return (
        <View style={styles.tabContainer}>
            {tabItems}
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        height: 60,
        alignItems: "center",
    },
})