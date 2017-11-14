/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/20 22:13
 * @author: Patrick <root@sixlab.cn>
 */
import {SHOW_LOADED, SHOW_LOADING, SHOW_UPDATED} from "../../constants/types";

const initState = {
    loading: true,
    data:[],
};

export default function (state = initState, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                data:[],
                loading: true,
            };
        case SHOW_LOADED:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case SHOW_UPDATED:
            for (let index in state.data) {
                let obj = state.data[index];
                if (obj.id == action.showId) {
                    state.data[index] = action.data;
                }
            }
            return {
                ...state
            };

        default:
            return state;
    }
}