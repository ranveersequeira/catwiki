import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>Nav</Text></View>
                <View><Text>Body</Text></View>
                <View><Text>Footer</Text></View>
            </View>
        )
    }
}

export default Home