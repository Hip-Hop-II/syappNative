import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ListColumn from '../../components/ListColumn'
import Button from '../../components/buttons/Button'

const baseIconStyle = {
  size: 25,
  color: colors.GRAY3
}

const LINKS = [
  {
    title: '常用地址',
    link: 'MyWallet'
  },
  {
    title: '乘车喜好',
    link: 'MyLocation'
  },
  {
    title: '黑名单',
    link: 'MyLocation'
  }
]
const LINKS_person = [
  {
    title: '联系我们',
    link: 'MyWallet'
  },
  {
    title: '用户条款',
    link: 'MyLocation'
  }
]
const LINKS_safe = [
  {
    title: "账号与安全",
    link: "Logout"
  }
];

class SettingScreen extends Component {
  static navigationOptions = {
    title: null,
    headerTintColor: colors.greyDark,
    headerStyle: {
      borderBottomWidth: 0
    }
  }

  listColumnOnPress = item => {
    this.props.navigation.navigate(item.link)
  }

  render() {
    const title = this.props.navigation.getParam('title', '设置')
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.addressWrapper}>
            {LINKS.map((item, index) => (
              <ListColumn
                key={index}
                link
                onPress={() => this.listColumnOnPress(item)}
              >
                <ListColumn.Left>
                  <View style={styles.leftWrapper}>
                    <Text style={styles.leftTitleText}>{item.title}</Text>
                  </View>
                </ListColumn.Left>
                <ListColumn.Right>
                  <MaterialIcons
                    name='keyboard-arrow-right'
                    {...baseIconStyle}
                  />
                </ListColumn.Right>
              </ListColumn>
            ))}
          </View>
          <View style={styles.cancatWrapper}>
            {LINKS_person.map((item, index) => (
              <ListColumn
                key={index}
                link
                onPress={() => this.listColumnOnPress(item)}
              >
                <ListColumn.Left>
                  <View style={styles.leftWrapper}>
                    <Text style={styles.leftTitleText}>{item.title}</Text>
                  </View>
                </ListColumn.Left>
                <ListColumn.Right>
                  <MaterialIcons
                    name='keyboard-arrow-right'
                    {...baseIconStyle}
                  />
                </ListColumn.Right>
              </ListColumn>
            ))}
          </View>
          <View style={styles.accountWrapper}>
            {LINKS_safe.map((item, index) => (
              <ListColumn
                key={index}
                link
                onPress={() => this.listColumnOnPress(item)}
              >
                <ListColumn.Left>
                  <View style={styles.leftWrapper}>
                    <Text style={styles.leftTitleText}>{item.title}</Text>
                  </View>
                </ListColumn.Left>
                <ListColumn.Right>
                  <MaterialIcons
                    name='keyboard-arrow-right'
                    {...baseIconStyle}
                  />
                </ListColumn.Right>
              </ListColumn>
            ))}
          </View>
          <Button style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>退出登录</Text>
          </Button>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.greyLight
  },
  title: {
    paddingLeft: 24,
    fontSize: 32,
    fontWeight: "700",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 20,
    backgroundColor: colors.WHITE
  },
  leftTitleText: {
    fontSize: 16
  },
  cancatWrapper: {
    marginVertical: 8,
    backgroundColor: colors.WHITE
  },
  addressWrapper: {
    backgroundColor: colors.WHITE
  },
  accountWrapper: {
    backgroundColor: colors.WHITE
  },
  logoutButton: {
    marginTop: 15,
    backgroundColor: colors.greenLight
  },
  logoutButtonText: {
    fontSize: 16,
    color: colors.WHITE
  }
})

export default SettingScreen
