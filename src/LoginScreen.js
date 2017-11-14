/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 21:40
 * @author: Patrick <root@sixlab.cn>
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native';
import {connect} from 'react-redux';
import {
    // Icon,
    List,
    Popup,
    Button,
    InputItem,
    // WhiteSpace
} from 'antd-mobile';
import Icon from 'antd-mobile/lib/icon';
import WhiteSpace from 'antd-mobile/lib/white-space';
import {logIn} from "./actions/UserAction";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }
    
    onPressCallback() {
        const {dispatch} = this.props;
        dispatch(logIn({
            "username": this.state.username,
            "password": this.state.password,
        }))
    }
    
    showReg() {
        Popup.show(<View style={{padding:30}}>
            <Text>
                static show(content: React.Element, options: Object):#{'\n'}
                {'\n'}
                options可选项：{'\n'}
                animationType (string) - 可选 slide-down (默认)、slide-up 弹出动画类型{'\n'}
                onMaskClose (function) 遮罩层关闭时的回调，支持返回 Promise{'\n'}
                maskClosable (bool) - 点击蒙层是否允许关闭，默认允许{'\n'}
                {'\n'}
                static hide(): 关闭 Popup#{'\n'}
            </Text>
        </View>, {animationType: 'slide-up', maskClosable: true, onMaskClose:function () {

        }});
    }
    
    render() {
        return (
            <View style={styles.loginview}>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <View>
                    <Image style={styles.img} source={require('../images/h.png')}/>
                </View>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <List>
                    <InputItem style={styles.loginInput}
                               labelNumber={2}
                               placeholder="请输入用户名"
                               autoCapitalize={"none"}
                               clear={true}
                               value={this.state.username}
                               onChange={(value) => {
                                   this.setState({username: value})
                               }}
                    >
                        <Icon style={styles.inputIcon} type={"\ue613"} color="#28AAEA"/>
                    </InputItem>
                    <InputItem type="password"
                               style={styles.loginInput}
                               labelNumber={2}
                               clear={true}
                               placeholder="请输入密码"
                               autoCapitalize={"none"}
                               value={this.state.password}
                               onChange={(value)=>{
                                   this.setState({password:value})
                               }}
                    >
                        <Icon style={styles.inputIcon} type={"\ue614"} color="#28AAEA"/>
                    </InputItem>
                </List>
                <WhiteSpace size="xl"/>
                <Button style={styles.loginInput}
                        type="primary"
                        onClick={this.onPressCallback.bind(this)}>登录</Button>
                <WhiteSpace size="xl"/>
                <View style={styles.regTextView}>
                    <Text style={styles.regText}
                          onPress={this.showReg.bind(this)}>获取账号</Text>
                </View>
                
                
                {/*<View style={{*/}
                {/*flexDirection: 'row', height: 100, marginTop: 1,*/}
                {/*justifyContent: 'center',*/}
                {/*alignItems: 'flex-start',*/}
                {/*}}>*/}
                {/*/!*<Image source={require('./images/ebidding.png')}/>*!/*/}
                {/*</View>*/}
                {/*<View style={{*/}
                {/*marginTop: 40,*/}
                {/*width: "80%",*/}
                {/*}}>*/}
                {/*<TextInput style={LoginStyles.loginInput}*/}
                {/*placeholder="用户名/手机号/邮箱"*/}
                {/*onChangeText={(text) => this.setState({username: text})}*/}
                {/*value={this.state.username}/>*/}
                {/**/}
                {/*<TextInput style={LoginStyles.loginInput}*/}
                {/*secureTextEntry={true}*/}
                {/*placeholder="密码"*/}
                {/*onChangeText={(text) => this.setState({password: text})}*/}
                {/*value={this.state.password}/>*/}
                {/**/}
                {/*<Button title='登录' onPress={this.onPressCallback.bind(this)}/>*/}
                {/*/!*<Text style={{color: "#4A90E2", textAlign: 'center', marginTop: 10}}>忘记密码？</Text>*!/*/}
                {/*</View>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginview: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    loginInput: {
        width: 325,
    },
    img: {
        width: 120,
        height: 120,
    },
    inputIcon: {
        height: 22,
        width: 22,
    },
    border: {
        borderWidth: 2,
        borderColor: '#28AAEA',
    },
    regTextView: {
        flex: 1,
        alignItems: 'center',
    },
    regText: {
        color: '#28AAEA',
    },
});

function select(store) {
    return {}
}

export default connect(select)(LoginScreen);