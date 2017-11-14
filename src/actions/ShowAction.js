/*
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/11/10 15:35
 * @Author: Patrick <root@sixlab.cn>
 */

import {
    Toast
} from 'antd-mobile';
import {doAuthPut, doGet, doPut} from "../utils/Http";
import {MOVIE_SHOW} from "../constants/urls";
import {
    SHOW_LOAD_ERR, SHOW_LOADED, SHOW_LOADING, SHOW_UPDATE_ERR, SHOW_UPDATED,
    SHOW_UPDATING
} from "../constants/types";

/**
 *
 * @param opt
 * @returns {function(*)}
 */
export function searchShow(opt) {
    return (dispatch) => {
        dispatch({'type': SHOW_LOADING});
        Toast.loading("搜索中", 0);
        
        doGet(MOVIE_SHOW, opt, function (data) {
            Toast.hide();
            console.log(data);
            if (data.success) {
                dispatch({
                    'type': SHOW_LOADED,
                    data: data.data,
                });
            } else {
                Toast.fail(data.message, 1);
                dispatch({
                    'type': SHOW_LOAD_ERR
                });
            }
        }, true);
    }
}

export function updateShow(showId, season, episode) {
    return (dispatch) => {
        Toast.loading("更新中", 0);
    
        doAuthPut(MOVIE_SHOW + "/" + showId + "/season/" + season + "/episode/" + episode, null, function (data) {
            Toast.hide();
            console.log(data);
            if (data.success) {
                dispatch({
                    'type': SHOW_UPDATED,
                    showId: showId,
                    data: data.data,
                });
            } else {
                Toast.fail(data.message, 1);
                dispatch({
                    'type': SHOW_UPDATE_ERR
                });
            }
        });
    }
}

export function updateStatus(showId, status) {
    return (dispatch) => {
        Toast.loading("更新中", 0);
        
        doAuthPut(MOVIE_SHOW + "/" + showId + "/viewStatus/" + status, null, function (data) {
            Toast.hide();
            console.log(data);
            if (data.success) {
                dispatch({
                    'type': SHOW_UPDATED,
                    showId: showId,
                    data: data.data,
                });
            } else {
                Toast.fail(data.message, 1);
                dispatch({
                    'type': SHOW_UPDATE_ERR
                });
            }
        });
    }
}
