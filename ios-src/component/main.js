import React, { Component } from 'react'
import { View, Text, TabBarIOS } from 'react-native'
import HomeView from './home-view'
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
    switch (tag) {
      case 'Message':
        return (<HomeView />)
      case 'Contact':
        return (<ContactView />)
      default:
        return (<MeView logOut={this.handleLogout} />)
    }
  }

  render() {
    const TabBarView = this.renderView()
    const { tag } = this.state
    return (
      <View style={{ flex: 1 }}>
        <TabBarIOS barTintColor={'#333'} tintColor={'#fff'}>
          <TabBarIOSItem title={'Message'}
            selected={tag === 'Message'}
            onPress={this.handleTabBarSelect.bind(this, 'Message')}>
            { TabBarView }
          </TabBarIOSItem>

          <TabBarIOSItem title={'Contact'}
            selected={tag === 'Contact'}
            onPress={this.handleTabBarSelect.bind(this, 'Contact')}>
            { TabBarView }
          </TabBarIOSItem>

          <TabBarIOSItem title={'Me'}
            selected={tag === 'Me'}
            onPress={this.handleTabBarSelect.bind(this, 'Me')}>
            { TabBarView }
          </TabBarIOSItem>
        </TabBarIOS>
      </View>
    )
  }
}

export default MainView