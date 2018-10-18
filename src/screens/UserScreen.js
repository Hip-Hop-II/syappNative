import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView
} from 'react-native'
import { colors } from '../utils/colors'
import Userview from '../components/Userview'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ListColumn from '../components/ListColumn'
import {SafeAreaView} from 'react-navigation'

const baseIconStyle = {
  size: 25,
  color: colors.GRAY3
}

const LINKS = [
  {
    title: "我的钱包",
    icon: <Ionicons name="ios-card" {...baseIconStyle} />,
    link: "MyWallet"
  },
  {
    title: "我的行程",
    icon: <Ionicons name="ios-pin-outline" {...baseIconStyle} />,
    link: "Stroke"
  },
  {
    title: "客服中心",
    icon: <Ionicons name="ios-headset-outline" {...baseIconStyle} />,
    link: "MyLocation"
  },
  {
    title: "企业服务",
    icon: <Ionicons name="ios-briefcase-outline" {...baseIconStyle} />,
    link: "MyLocation"
  },
  {
    title: "意见反馈",
    icon: <Ionicons name="ios-pin-outline" {...baseIconStyle} />,
    link: "MyLocation"
  },
  {
    title: "设置",
    icon: <Ionicons name="ios-settings-outline" {...baseIconStyle} />,
    link: "Setting"
  }
];

class UserScreen extends Component {
  static navigationOptions = {
    header: null
  }
  listColumnOnPress = item => {
    this.props.navigation.navigate(item.link, {
      title: item.title
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Userview />
        </View>
        <ScrollView style={styles.content}>
          {LINKS.map((item, index) => (
            <ListColumn key={index} link onPress={() => this.listColumnOnPress(item)}>
              <ListColumn.Left>
                <View style={styles.leftWrapper}>
                  <View style={styles.iconWrapper}>
                    {item.icon}
                  </View>
                  <View style={styles.leftTitleWrapper}>
                    <Text style={styles.leftTitleText}>{item.title}</Text>
                  </View>
                </View>
              </ListColumn.Left>
              <ListColumn.Right>
                <MaterialIcons name="keyboard-arrow-right" {...baseIconStyle} />
              </ListColumn.Right>
            </ListColumn>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 200,
    backgroundColor: colors.greenDark,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconWrapper: {
    flex: 0.1
  },
  leftTitleWrapper: {
    flex: 1
  },
  leftTitleText: {
    fontSize: 16
  }
});

export default UserScreen
