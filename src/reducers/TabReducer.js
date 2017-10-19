/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 22:28
 * @author: Patrick <root@sixlab.cn>
 */
import {TAB_CHANGE} from "../constants/types";

const initialState = {
    selectTab: 'homeTab',
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
export default function (state = initialState, action) {
    switch (action.type) {
        case TAB_CHANGE:
            return {
                ...state,
                selectTab: action.tabName,
            };

        default:
            return state;
    }
}