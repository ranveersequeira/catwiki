import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default function Star({ num }) {
    let array = Array(num).fill("1")

    console.log(array[num - 1], "array")
    return (
        <View style={{ flex: 1, flexDirection: 'row', }}>
            {array.length > 0 && array.map((item) =>
                <View style={styles.linebreak} key={Math.random()}></View>
            )}
        </View>
    )

}

const styles = StyleSheet.create({
    linebreak: {
        borderRadius: 20,
        width: 40,
        height: 10,
        backgroundColor: '#4D270C',
        marginRight: 10,
    }
})

