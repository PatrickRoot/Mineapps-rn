/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
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