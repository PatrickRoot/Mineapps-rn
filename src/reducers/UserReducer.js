/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 22:23
 * @author: Patrick <root@sixlab.cn>
 */
import * as TYPES from '../constants/userTypes';

const initialState = {
    isChecking: true,
    isLogging: false,
    isLoggedIn: false,
    user: {},
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
        case TYPES.CHECK_LOGIN_ING:
            return {
                ...state,
                isChecking: true,
            };
        case TYPES.CHECK_LOGIN_IN:
            return {
                ...state,
                isChecking: false,
                isLoggedIn: true,
            };
        case TYPES.CHECK_LOGIN_OUT:
            return {
                ...state,
                isChecking: false,
                isLoggedIn: false,
            };
        case TYPES.CHECK_LOGIN_ERROR:
            return {
                ...state,
                isChecking: false,
                isLoggedIn: false,
            };


        case TYPES.LOGGING_ING:
            return {
                ...state,
                isLogging: true,
            };

        case TYPES.LOGGING_IN:
            return {
                ...state,
                isLogging: false,
                isLoggedIn: true,
                user: action.user,
            };

        case TYPES.LOGGING_OUT:
            return {
                ...state,
                isLogging: false,
                isLoggedIn: false,
                user: {},
            };
        case TYPES.LOGGING_ERROR:
            return {
                ...state,
                isLogging: false,
                isLoggedIn: false,
                user: {},
            };
        default:
            return state;
    }
}