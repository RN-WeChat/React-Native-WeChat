import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Alert } from 'react-native'
import { List } from 'antd-mobile'
import Header from './header'

const Item = List.Item
const _screen = Dimensions.get('screen')
const MenuList = [['账号安全'], ['隐私', '通用'], ['帮助与反馈', '关于我们']]

class MeView extends Component {
  constructor() {
    super()
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logOut()
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header title={"Me"} />
        <View style={{ marginTop: 30 }}>
          {
            MenuList.map((item, index) => {
              return (
                <List renderHeader={ () => {} } key={index} style={{ marginBottom: 10 }}>
                  { item && Array.isArray(item) && item.map((child, _index) => {
                    return <Item arrow="horizontal" key={_index}>{child}</Item>
                  }) }
                </List>)
            })
          }
        </View>
        <View style={styles.logout}>
          <TouchableHighlight onPress={() => {
            return Alert.alert('WeChat', '退出后不会删除任何历史记录，下次登陆依然可以使用本账号', [
              { text: '确定', onPress: this.handleLogout, style: 'destructive' },
              { text: '取消', onPress: () => {} }
            ]) }}>
            <Text style={styles.logoutText}>退出登陆</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  logout: {
    backgroundColor: '#fff',
    borderColor: '#ffe',
    borderWidth: 1,
    width: _screen.width,
    marginTop: 30,
    height: 40
  },
  logoutText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 40,
    color: '#000'
  }
})

export default MeView