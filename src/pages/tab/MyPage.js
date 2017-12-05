/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * License information see the LICENSE file in the project's root directory.
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 22:33
 * @author: Patrick <root@sixlab.cn>
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    AsyncStorage,
} from 'react-native';
import {
    Button,
} from 'antd-mobile';
import {logOut} from "../../actions/UserAction";

class MyPage extends Component {
    
    logout(){
        const {dispatch} = this.props;
        
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    // get at each store's key/value so you can work with it
                    let key = store[i][0];
                    let value = store[i][1];
                    console.log(i, ">>>", key, ":", value, store, result);
                });
            });
        
            AsyncStorage.multiRemove(keys);
        });
    
        AsyncStorage.clear(function (err) {
            if(!err){
                dispatch(logOut());
            }
        });
    }
    
    render() {
        return <View>
            <Button onClick={this.logout.bind(this)}>退出登录</Button>
        </View>
    }
}

function select(store) {
    return {}
}

export default connect(select)(MyPage);