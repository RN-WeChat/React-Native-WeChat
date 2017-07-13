import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class PublicHeader extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.headerView}>
        <Text style={styles.titleView}>
          { this.props.title || '' }
        </Text>
      </View>
    )
  }

}

styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#000',
    height: 60
  },
  titleView: {
    textAlign: 'center',
    lineHeight: 80,
    color: '#fff',
    height: 60
  }
})

export default PublicHeader