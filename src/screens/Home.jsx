import { Text, View, StyleSheet, ScrollView, Dimensions, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { APPICON } from '../../App'
import Footer from '../components/Footer'
import Main from '../components/Main'


export function Home({ navigation }) {




    return (
        <ScrollView style={styles.mainContainer}>
            <Main navigation={navigation} />
            <View style={styles.secondChild}>
                <View style={styles.titleContainer}>
                    <Text style={styles.breakline}></Text>
                    <Text style={styles.title}>Why should you have a cat?</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>
                        Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels
                    </Text>
                    <Text style={styles.read}>READ MORE  </Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            style={{ height: 120, width: 200, marginBottom: 20, marginRight: 40, borderRadius: 30 }}
                        />
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            style={{ width: 120, height: 180, marginLeft: 80, borderRadius: 30 }}
                        />
                    </View>
                    <View style={{ flex: 3, flexDirection: 'row' }}>
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s' }}
                            style={{ width: 100, height: 250, marginLeft: 100, borderRadius: 30 }}
                        />
                    </View>


                </View>
            </View>
            <Footer />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 30,
        marginBottom: 0,
    },

    breakline: {
        width: 50,
        height: 5,
        // marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#4D270C'
    },
    title: {
        fontSize: 50,
        fontWeight: '700',
        color: '#4D270C'
    },
    infoContainer: {
        marginTop: 40
    },
    info: {
        color: '#4D270C',
        fontSize: 18,
        fontWeight: '400'
    },
    read: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        color: '#4D270C',
        fontWeight: '500'
    },
    secondChild: {
        marginTop: 50,

    },


})

export default Home