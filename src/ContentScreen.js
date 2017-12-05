/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * License information see the LICENSE file in the project's root directory.
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 21:40
 * @author: Patrick <root@sixlab.cn>
 */
import React from 'react';
import {
    TabBar,
} from 'antd-mobile';
import {
    addNavigationHelpers,
} from 'react-navigation';
import {connect} from 'react-redux';

import HomeNavigator from './navigators/HomeNavigator';
import ToolboxNavigator from './navigators/ToolboxNavigator';
import MyNavigator from './navigators/MyNavigator';

import {changeTab} from "./actions/TabAction";

class ContentScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const {dispatch} = this.props;
        const selectTab = this.props.selectTab;
        
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                <TabBar.Item
                    title="首页"
                    key="home"
                    icon={require('../images/homepage.png')}
                    selectedIcon={require('../images/homepage_fill.png')}
                    selected={selectTab === 'homeTab'}
                    onPress={() => {
                        dispatch(changeTab("homeTab"))
                    }}
                    data-seed="logId"
                >
                    <HomeNavigator navigation={addNavigationHelpers({dispatch, state: this.props.NavHomeStore})}/>
                </TabBar.Item>
                
                {/*<TabBar.Item*/}
                {/*icon={require('../images/video.png')}*/}
                {/*selectedIcon={require('../images/video_fill.png')}*/}
                {/*title="电影"*/}
                {/*key="film"*/}
                {/*selected={selectTab === 'filmTab'}*/}
                {/*onPress={() => {*/}
                {/*dispatch(changeTab("filmTab"))*/}
                {/*}}*/}
                {/*>*/}
                {/*<FilmNavigator navigation={addNavigationHelpers({dispatch, state: this.props.NavFilmStore})}/>*/}
                {/*</TabBar.Item>*/}
                
                <TabBar.Item
                    icon={require('../images/toolbox.png')}
                    selectedIcon={require('../images/toolbox_fill.png')}
                    title="工具箱"
                    key="toolbox"
                    selected={selectTab === 'toolboxTab'}
                    onPress={() => {
                        dispatch(changeTab("toolboxTab"))
                    }}
                >
                    <ToolboxNavigator navigation={addNavigationHelpers({dispatch, state: this.props.NavToolboxStore})}/>
                </TabBar.Item>
                
                <TabBar.Item
                    icon={require('../images/people.png')}
                    selectedIcon={require('../images/people_fill.png')}
                    title="我的"
                    key="my"
                    selected={selectTab === 'myTab'}
                    onPress={() => {
                        dispatch(changeTab("myTab"))
                    }}
                >
                    <MyNavigator navigation={addNavigationHelpers({dispatch, state: this.props.NavMyStore})}/>
                </TabBar.Item>
            </TabBar>
        );
    }
}

function select(store) {
    return {
        NavHomeStore: store.NavHomeStore,
        NavToolboxStore: store.NavToolboxStore,
        NavMyStore: store.NavMyStore,
        selectTab: store.TabStore.selectTab,
    }
}

export default connect(select)(ContentScreen);