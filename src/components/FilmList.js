/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * License information see the LICENSE file in the project's root directory.
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/15 15:08
 * @Author: Patrick <root@sixlab.cn>
 */
import React, {Component} from 'react';
import {
    ListView,
} from 'react-native';

class FilmList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <ListView>

            </ListView>
        )
    }
}

function select(store) {
    return {
        filmData:store.FilmStore.filmData
    }
}

export default connect(select)(FilmList);