import React, { PureComponent } from 'react'
import { TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

const MARGIN_NUM = 8

export default class HeaderButton extends PureComponent {
  static propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    onPress: PropTypes.func,
    activeOpacity: PropTypes.number,
    style: PropTypes.object
  }
  render() {
    const {left, right, onPress, activeOpacity, style} = this.props
    let _style = {}
    if (left) {
      _style.marginLeft = MARGIN_NUM
    } else if (right) {
      _style.marginRight = MARGIN_NUM
    }
    return (
      <TouchableOpacity activeOpacity={activeOpacity || .6} onPress={onPress}
      style={[style, _style]}
      >
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
