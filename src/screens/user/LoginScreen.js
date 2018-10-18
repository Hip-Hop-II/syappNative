import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Alert
} from 'react-native'
import colors from '../../utils/colors'

class LogoutScreen extends Component {
    static navigationOptions = {
        title: '注销账号'
    }
    list = [
        {
            text: '商城积分'
        },
        {
            text: '会员成长值'
        },
        {
            text: '优惠券、礼品卡、信用卡'
        },
        {
            text: '充值享受的赠送金额'
        },
        {
            text: '个人基本信息'
        },
        {
            text: '行程信息'
        },
        {
            text: '发票信息'
        },
        {
            text: '实名认证信息'
        },
    ]
    renderTextItem = () => {
        return this.list.map((item, index) => (
            <Text style={styles.message} key={index}>
                {item.text}
            </Text>
        ))
    }
    logoutHandle = () => {
        Alert.alert(
            '警告',
            '确定要注销账号吗？',
            [
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: '确认', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.caption}>
                        <Icon name="md-alert" style={{color: colors.WARNING, fontSize: 40}} />
                        <Text style={styles.captionText}>注销后，以下信息将清空无法恢复</Text>
                    </View>
                    <View style={styles.list}>
                        {this.renderTextItem()}
                    </View>
                    <View style={styles.logoutButtonWrapper}>
                        <Button full style={styles.logoutButton} onPress={this.logoutHandle}>
                            <Text>注销账号</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    caption: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 127
    },
    captionText: {
        fontSize: 14,
        color: colors.GRAY2,
        marginBottom: 22,
        marginTop: 18
    },
    list: {
        paddingTop: 19,
        paddingLeft: 40,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.08)',
        borderTopColor: 'rgba(0, 0, 0, 0.08)'

    },
    message: {
        fontSize: 12,
        color: colors.GRAY3,
        marginBottom: 20
    },
    logoutButtonWrapper: {
        position: 'relative',
        top: 40,
    },
    logoutButton: {
        backgroundColor: colors.GRAY1
    }
})

export default LogoutScreen
