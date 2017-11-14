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

import ToolboxPage from '../pages/tab/ToolboxPage';
import FilmPage from "../pages/film/FilmPage";
import ShowPage from "../pages/show/ShowPage";
import AddShowPage from "../pages/show/AddShowPage";
import AddFilmPage from "../pages/film/AddFilmPage";

export default ToolboxNavigator = StackNavigator({
    ToolboxPage: {
        screen: ToolboxPage,
    },
    FilmPage: {
        screen: FilmPage,
        navigationOptions: {
            title: "电影列表"
        }
    },
    ShowPage: {
        screen: ShowPage,
        navigationOptions: {
            title: "电视剧列表"
        }
    },
    AddShowPage: {
        screen: AddShowPage
    },
    AddFilmPage: {
        screen: AddFilmPage
    },
}, {
    initialRouteParams: {
        testParam: function (msg) {
            alert(msg)
        }
    }
});