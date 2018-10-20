import React, {PureComponent} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'
import Button from '../components/buttons/Button'
import PopUp from '../components/PopUp'
import {colors} from '../utils/colors'
import {User} from '../Api/index.js'

export default class SigninScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            phoneNumber: '15911122312',
            code: '',
            imgData: '',
            loginVailImgCode: ''
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
                           value={this.state.phoneNumber}
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
                           onChangeText={(input) => this.setState({code: input})}>

                </TextInput>
                <Button style={styles.code} underlayColor='transparent'
                        onPress={() => this.getCode()}>
                    <Text style={styles.loginText}>获取验证码</Text>
                </Button>
            </View>
            <Button style={styles.login}
                    underlayColor='transparent'
                    onPress={() => this.loginInMainpage()}>
                <Text style={styles.loginText}>登录</Text>
            </Button>
            <Text style={styles.tip}>
                点击登录即表示同意
                <Text style={styles.clause}>《用户条款》</Text>
            </Text>
            <PopUp ref={ref => this.popUp = ref}>
                <View style={styles.item}>
                    <Image style={styles.img}
                           onPress={() => this.getImgData()}
                           source={{uri: this.state.imgData}}
                           resizeMode="contain"/>
                    <TextInput ref="loginVailImgCode"
                               underlineColorAndroid="gray"
                               placeholder="请输入图形验证码"
                               clearTextOnFocus={true}
                               clearButtonMode="while-editing"
                               style={{flex: 1}}
                               onChangeText={(input) => this.setState({loginVailImgCode: input})}>

                    </TextInput>
                    <TouchableOpacity onPress={() => this.verifyImageCode()}>
                        <Button style={styles.code} underlayColor='transparent'>
                            <Text style={styles.loginText}>确认</Text>
                        </Button>
                    </TouchableOpacity>
                </View>
            </PopUp>
        </View>)
    }

    verifyImageCode = async () => {
        try {
            const {phoneNumber, loginVailImgCode} = this.state
            // debugger
            this.setState({
                loading: true
            })
            const res = await User.verifyImageCode({
                phone: phoneNumber,
                code: loginVailImgCode
            })
            this.setState({
                loading: false
            })
            console.log(res)
            //如果图形验证码校验成功，执行下一步
            if (res.code === 0) {
                //清空当前录入的图型验证码
                this.setState({
                    loginVailImgCode: ''
                })
                //关闭图型验证码弹窗
                this.popUp.hide()
                //发送手机验证码
                this.getCode()
            } else {
                this.getImgData()
                alert('图型验证码错误，请重新输入')
            }
        } catch (error) {
            throw error
        }
    }

    //获取登录手机号
    getLoginPhone() {
        return this.trim(this.phoneNumber)
    }

    getCode = async () => {
        try {
            const {phoneNumber} = this.state
            // debugger
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
                this.getImgData()
                this.popUp.show()
            } else {
                alert('网络繁忙，请稍后重试')
            }
        } catch (error) {
            throw error
        }
    }
    getImgData = async () => {
        try {
            const {phoneNumber} = this.state
            // debugger
            this.setState({
                loading: true
            })
            const res = await User.codeImg({
                uid: 'c' + phoneNumber + phoneNumber.substr(-5)
            })
            this.setState({
                loading: false,
                imgData: res.data
            })
            console.log(res)
        } catch (error) {
            throw error
        }
    }

    /**
     * 登录进入主页面
     */
    async loginInMainpage() {
        this.refs.inputLoginName.blur()
        this.refs.inputLoginPwd.blur()
        // this.props.navigation.navigate()
        try {
            const {phoneNumber, code} = this.state
            this.setState({
                loading: true
            })
            const res = await User.phoneCode({
                username: phoneNumber,																															//String	是	password
                code: code,																													//String	是	验证码
                version: '5.2.1'
            })
            this.setState({
                loading: false
            })
            console.log(res)
            //根据获取验证码返回的结果做判断
            if (res.code === 0) {
                alert('登陆成功!')
                let loginInfo = {
                    customerId: res.data.customerId,
                    token: res.data.token,
                    sso_phone: res.data.userName,
                    sso_name: res.data.name,
                    sso_isBussUsable: res.data.isBussUsable //机构支付是否可用,0是不能支付，1是可以支付
                }
                //保存登录相关的cookie信息   loginInfo
            } else {
                alert('网络繁忙，请稍后重试')
            }
        } catch (error) {
            throw error
        }
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
        width: 150,
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
    },
    img: {}
})