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
    View,
    StyleSheet,
} from 'react-native';
import {
    connect,
    Provider,
} from 'react-redux';
import {
    ActivityIndicator,
} from 'antd-mobile';

import configureStore from './src/store/index';
import {checkLogin} from "./src/actions/UserAction";

import Index from './src';

globalStore = null;

class App extends React.Component {
    constructor(props) {
        super(props);
        let that = this;
        globalStore = configureStore(() => {
            globalStore.dispatch(checkLogin());
            that.setState({isLoading: false});
        });
        
        this.state = {
            isLoading: true
        }
    }
    
    render() {
        if (this.state.isLoading || globalStore.getState().UserStore.isChecking) {
            return (
                <View style={styles.loginview}>
                    <ActivityIndicator
                        text="Loading..."
                        size="large"/>
                </View>
            );
        }
        return (
            <Provider store={globalStore}>
                {
                    <Index/>
                }
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    loginview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;