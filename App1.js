/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    
    StyleSheet,
    
    View
} from 'react-native';

//导入react-native-tab-navigator
import TabNavigator from 'react-native-tab-navigator'

//导入对应的四个页面
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourPage from './FourPage'

export default class App extends Component {
    constructor(props) {
        super(props);

//先声明一个状态，这个状态为了改变tabbar的
//点击tabbar，触发onPress方法，在里面改变状态，从而达到切换页面的效果

        this.state = {
            selectedTab:'首页'
            //默认选择第一个页面（'消息'默认选择第二个页面）
            //this.setState({selectedTab:'首页'}) 这个用于切换页面
            //selectedTab：'' ->为不同的值，就切换对应的页面
        };
    }

    render() {
        return (

          <View style={HomePageStyle.viewStyle}>

              <TabNavigator>

                  <TabNavigator.Item
                      title='首页'
                      onPress={()=>{this.setState({selectedTab:'首页'})}}
                      selected={this.state.selectedTab === '首页'}
                      titleStyle={HomePageStyle.TBarTitleStyle}
                      selectedTitleStyle={HomePageStyle.TBarTitleSelectStyle}
                  >
                      <FirstPage/>
                  </TabNavigator.Item>

                  <TabNavigator.Item
                      title='消息'
                      onPress={()=>{this.setState({selectedTab:'消息'})}}
                      selected={this.state.selectedTab === '消息'}
                      titleStyle={HomePageStyle.TBarTitleStyle}
                      selectedTitleStyle={HomePageStyle.TBarTitleSelectStyle}
                  >
                      <SecondPage/>
                  </TabNavigator.Item>

                  <TabNavigator.Item
                      title='联系人'
                      onPress={()=>{this.setState({selectedTab:'联系人'})}}
                      selected={this.state.selectedTab === '联系人'}
                      titleStyle={HomePageStyle.TBarTitleStyle}
                      selectedTitleStyle={HomePageStyle.TBarTitleSelectStyle}
                  >
                      <ThirdPage/>
                  </TabNavigator.Item>

                  <TabNavigator.Item
                      title='我的'
                      onPress={()=>{this.setState({selectedTab:'我的'})}}
                      selected={this.state.selectedTab === '我的'}
                      titleStyle={HomePageStyle.TBarTitleStyle}
                      selectedTitleStyle={HomePageStyle.TBarTitleSelectStyle}
                  >
                      <FourPage/>
                  </TabNavigator.Item>


              </TabNavigator>


          </View>

        );
    }
}
var HomePageStyle = StyleSheet.create({

    viewStyle:{
      flex:1,
    },
    TBarTitleStyle:{
        color:'black',
    },
    TBarTitleSelectStyle:{
        color:'red',
    },

});


// AppRegistry.registerComponent('myTabBarAndNavigationTest', () => HomePage);
