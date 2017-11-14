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
    connect,
} from 'react-redux';

import LoginScreen from "./LoginScreen";
import ContentScreen from './ContentScreen';

class App extends React.Component {
    render() {
        if(this.props.UserStore.isLoggedIn){
            return <ContentScreen/>;
        }else{
            return <LoginScreen/>;
        }
    }
}

function select(store) {
    return {
        UserStore: store.UserStore
    }
}

export default connect(select)(App);