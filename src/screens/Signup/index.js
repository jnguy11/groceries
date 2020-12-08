import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Signup({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Hello, this is the Signup page.
            </Text>
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
});