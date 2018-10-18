import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'
import TabsList from '../../components/TabsList'
import {colors} from '../../utils/colors'
import StrokeItem from '../../components/StrokeItem'

const TABS = [
  {
    title: '专车行程',
    id: 1
  },
  {
    title: '出租车行程',
    id: 2
  },
  {
    title: '短租行程',
    id: 3
  }
]

const SUBTABS = [
  {
    title: '个人行程',
    id: 1
  },
  {
    title: '机构行程',
    id: 2
  }
]

const DATA = [
  {
    id: 1,
    title: '周边游',
    time: '14:30',
    from: '人民大学',
    to: '东城区'
  },
  {
    id: 2,
    title: '周边游',
    time: '14:30',
    from: '人民大学',
    to: '东城区'
  },
]

class StrokeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '我的行程',
    headerStyle: {
      borderBottomWidth: 0
    }
  })
  renderItem = ({item}) => (
    <StrokeItem {...item} />
  )
  keyExtractor=item => String(item.id)
  render() {
    return (
      <View style={styles.wrapper}>
        <TabsList tabs={TABS} />
        <View style={styles.subWrapper}>
          <View style={styles.content}>
            <TabsList tabs={SUBTABS} 
            style={{justifyContent: 'center'}}
            tabbarStyle={{backgroundColor: colors.greyDark, width: 60}} />
            <View style={styles.subHeader}>
              <Text style={styles.subHeaderText}>历史行程</Text>
            </View>
            <FlatList 
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red'
  },
  subWrapper: {
    backgroundColor: colors.greyLight,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 10,
    flex: 1
  },
  content: {
    backgroundColor: colors.WHITE,
    flex: 1,
    shadowColor: colors.greyDark,
    shadowOffset: {
      width: .2,
      height: 0
    },
    shadowOpacity: .4
  },
  subHeader: {
    height: 42,
    justifyContent: 'center',
    paddingLeft: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey4
  },
  subHeaderText: {
    color: colors.grey4
  }
})

export default StrokeScreen
