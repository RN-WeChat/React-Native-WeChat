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
  Alert,
  Dimensions
} from 'react-native'
import { Button } from 'antd-mobile'
import { StackNavigator, NavigationActions } from 'react-navigation'

import MainView from './ios-component/main'
import ChatView from './ios-component/chat-view'
import config from './config'

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
    const { userName, passWord } = this.state
    const { address, port, loginApi } = config
    const url = `${address}:${port}${loginApi}`
    const data = { name: userName, pass: passWord }
    const { dispatch } = this.props.navigation
    const navigateAction = NavigationActions.navigate({
      routeName: 'Main'
    })
    dispatch(navigateAction)
    // if (!userName || !passWord) {
    //   let msg = ''
    //   if (!userName) {
    //     msg = '用户名不能为空'
    //   } else {
    //     msg = '密码不能为空'
    //   }
    //   Alert.alert('WeChat', msg)
    // } else {
    //   const reg = /^1[358][0-9]{9}$/
    //   if (!reg.test(userName)) {
    //     Alert.alert('WeChat', '非法的手机号码')
    //   } else {
    //     fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     })
    //     .then( (res) => {
    //       return res.json()
    //     }).then( (resJson) => {
    //       if (resJson.code !== 200) {
    //         throw new Error('login faild')
    //       } else {
    //         const { dispatch } = this.props.navigation
    //         const navigateAction = NavigationActions.navigate({
    //           routeName: 'Main'
    //         })
    //         dispatch(navigateAction)
    //       }
    //     }).catch( (error) => {
    //       Alert.alert('WeChat', '用户名或密码错误')
    //     })
    //   }
    // }
  }

  render() {
    const _screen = Dimensions.get('screen')
    return (
      <Image source={{ uri: 'login' }}
        style={{ width: _screen.width, height: _screen.height }}>
        <View style={styles.container}>
          <Image style={styles.header} source={{ uri: 'header' }} />
          <View style={{ marginTop: 50 }}>
            <TextInput placeholder={"请输入11位手机号码"}
              style={styles.textInput} keyboardType={"numeric"}
              placeholderTextColor='#fff' maxLength={11} autoCapitalize={"none"}
              onChangeText={this.handleUserNameChange} />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput secureTextEntry={true} placeholder={"请输入密码"}
              style={styles.textInput} clearTextOnFocus autoCapitalize={"none"}
              placeholderTextColor='#fff' maxLength={16}
              onChangeText={this.handlePassWordChange} />
          </View>
          <Button type={'primary'} style={styles.loginBtn} onClick={this.handleLogin}>
            登陆
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
    justifyContent: 'flex-start',
  },
  textInput: {
    borderColor: '#fff',
    textAlign: 'center',
    borderRadius: 20,
    borderWidth: 1,
    display: 'flex',
    color: '#fff',
    width: 300,
    height: 40
  },
  header: {
    borderRadius: 50,
    marginTop: 100,
    width: 100,
    height: 100
  },
  loginBtn: {
    borderRadius: 20,
    marginTop: 20,
    width: 250,
    height: 40
  }
})

const Wechat = StackNavigator({
  Home: {
    path: 'home',
    screen: LoginView
  },
  Main: {
    path: 'main',
    screen: MainView
  },
  Chat: {
    path: 'chat/:id',
    screen: ChatView
  }
}, {
    headerMode: 'none'
  })

AppRegistry.registerComponent('wechat', () => Wechat)
