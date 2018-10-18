import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'
import TabItem from './TabItem'
import {colors} from '../utils/colors'
import PropTypes from 'prop-types'

const tabbarWidth = 30

export default class TabsList extends PureComponent {
  static propTypes = {
    tabbarStyle: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      currentIndex: 0,
      tabBarLeft: new Animated.Value(0)
    }
    this.tabsArray = []
    this.tabs = React.createRef()
  }

  animateTabbar = (value) => {
    Animated.timing(this.state.tabBarLeft, {
      toValue: value,
      duration: 300
    }).start()
  }
  // 初始化 组件的位置
  itemLayout = (item = {}) => {
    const currentIndex = this.tabsArray.findIndex(el => el.id === item.id)
    if (currentIndex === -1) {
      this.tabsArray.push(item)
    }
    const value = this.tabsArray.find(el => el.id === 1)
    if (value) {
      this.animateTabbar(this.calcTabBarLeft(value))
    }
  }
  // 计算 tabbar left 的值
  calcTabBarLeft = item => {
    const {tabbarStyle} = this.props
    return item.width / 2 + item.x - (tabbarStyle && tabbarStyle.width || tabbarWidth) / 2
  }

  tabItemPress = (item, index, id) => {
    console.log(index)
    if (index !== this.state.currentIndex) {
      this.setState({currentIndex: index})
      this.animateTabbar(this.calcTabBarLeft(this.tabsArray.find(el => el.id === id)))
    }
  }

  render() {
    const {tabs, tabbarStyle, style} = this.props
    const {currentIndex, tabBarLeft} = this.state
    return (
      <View style={[styles.wrapper, style]} ref={this.tabs} >
        {tabs.map((item, index) => (
          <TabItem {...item} key={index} ref="tabItem" 
          onLayout={this.itemLayout}
          activeIndex={currentIndex}
          index={index}
          onPress={(id) => this.tabItemPress(item, index, id)}
          />
        ))}
        <Animated.View style={[styles.tabBar, {left: tabBarLeft}, tabbarStyle]}>

        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 13,
    backgroundColor: colors.WHITE,
    position: 'relative'
  },
  tabBar: {
    position: 'absolute',
    width: tabbarWidth,
    height: 2,
    backgroundColor: colors.redLight,
    borderRadius: 1,
    bottom: 0
  }
})
