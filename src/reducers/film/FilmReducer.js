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
import {FILM_LOADED, FILM_LOADING, FILM_UPDATED} from "../../constants/types";

const initState = {
    data: [],
};

export default function (state = initState, action) {
    switch (action.type) {
        case FILM_LOADING:
            return {
                ...state,
                data: [],
            };
        case FILM_LOADED:
            return {
                ...state,
                data: action.data,
            };
        // case FILM_ADDED:
        //     debugger;
        //     let data2 = state.data;
        //     data2.push(action.data);
        //
        //     return {
        //         ...state,
        //         data: data2,
        //     };
        case FILM_UPDATED:
            debugger;
            for (let index in state.data) {
                let obj = state.data[index];
                if (obj.id == action.filmId) {
                    state.data[index] = action.data;
                }
            }

            return {
                ...state,
            };

        default:
            return state;
    }
}