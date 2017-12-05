/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * License information see the LICENSE file in the project's root directory.
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

import MyPage from '../pages/tab/MyPage';

export default FirstNavigator = StackNavigator({
    MyPage: {
        screen: MyPage,
    },
}, {
    initialRouteParams: {
        testParam: function (msg) {
            alert(msg)
        }
    }
});