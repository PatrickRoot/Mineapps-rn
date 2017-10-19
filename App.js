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
import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import {
    Provider,
} from 'react-redux';
// import {
//     ActivityIndicator,
// } from 'antd-mobile';

import configureStore from './src/store/index';
import {checkLogin} from "./src/actions/UserAction";

import LoginScreen from "./src/LoginScreen";
// import ContentScreen from './src/ContentScreen';

globalStore = null;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        let that = this;
        globalStore = configureStore(() => {
            that.setState({isLoading: false})
        });
        
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        globalStore.dispatch(checkLogin());
    }
    
    render() {
        // if (this.state.isLoading || globalStore.getState().UserStore.isChecking) {
        //     return (
        //         <View>
        //             <ActivityIndicator
        //                 text="Loading..."
        //                 size="large"/>
        //         </View>
        //     );
        // }
        return (
            <Provider store={globalStore}>
                
                {
                    globalStore.getState().UserStore.isLoggedIn ?
                        <View>
                            <Text>1</Text>
                            <Text>1</Text>
                            <Text>1</Text>
                            <Text>1</Text>
                        </View>
                        : <LoginScreen />
                }
            </Provider>
        );
    }
}