/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 22:31
 * @author: Patrick <root@sixlab.cn>
 */
import {
    StackNavigator,
} from 'react-navigation';

import MyPage from '../pages/MyPage';

export default FirstNavigator = StackNavigator({
    FirstList: {
        screen: MyPage,
    },
    FirstDetail: {
        screen: MyPage,
    },
}, {
    initialRouteParams: {
        testParam: function (msg) {
            alert(msg)
        }
    }
});