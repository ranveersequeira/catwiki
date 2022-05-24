import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}><Text style={{ fontSize: 15, fontWeight: '400', color: "white" }}>CatWiki</Text></View>
            <View>
                <Text style={{ color: 'white', fontSize: 12, marginTop: 15 }}> Created by RanveerSequeira - 2022</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'black',
        padding: 30,
        marginTop: 30,
        marginBottom: 0,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    }
})

export default Footer