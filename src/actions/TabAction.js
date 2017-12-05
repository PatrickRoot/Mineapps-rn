/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * License information see the LICENSE file in the project's root directory.
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 21:46
 * @author: Patrick <root@sixlab.cn>
 */
import {TAB_CHANGE} from "../constants/types";

export function changeTab(tabName) {
    return {
        'type': TAB_CHANGE,
        'tabName': tabName,
    }
}