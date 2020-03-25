/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'

export default class FirstPage extends Component {
    constructor(props){
        super(props);
        this.state ={
          selectedTab:'home'
        };
    }
    render() {
        return (
            <View style={FirstStyle.ViewStyle}>

                <Text style={FirstStyle.textStyle}>
                    第二个页面
                </Text>
            </View>
        );
    }
}
const FirstStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
// AppRegistry.registerComponent('myTabBarAndNavigationTest', () => FirstPage);
