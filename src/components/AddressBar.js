import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {colors} from '../utils/colors'

export default class AddressBar extends PureComponent {
  state = {
    city: ''
  }
  render() {
    const {address} = this.props
    return (
      <View style={styles.wrapper}>
        <View style={{alignItems: 'center'}}>
          <View style={{width: 16,
          height: 16, alignItems: 'center'}}>

          <Ionicons  name="ios-disc" size={16} color={colors.green2} />
          </View>
          <View style={styles.line}>
            
          </View>
          <View style={{width: 16,
          height: 16, alignItems: 'center'}}>

          <Ionicons  name="ios-pin" size={16} color={colors.red2} />
          </View>
        </View>
        <View style={styles.rightWrapper}>
          <View style={styles.inputWrapper}>
            {address[0] && <TextInput
            style={styles.input}
              placeholder="请输入内容"
              value={address[0].city}
              selectionColor={colors.red2}
              onChangeText={this.onChangeText}
            />}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
            style={styles.input}
            selectionColor={colors.red2}
              placeholder="请输入内容"
            />
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 100,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    height: 32,
    width: StyleSheet.hairlineWidth,
    backgroundColor: colors.grey4,
    marginVertical: 2
  },
  rightWrapper: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center'
  },
  inputWrapper: {
    height: 50,
  },
  input: {
    height: '100%',
    fontSize: 16,
    alignContent: 'center',
    color: colors.grey4
  }
})
