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
    doPost(url, data, callback, true)
}

export function doAuthGet(url, callback) {
    doGet(url, callback, true)
}

export function doPost(url, data, callback, needAuth) {
    let formData = transData(data);
    
    let options = {
        method: 'POST',
        body: formData,
    };
    doFetch(url, options, callback, needAuth);
}

export function doGet(url, callback, needAuth) {
    let options = {
        method: 'GET'
    };
    doFetch(url, options, callback, needAuth);
}

function doFetch(url, options, callback, needAuth) {
    let token = "";
    if(needAuth){
        token = globalStore.getState().UserStore.user.token;
    }
    
    var fetchOptions = {
        headers: {
            'accessToken': token,
            'client': ClientInfo.clientOs,
            'clientVersion': ClientInfo.clientVersion,
            'version': ClientInfo.appVersion,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        ...options
    };
    
    fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
            let data = {};
            try {
                data = JSON.parse(responseText);
            } catch (e) {
                data = {
                    success: false,
                    code: -2,
                    message: "数据转换失败",
                }
            }
            callback(data);
        })
        .catch(function (err) {
            callback({
                success: false,
                code: -1,
                message: err.message,
            })
        })
        .done();
}

function transData(data) {
    let formData = new FormData();
    
    if (data) {
        objectParam(formData, data);
    }
    
    return formData;
}

function objectParam(formData, data, superKey) {
    for (let itemKey in data) {
        let key = itemKey;
        if (superKey) {
            key = superKey + "." + itemKey;
        }
        let val = data[itemKey];
        let type = typeof val;
        switch (type) {
            case "string":
            case "number":
                formData.append(key, val);
                break;
            case "boolean":
                formData.append(key, val ? 1 : 0);
                break;
            case "boolean":
                formData.append(key, val ? 1 : 0);
                break;
            case "object":
                if (null !== val) {
                    if (val instanceof Array) {
                        arrayParam(formData, val, key);
                    } else if (val instanceof Date) {
                        formData.append(key, moment(val).format("YYYY-MM-DD HH:mm:ss"));
                    } else if (val instanceof moment) {
                        formData.append(key, val.format("YYYY-MM-DD HH:mm:ss"));
                    } else {
                        objectParam(formData, val, key);
                    }
                }
                break;
            
        }
    }
}

function arrayParam(formData, vals, key) {
    for (let item of vals) {
        formData.append(key, item);
    }
}