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
import {SHOW_LOAD} from "../constants/types";

const initState = {
    showData: [],
};

export default function (state = initState, action) {
    switch (action.type) {
        case SHOW_LOAD:
            return {
                ...state,
                showData: action.showData,
            };

        default:
            return state;
    }
}