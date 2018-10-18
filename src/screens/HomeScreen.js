import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {TabView, PagerScroll, SceneMap, TabBar} from 'react-native-tab-view'
import HeaderButton from '../components/buttons/HeaderButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {colors} from '../utils/colors'
import First from '../contains/First'
import Second from '../contains/Second'

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '北京',
    headerLeft: <HeaderButton left onPress={() => navigation.navigate('User')}>
      <FontAwesome name="user" size={26} color={colors.greyDark} />
    </HeaderButton>,
    headerRight: (
      <HeaderButton right onPress={() => navigation.navigate('User')}>
        <Ionicons name="ios-notifications-outline" size={26} color={colors.greyDark} />
      </HeaderButton>
    )
  })
  state = {
    index: 0,
    routes: [
      {key: 'first', title: '约车'},
      {key: 'second', title: '接机'},
      {key: 'first1', title: '约车'},
      {key: 'second1', title: '接机'},
      {key: 'first2', title: '约车'},
      {key: 'second2', title: '接机'},
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <TabView 
          navigationState={this.state}
          renderScene={
            SceneMap({
              first: First,
              second: Second,
              first1: First,
              second1: Second,
              first2: First,
              second2: Second
            })
          }
          onIndexChange={index => this.setState({ index })}
          renderPager={props => <PagerScroll {...props} />}
          renderTabBar={props => 
            <TabBar 
            {...props}
            style={{
              backgroundColor: 'transparent'
            }}
            labelStyle={{color: '#444'}}
            indicatorStyle={{backgroundColor: '#444'}}
            />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  }
})

export default HomeScreen
