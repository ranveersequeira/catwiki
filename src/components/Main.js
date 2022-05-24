import { Text, View, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import List from '../List';


const srcImg = { uri: 'https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
export default function Main({ navigation }) {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [catsData, setCatsData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                `https://api.thecatapi.com/v1/breeds/search?q=${searchPhrase}`
            );
            const data = await apiResponse.json();
            console.log(data)
            setCatsData(data);
        };
        getData();
    }, [searchPhrase]);

    return (
        <View style={styles.firstChild}>
            <ImageBackground
                source={srcImg}
                imageStyle={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, overflow: 'hidden' }}
                resizeMode="cover" style={{ width: '100%', height: 200 }}
            >
                <View style={styles.topheader}>
                    <Text style={{ marginLeft: 10, fontSize: 20, color: 'white', }}>CatWiki</Text>
                    <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 15, color: 'white', }}>Get to know more about{"\n"} your cat breed</Text>
                </View>
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                />
            </ImageBackground >
            {!clicked &&
                <View style={styles.headline}>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>Most Searched Breeds</Text>
                    <View style={{ width: 60, height: 7, backgroundColor: '#4D270C', borderRadius: 30 }}></View>
                </View>}

            {!clicked &&
                <Text style={{ fontSize: 30, fontWeight: '700', marginBottom: 20, marginTop: 20, padding: 10, marginLeft: 10, }}>66+ Breeds For you{"\n"} to discover</Text>}
            {!clicked &&
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cat', { catName: 'Bengal' })}>
                        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2021/10/13/11/50/cat-6706393__340.jpg' }}
                            style={{ width: 150, height: 200, borderRadius: 30 }} />
                        <Text style={styles.name}>Bengal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cat', { catName: 'Savannah' })}>
                        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__340.jpg' }}
                            style={{ width: 150, height: 200, borderRadius: 30 }} />
                        <Text style={styles.name}>Savannah</Text>
                    </TouchableOpacity>
                </View>}
            {!clicked &&
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('Cat', { catName: 'Norwwgian Forest Cat' })}>
                        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462__340.jpg' }}
                            style={{ width: 150, height: 200, borderRadius: 30 }} />
                        <Text style={styles.name}>Norwwgian {"\n"}Forest Cat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cat', { catName: 'Selkirk Rex' })}>
                        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400__340.jpg' }}
                            style={{ width: 150, height: 200, borderRadius: 30 }} />
                        <Text style={styles.name}>Selkirk Rex</Text>
                    </TouchableOpacity>
                </View>}
            {
                searchPhrase !== "" &&
                <List
                    searchPhrase={searchPhrase}
                    data={catsData}
                    setClicked={setClicked}
                    navigation={navigation}

                />
            }
        </View >

    )

}

const styles = StyleSheet.create({
    firstChild: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: "#E3E1DC",
        borderRadius: 40,
        height: Dimensions.get('window').height,
    },
    topheader: {
        paddingTop: 10,
        marginTop: 20,
        marginBottom: 10
    },
    image: {
        borderRadius: 40,
        width: '100%',
        // justifyContent: "center"
    },
    name: {
        fontWeight: '500',
        fontSize: 20,
        padding: 5,
    },
    headline: {
        padding: 20
    }
})