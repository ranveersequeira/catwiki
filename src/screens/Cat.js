import { Text, View, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'

export default function Cat({ catName }) {
    const [catInfo, setCatInfo] = useState([])
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                `https://api.thecatapi.com/v1/breeds/search?q=${catName}`
            );
            const data = await apiResponse.json();

            setCatInfo(data);
        };
        getData();
    }, [searchPhrase]);
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Image />
                <View>
                    <Text>{catInfo.name}</Text>
                    <Text>Info</Text>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                    <View><Text>Temperanment</Text></View>
                </View>
            </View>
            <View>
                <Text>Other Photos</Text>
                {/* <FlatList /> */}
            </View>
            <Footer />
        </View>
    )

}
const styles = StyleSheet.create({
    first: {

    }
})

