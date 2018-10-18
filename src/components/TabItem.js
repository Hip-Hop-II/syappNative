import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {colors} from '../utils/colors'

export default class TabItem extends PureComponent {
  layout = e => {
    this.props.onLayout({...e.nativeEvent.layout, id: this.props.id})
  }
  itemPress = (event) => {
    const {activeIndex, id, index} = this.props
    if (index !== activeIndex) {
      this.props.onPress(id)
    }
  }
  render() {
    const {title, activeIndex, index} = this.props
    return (
      <TouchableOpacity style={styles.wrapper} onLayout={(e) => this.layout(e)}
      onPress={this.itemPress}
      >
        <Text style={{color: activeIndex === index ? colors.greyDark : colors.grey4}}> {title} </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10
  }
})
