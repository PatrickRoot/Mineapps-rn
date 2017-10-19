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
    TabBar,
} from 'antd-mobile';
import {
    addNavigationHelpers,
} from 'react-navigation';
import {connect} from 'react-redux';

import HomeNavigator from './navigators/HomeNavigator';
import FilmNavigator from './navigators/FilmNavigator';
import ShowNavigator from './navigators/ShowNavigator';
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
                <TabBar.Item
                    icon={require('../images/video.png')}
                    selectedIcon={require('../images/video_fill.png')}
                    title="电影"
                    key="film"
                    selected={selectTab === 'filmTab'}
                    onPress={() => {
                        dispatch(changeTab("filmTab"))
                    }}
                >
                    <FilmNavigator navigation={addNavigationHelpers({dispatch, state: this.props.NavFilmStore})}/>
                </TabBar.Item>
                <TabBar.Item
                    icon={require('../images/live.png')}
                    selectedIcon={require('../images/live_fill.png')}
                    title="电视剧"
                    key="show"
                    selected={selectTab === 'showTab'}
                    onPress={() => {
                        dispatch(changeTab("showTab"))
                    }}
                >
                    <ShowNavigator navigation={addNavigationHelpers({dispatch, state: this.props.NavShowStore})}/>
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
        NavFilmStore: store.NavFilmStore,
        NavShowStore: store.NavShowStore,
        NavMyStore: store.NavMyStore,
        selectTab: store.TabStore.selectTab,
    }
}

export default connect(select)(ContentScreen);