/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * License information see the LICENSE file in the project's root directory.
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 21:45
 * @author: Patrick <root@sixlab.cn>
 */

import {
    Toast
} from 'antd-mobile';
import * as TYPES from "../constants/userTypes";
import {doGet, doPost} from "../utils/Http";
import {CHECK_LOGIN_URL, LOGIN_URL} from "../constants/urls";
import moment from 'moment';

/**
 * 检查用户是否登录
 * @returns {*}
 */
export function checkLogin() {
    return (dispatch) => {
        let token = globalStore.getState().UserStore.user.token;
        
        if (token) {
            dispatch({'type': TYPES.CHECK_LOGIN_ING});
            
            let expired = globalStore.getState().UserStore.user.expiration;
            let now = Number(moment().format("x"));
            let hours = moment.duration(expired - now).hours();
            if (hours <= 0) {
                dispatch({
                    'type': TYPES.CHECK_LOGIN_OUT
                });
            } else {
                dispatch({
                    'type': TYPES.CHECK_LOGIN_IN
                });
            }
            
            // let req = new Promise((resolve, reject) => {
            //
            // });
            // req.then((value) => {
            //     if (value) {
            //         dispatch({
            //             'type': CHECK_LOGIN_IN
            //         });
            //     } else {
            //         dispatch({
            //             'type': CHECK_LOGIN_OUT
            //         });
            //     }
            // }).catch((e) => {
            // });
            //
            // doGet(CHECK_LOGIN_URL, function (data) {
            //     if (data.success) {
            //         if (data.login) {
            //             dispatch({
            //                 'type': TYPES.CHECK_LOGIN_IN
            //             });
            //         } else {
            //             dispatch({
            //                 'type': TYPES.CHECK_LOGIN_OUT
            //             });
            //         }
            //     } else {
            //         Toast.fail(data.message, 1);
            //         dispatch({
            //             'type': TYPES.CHECK_LOGIN_ERROR
            //         });
            //     }
            // })
        } else {
            dispatch({
                'type': TYPES.CHECK_LOGIN_OUT
            });
        }
    }
}

/**
 * 登录
 * @param opt 用户名和密码：例：{username:"XXX",password:"XXX"}
 * @returns {function(*)}
 */
export function logIn(opt) {
    return (dispatch) => {
        dispatch({'type': TYPES.LOGGING_ING});
        Toast.loading("登录中", 0);
        
        doPost(LOGIN_URL, opt, function (data) {
            Toast.hide();
            if (data.success) {
                dispatch({
                    'type': TYPES.LOGGING_IN,
                    user: {
                        username: opt.username,
                        ...data.data,
                    },
                });
            } else {
                Toast.fail(data.message, 1);
                dispatch({
                    'type': TYPES.LOGGING_ERROR
                });
            }
        });
    }
}

/**
 * 退出登录
 * @returns {{type}}
 */
export function logOut() {
    return {
        'type': TYPES.LOGGING_OUT
    }
}