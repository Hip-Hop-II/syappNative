import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {colors} from '../utils/colors'

export default class Userview extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.avatorWrapper}></View>
        <Text style={styles.username}>首气用户</Text>
        <View style={styles.userTypeWrapper}>
          <Text style={styles.userTypeText}>普通会员</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 26,
    alignSelf: "center",
    alignItems: "center"
  },
  avatorWrapper: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: "#fff"
  },
  username: {
    fontSize: 20,
    color: colors.WHITE,
    marginVertical: 8
  },
  userTypeWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    backgroundColor: colors.greenLight,
    borderRadius: 10
  },
  userTypeText: {
    color: colors.WHITE,
    fontSize: 12
  }
});
