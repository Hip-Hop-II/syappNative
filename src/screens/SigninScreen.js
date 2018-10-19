import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import Button from '../components/buttons/Button'
import { colors } from '../utils/colors'
import User from '../Api/index.js'


export default class SigninScreen extends PureComponent {
  constructor(props) {
    super(props)
    state = {
      loading: false,
      phoneNumber: '',
      userCode: ''
    }
  }
  render() {
    return (<View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>验证码登录</Text>
        <Text style={styles.subTitle}>欢迎登录首汽约车</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.textStyle}>+86 > </Text>
        <TextInput ref="inputLoginName"
                   autoFocus={false}
                   underlineColorAndroid="gray"
                   placeholder="请输入手机号"
                   clearTextOnFocus={false}
                   clearButtonMode="while-editing"
                   style={{flex: 1}}
                   onChangeText={(input) => this.setState({phoneNumber: input})}>

        </TextInput>
      </View>
      <View style={styles.item}>
        <TextInput ref="inputLoginPwd"
                   underlineColorAndroid="gray"
                   placeholder="请输入短信码"
                   clearTextOnFocus={true}
                   clearButtonMode="while-editing"
                   style={{flex: 1}}
                   onChangeText={(input) => this.setState({userCode: input})}>

        </TextInput>
        <Button style={styles.code} underlayColor='transparent'
                onPress={()=>this.getCode()}>
          <Text style={styles.loginText}>获取验证码</Text>
        </Button>
      </View>
      <Button style={styles.login}
              underlayColor='transparent'
              onPress={()=>this.loginInMainpage()}>
        <Text style={styles.loginText}>登录</Text>
      </Button>
      <Text style={styles.tip}>
        点击登录即表示同意
        <Text style={styles.clause}>《用户条款》</Text>
      </Text>
    </View>)
  }
  async getCode() {
      try {
          const {phoneNumber} = this.state
          this.setState({
              loading: true
          })
          const res = await User.phoneCode({
              phoneNumber
          })
          this.setState({
              loading: false
          })
          console.log(res)
          //根据获取验证码返回的结果做判断
          if (res.code === 0) {
              alert('发送成功!')
          } else if (res.code === 202) {
              // 需要图形验证码情况
          } else {
             alert('网络繁忙，请稍后重试')
          }
      } catch (error) {
          throw error
      }
  }
  /**
   * 登录进入主页面
   */
  loginInMainpage() {
    this.refs.inputLoginName.blur()
    this.refs.inputLoginPwd.blur()
    // this.props.navigation.navigate()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  header: {
    marginTop: 100,
    marginBottom: 80,
  },
  title: {
    fontSize: 28,
    color: colors.GRAY2,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: colors.GRAY3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 18,
    color: colors.GRAY2,
    marginRight: 10
  },
  code: {
    width:150,
  },
  login: {
    height: 40,
    backgroundColor: colors.greenLight,
    margin: 20,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 20,
    alignSelf: 'center',
    color: colors.WHITE
  },
  tip: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.GRAY3,
    justifyContent: 'center',
  },
  clause: {
    color: colors.WARNING
  }
})