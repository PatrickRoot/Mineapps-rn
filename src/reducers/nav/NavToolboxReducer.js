/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 22:29
 * @author: Patrick <root@sixlab.cn>
 */
import React from 'react';
import {
    NavigationActions,
} from 'react-navigation';

import * as TYPES from '../../constants/types';
import ToolboxNavigator from '../../navigators/ToolboxNavigator';

const initialNavState = {
    index: 0,
    routes: [
        {key: 'ToolboxPage', routeName: 'ToolboxPage'},
    ],
};

/**
 * reducer 处理... ...
 * 1. initialState定义了最开始的应用状态（未登录）
 * 2. 传入 action，传出 state
 * 3. 不同 action，返回不同
 *
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
export default function (state = initialNavState, action) {
    switch (action.type) {
        case TYPES.NAV_TOOLBOX_MAIN:
            return ToolboxNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'ToolboxPage'}), state);
    
        case TYPES.NAV_TOOLBOX_FILM:
            return ToolboxNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'FilmPage'}), state);
    
        case TYPES.NAV_TOOLBOX_SHOW:
            return ToolboxNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'ShowPage'}), state);
    
        case TYPES.NAV_TOOLBOX_ADD_FILM:
            return ToolboxNavigator.router.getStateForAction(NavigationActions.navigate({
                routeName: 'AddFilmPage',
                params: {
                    record:action.record,
                },
            }), state);
    
        case TYPES.NAV_TOOLBOX_ADD_SHOW:
            return ToolboxNavigator.router.getStateForAction(NavigationActions.navigate({
                routeName: 'AddShowPage',
                params: {
                    record: action.record,
                },
            }), state);
    
        // case TYPES.NAV_HOME_DETAIL:
        //     return ToolboxNavigator.router.getStateForAction(NavigationActions.navigate({
        //         routeName: 'FirstDetail',
        //         params: {
        //             order: action.order
        //         }
        //     }), state);

        case TYPES.NAV_TOOLBOX_BACK:
            return ToolboxNavigator.router.getStateForAction(NavigationActions.back(), state);

        default:
            return ToolboxNavigator.router.getStateForAction(action, state);
    }
}