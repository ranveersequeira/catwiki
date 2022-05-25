import { Text, View, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Star from '../components/star'

export default function Cat({ route, navigation }) {
    const [catInfo, setCatInfo] = useState([])
    const { catName } = route.params;
    console.log(route)
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                `https://api.thecatapi.com/v1/breeds/search?q=${catName}`
            );
            const data = await apiResponse.json();
            console.log(data)
            setCatInfo(data[0]);
        };
        getData();
    }, [catName]);

    console.log(catInfo)
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image source={{ uri: 'https://images.pexels.com/photos/3069334/pexels-photo-3069334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                    style={{ width: 300, height: 300, borderRadius: 20, }}
                />
                <Text style={{ fontSize: 12 }}>PS: No images in the api</Text>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: '600', color: '#4D270C', marginBottom: 10, }}>{catInfo.name}</Text>
                    <Text style={{ fontSize: 15, color: '#4D270C' }}>{catInfo.description}</Text>
                    <View><Text style={styles.key}>Temperanment : <Text style={styles.text}>{catInfo.temperament}</Text></Text></View>
                    <View><Text style={styles.key}>Origin : <Text style={styles.text}>{catInfo.origin}</Text></Text></View>
                    <View><Text style={styles.key}>Life Span : <Text style={styles.text}>{catInfo.life_span} years</Text></Text></View>
                    <View><Text style={styles.key}>Adaptability : <Star num={catInfo.adaptability} /></Text></View>
                    <View><Text style={styles.key}>Affection level : <Star num={catInfo.affection_level} /></Text></View>
                    <View><Text style={styles.key}>Child Friendly : <Star num={catInfo.child_friendly} /></Text></View>
                    <View><Text style={styles.key}>Groomming : <Star num={catInfo.grooming} /></Text></View>
                    <View><Text style={styles.key}>Intelligence : <Star num={catInfo.intelligence} /></Text></View>
                    <View><Text style={styles.key}>Health Issues : <Star num={catInfo.health_issues} /></Text></View>
                    <View><Text style={styles.key}>Social Needs : <Star num={catInfo.social_needs} /></Text></View>
                    <View><Text style={styles.key}>Stranger Friendly : <Star num={catInfo.stranger_friendly} /></Text></View>

                </View>
                <Text style={{ fontSize: 12 }}>PS: No images in the api</Text>
            </View>
            <Footer />
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    key: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '600'
    },
    text: {
        fontSize: 12,
        fontWeight: '400'
    }
})

