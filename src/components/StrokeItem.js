import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../utils/colors'

const StrokeItem = ({ title, status, time, from, to }) => {
  return (
    <TouchableOpacity>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.leftWrapper}>
            <Text style={styles.leftWrapperText}>{title}</Text>
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>单程</Text>
            </View>
          </View>
          <View style={styles.rightWrapper}>
            <Text style={{ marginRight: 6 }}>已完成</Text>
            <MaterialIcons name="keyboard-arrow-right" size={25} color={colors.grey4} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.item}>
            <Ionicons name="ios-timer-outline" size={14} />
            <Text style={styles.itemText}>{time}</Text>
          </View>
          <View style={styles.item}>
            <Ionicons name="ios-pin-outline" size={14} />
            <Text style={styles.itemText}>{from}</Text>
          </View>
          <View style={styles.item}>
            <Ionicons name="ios-pin-outline" size={14} />
            <Text style={styles.itemText}>{to}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey4
  },
  item: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center'
  },
  itemText: {
    flex: 1,
    paddingLeft: 11,
    color: colors.GRAY3
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  leftWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftWrapperText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.greyDark
  },
  buttonWrapper: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blueLight,
    borderRadius: 2,
    backgroundColor: 'rgba(4,187,191,0.08)',
    marginLeft: 8
  },
  buttonText: {
    color: colors.blueLight
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default StrokeItem
