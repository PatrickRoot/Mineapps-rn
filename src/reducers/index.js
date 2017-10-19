/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 22:22
 * @author: Patrick <root@sixlab.cn>
 */
import {combineReducers} from 'redux';

import UserReducer from './UserReducer';
import TabReducer from './TabReducer';

import NavHomeReducer from './NavHomeReducer';
import NavFilmReducer from './NavFilmReducer';
import NavShowReducer from './NavShowReducer';
import NavMyReducer from './NavMyReducer';

import FilmReducer from './FilmReducer';
import ShowReducer from './ShowReducer';

export default combineReducers({
    UserStore: UserReducer,
    TabStore: TabReducer,

    NavHomeStore: NavHomeReducer,
    NavFilmStore: NavFilmReducer,
    NavShowStore: NavShowReducer,
    NavMyStore: NavMyReducer,

    FilmStore: FilmReducer,
    ShowStore: ShowReducer,
});