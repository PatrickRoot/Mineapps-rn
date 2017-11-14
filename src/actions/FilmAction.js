/*
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/11/10 15:34
 * @Author: Patrick <root@sixlab.cn>
 */

import {
    FILM_ADD_ERR, FILM_ADDED, FILM_LOAD_ERR, FILM_LOADED, FILM_LOADING, FILM_UPDATE_ERR,
    FILM_UPDATED
} from "../constants/types";
import {
    Toast,
} from "antd-mobile";
import {MOVIE_FILM} from "../constants/urls";
import {doAuthPost, doAuthPut, doGet} from "../utils/Http";

export function searchFilm(opt) {
    return (dispatch) => {
        dispatch({'type': FILM_LOADING});
        Toast.loading("搜索中", 0);
        
        doGet(MOVIE_FILM, opt, function (data) {
            Toast.hide();
            console.log(data);
            if (data.success) {
                dispatch({
                    'type': FILM_LOADED,
                    data: data.data,
                });
            } else {
                Toast.fail(data.message, 1);
                dispatch({
                    'type': FILM_LOAD_ERR
                });
            }
        }, true);
    }
}

export function searchRecentlyFilm(num) {
    return (dispatch) => {
        dispatch({'type': FILM_LOADING});
        Toast.loading("搜索中", 0);
        
        let url = MOVIE_FILM + "/recent/" + num;
        
        doGet(url, {}, function (data) {
            Toast.hide();
            console.log(data);
            if (data.success) {
                dispatch({
                    'type': FILM_LOADED,
                    data: data.data,
                });
            } else {
                Toast.fail(data.message, 1);
                dispatch({
                    'type': FILM_LOAD_ERR
                });
            }
        }, true);
    }
}

export function addFilm(msxFilm) {
    return (dispatch) => {
        Toast.loading("提交中", 0);
        
        let url = MOVIE_FILM;
        
        delete msxFilm.id;
        
        doAuthPost(url, msxFilm, function (data) {
            Toast.hide();
            console.log(data);
            if (data.success) {
                dispatch({
                    'type': FILM_ADDED,
                    data: data.data,
                });
            } else {
                Toast.fail(data.message, 1);
                dispatch({
                    'type': FILM_ADD_ERR
                });
            }
        });
    }
}

export function updateFilm(msxFilm) {
    return (dispatch) => {
        Toast.loading("提交中", 0);
        
        let url = MOVIE_FILM+"/"+msxFilm.id;
        
        doAuthPut(url, msxFilm, function (data) {
            Toast.hide();
            console.log(data);
            if (data.success) {
                dispatch({
                    'type': FILM_UPDATED,
                    data: data.data,
                    fileId: msxFilm.id,
                });
            } else {
                Toast.fail(data.message, 1);
                dispatch({
                    'type': FILM_UPDATE_ERR
                });
            }
        });
    }
}