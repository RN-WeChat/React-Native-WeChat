import React, { Component } from 'react'
import { View, Text, TabBarIOS } from 'react-native'
import MessageView from './message-view'
import ContactView from './contact-view'
import MeView from './me-view'

const TabBarIOSItem = TabBarIOS.Item

class MainView extends Component {
  constructor() {
    super()
    this.state = {
      tag: 'Message'
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleTabBarSelect(tag) {
    this.setState({
      tag
    })
  }

  handleLogout() {
    const { navigate } = this.props.navigation
    navigate('Home')
  }

  renderView() {
    const { tag } = this.state
    const { navigation } = this.props
    switch (tag) {
      case 'Message':
        return (<MessageView navigation={navigation} />)
      case 'Contact':
        return (<ContactView navigation={navigation} />)
      default:
        return (<MeView navigation={navigation} logOut={this.handleLogout} />)
    }
  }

  render() {
    const TabBarView = this.renderView()
    const { tag } = this.state
    return (
      <View style={{ flex: 1 }}>
        <TabBarIOS barTintColor={'#ddd'} tintColor={'#0c0'}>
          <TabBarIOSItem title={'消息'} selected={tag === 'Message'}
            onPress={this.handleTabBarSelect.bind(this, 'Message')}>
            { TabBarView }
          </TabBarIOSItem>

          <TabBarIOSItem title={'联系人'} selected={tag === 'Contact'}
            onPress={this.handleTabBarSelect.bind(this, 'Contact')}>
            { TabBarView }
          </TabBarIOSItem>

          <TabBarIOSItem title={'我'} selected={tag === 'Me'}
            onPress={this.handleTabBarSelect.bind(this, 'Me')}>
            { TabBarView }
          </TabBarIOSItem>
        </TabBarIOS>
      </View>
    )
  }
}

export default MainView