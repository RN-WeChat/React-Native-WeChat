/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Image,
  Dimensions
} from 'react-native'
import { Button } from 'antd-mobile'
import { StackNavigator } from 'react-navigation'

import MainView from './ios-component/main'

class LoginView extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      passWord: ''
    }
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handlePassWordChange = this.handlePassWordChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleUserNameChange(userName) {
    this.setState({ userName })
  }

  handlePassWordChange(passWord) {
    this.setState({ passWord })
  }

  handleLogin() {
    const { navigate } = this.props.navigation
    navigate('Main')
  }

  render() {
    const _screen = Dimensions.get('screen')
    return (
      <Image source={require('./ln.png')}
        style={{ width: _screen.width, height: _screen.height }}>
        <View style={styles.container}>
          <View>
            <TextInput placeholder={"Enter user name"} style={styles.textInput}
              placeholderTextColor='#fff' maxLength={20}
              onChangeText={this.handleUserNameChange} />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput secureTextEntry={true} keyboardType={"numeric"} style={styles.textInput}
              placeholder={"Enter password"} placeholderTextColor='#fff' maxLength={16}
              onChangeText={this.handlePassWordChange} />
          </View>
          <Button type={'primary'} style={styles.loginBtn} onClick={this.handleLogin}>
            Login
          </Button>
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#fff',
    textAlign: 'center',
    borderRadius: 20,
    display: 'flex',
    borderWidth: 2,
    width: 300,
    height: 40
  },
  loginBtn: {
    borderRadius: 20,
    marginTop: 20,
    width: 250,
    height: 40
  }
})

const Wechat = StackNavigator({
  Home: { screen: LoginView },
  Main: { screen: MainView }, 
},{
  headerMode: 'none'
})

AppRegistry.registerComponent('wechat', () => Wechat)
