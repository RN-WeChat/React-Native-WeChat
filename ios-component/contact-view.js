import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List } from 'antd-mobile'
import Header from './header'

const Item = List.Item
const ContactList = [
  { header: 'T', list: ['Test', '唐'] },
  { header: 'X', list: ['小明', '晓华'] },
  { header: 'Y', list: ['杨'] }
]

class ContactsView extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header title={"Contact"} />
        <View>
          {
            ContactList.map((item, index) => {
              return (
                <List key={index} renderHeader={ () => item.header }>
                  {
                    item.list.map((child, _index) => {
                      return (
                        <Item arrow="horizontal" key={_index}>
                          { child }
                        </Item>
                      )
                    })
                  }
                </List>
              )
            })
          }
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({})

export default ContactsView