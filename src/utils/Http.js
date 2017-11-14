/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 21:45
 * @author: Patrick <root@sixlab.cn>
 */
import * as ClientInfo from "../constants/clientInfo";
import moment from "moment";

export function doAuthPost(url, data, callback) {
    doPost(url, data, callback, true);
}

export function doAuthPut(url, data, callback) {
    doPut(url, data, callback, true);
}

export function doAuthGet(url, data, callback) {
    doGet(url, data, callback, true);
}

export function doPut(url, data, callback, needAuth) {
    let options = {
        method: 'PUT',
        body: JSON.stringify(data),
    };
    doFetch(url, options, callback, needAuth);
}

export function doPost(url, data, callback, needAuth) {
    let options = {
        method: 'POST',
        body: JSON.stringify(data),
    };
    doFetch(url, options, callback, needAuth);
}

export function doGet(url, data, callback, needAuth) {
    let options = {
        method: 'GET'
    };
    
    let param = "";
    for (let i in data) {
        let value = data[i];
        if (typeof value !== undefined && value !== null) {
            param += i;
            param += "=";
            param += value;
            param += "&";
        }
    }
    if (param != "") {
        url = url + "?" + param.substr(0, param.length - 1);
    }
    
    doFetch(url, options, callback, needAuth);
}

function doFetch(url, options, callback, needAuth) {
    console.log("请求的路径", url);
    console.log("请求的参数", options);
    
    var fetchOptions = {
        headers: {
            'client': ClientInfo.clientOs,
            'clientVersion': ClientInfo.clientVersion,
            'version': ClientInfo.appVersion,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        ...options
    };
    
    let token = "";
    if (needAuth) {
        token = globalStore.getState().UserStore.user.token;
        fetchOptions.headers.Authorization = token;
    }
    
    fetch(url, fetchOptions)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log("responseData:", data);
            callback(data);
        })
        .catch(function (err) {
            console.log("error:", err);
            callback({
                success: false,
                code: -1,
                message: err.message,
            })
        })
        .done();
}

export function getDouban(url, callback) {
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log("responseData:", data);
            if (data) {
                callback({
                    success: true,
                    code: 0,
                    data:data,
                });
            }
        })
        .catch((error) => {
            console.log("error:", error);
            callback({
                success: false,
                code: -1,
                message: error.message,
            })
        })
        .done();
}