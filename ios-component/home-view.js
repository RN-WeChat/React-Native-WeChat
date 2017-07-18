import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List, SwipeAction } from 'antd-mobile'
import Header from './header'

const MessageList = [
  { name: '小明', time: '10:58', message: 'hello😉' }, 
  { name: '小花', time: '12:54', message: '今晚去哪吃饭？😜😜' },
  { name: '路人甲', time: '11:37', message: '你好，我是路人甲😊' },
]
const Item = List.Item
const Brief = Item.Brief

Array.prototype.remove = function(item) {
  let set = new Set(this)
  set.delete(item)
  return Array.from(set)
}

class HomeView extends Component {
  constructor() {
    super()
    this.state = {
      MessageList: MessageList
    }
  }

  handleRemoveItem(index) {
    let { MessageList } = this.state
    const item = MessageList[index]
    MessageList = MessageList.remove(item)
    this.setState({ MessageList })
  }

  renderItem(item, key) {
    const rightMenu = [
      { text: 'Cancel', onPress: () => {}, style: { backgroundColor: '#ddd', color: 'white' } },
      { text: 'Delete', onPress: this.handleRemoveItem.bind(this, key),
        style: { backgroundColor: '#F4333C', color: 'white' } }
    ]
    return (
      <SwipeAction autoClose right={rightMenu} key={key}>
        <Item extra={item.time} align="top" thumb="../header.png" style={{ height: 45 }} >
          <Text>{ item.name }</Text>
          <Brief style={{ fontSize: 10 }}>
            { `${item.name}: ${item.message}` }
          </Brief>
        </Item>
      </SwipeAction>
    )
  }

  render() {
    const { MessageList } = this.state
    return (
      <View style={{ flex: 1 }}>
        <Header title={"Message"} />
        <View>
          <List>
            {
              MessageList.map( (item, index) => {
                return (
                  this.renderItem(item, index)
                )
              })
            }
          </List>
        </View>
      </View>
    )
  }

}

export default HomeView