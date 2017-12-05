/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * License information see the LICENSE file in the project's root directory.
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/11/13 11:19
 * @Author: Patrick <root@sixlab.cn>
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';


class AddShowPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "编号" + navigation.state.params.order.orderCode,
    });

}

function select(store) {
    return {
        ShowStore: store.ShowStore
    }
}

export default connect(select)(AddShowPage);