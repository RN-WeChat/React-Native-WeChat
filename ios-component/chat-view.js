import React, { Component } from 'react'
import { View, NativeModules } from 'react-native'
import { GiftedChat, Actions, Bubble } from 'react-native-gifted-chat'
import SocketIo from '../socketIO'
import config from '../config'
import Header from './header'
const robotId = 2
const myId = 1

export default class extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        {
          _id: 1,
          text: 'Hello,我是小微',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }
      ]
    }
  }

  componentWillMount() {
    this.socket = new SocketIo('http://localhost:7000')
    this.socket.connect(() => {
      console.log("我链接了")
    })
  }

  componentWillUnmount() {
    this.socket.disConnect(() => {
      console.log("断开链接了")
    })
  }

  sendToRobot(text) {
    const { address, port, messageApi } = config
    const data = { message: text }
    const url = `${address}:${port}${messageApi}`
    const template = {
      _id: 2,
      text: null,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: 'https://facebook.github.io/react/img/logo_og.png'
      }
    }
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => {
          return res.json()
        })
        .then((result) => {
          template.text = result.text
          resolve(template)
        })
        .catch((error) => {
          template.text = '啊哦，失败了'
          reject(template)
        })
    })
  }

  onSend(messages = []) {
    const { text } = messages[0]
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    this.sendToRobot(text).then((successMessage) => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, successMessage),
      }))
    }).catch((errorMessage) => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, errorMessage),
      }))
    })
  }

  render() {
    const { navigation = { state: { params: {} } } } = this.props
    const { title = '' } = navigation.state.params
    const { messages = [] } = this.state
    return (
      <View style={{ flex: 1 }}>
        <Header title={title} />
        <GiftedChat messages={messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1, name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png'
          }} />
      </View>
    )
  }

}