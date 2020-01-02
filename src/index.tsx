import React from 'react'
import { StyleSheet, View } from 'react-native'
import First from './components/First'

export default () => (
    <View style={styles.container}>
        <First />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});