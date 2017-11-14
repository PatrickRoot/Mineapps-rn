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
import TabReducer from './nav/TabReducer';

import NavHomeReducer from './nav/NavHomeReducer';
import NavToolboxReducer from './nav/NavToolboxReducer';
import NavMyReducer from './nav/NavMyReducer';

import FilmReducer from './film/FilmReducer';
import ShowReducer from './show/ShowReducer';

export default combineReducers({
    
    UserStore: UserReducer,
    TabStore: TabReducer,
    
    NavHomeStore: NavHomeReducer,
    NavToolboxStore: NavToolboxReducer,
    NavMyStore: NavMyReducer,
    
    FilmStore: FilmReducer,
    ShowStore: ShowReducer,
});