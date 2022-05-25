import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';


const Item = ({ name }) => {
    let navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Cat', { catName: name })}>
            <Text style={styles.title} >{name}</Text>
        </TouchableOpacity>
    )
}


export default function List({ searchPhrase, setCLicked, data, navigation }) {
    const renderItem = ({ item, navigation }) => {
        if (searchPhrase === "") {
            return <Item name={item.name} />;
        }
        if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} />;
        }

    };

    return (
        <ScrollView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    setClicked(false);
                }}
            >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    list__container: {
        margin: 10,
        height: "85%",
        width: "100%",

    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
});
