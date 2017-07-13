import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List } from 'antd-mobile'
import Header from './header'

class ContactsView extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header title={"Contact"} />
        <Text>this is contacts view</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({})

export default ContactsView