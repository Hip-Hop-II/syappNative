import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {colors} from '../utils/colors'
import PropTypes from "prop-types"

export default class ListColumn extends PureComponent {
  static propTypes = {
    link: PropTypes.bool,
    onPress: PropTypes.func
  }
  static Left = props => (
    <View style={styles.leftWrapper}>
      {props.children}
    </View>
  )
  static Right = props => (
    <View style={styles.rightWrapper}>
      {props.children}
    </View>
  )
  render() {
    const { link, onPress} = this.props
    if (link) {
      return (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.wrapper}>
            {this.props.children}
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <View style={styles.wrapper}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    height: 72,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.greenLighter
  },
  leftWrapper: {
    flex: 1,
    justifyContent: "center"
  },
  rightWrapper: {
    justifyContent: "flex-end"
  }
});
