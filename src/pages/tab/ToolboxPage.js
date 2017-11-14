/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 22:34
 * @author: Patrick <root@sixlab.cn>
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List} from 'antd-mobile';

import {Image} from 'react-native';
import {
    NAV_TOOLBOX_ADD_FILM, NAV_TOOLBOX_ADD_MOVIE, NAV_TOOLBOX_ADD_SHOW, NAV_TOOLBOX_FILM,
    NAV_TOOLBOX_SHOW
} from "../../constants/types";

const Item = List.Item;
const Brief = Item.Brief;

class ToolboxPage extends Component {
    render() {
        const {dispatch} = this.props;
        
        return <List renderHeader={() => '工具列表'}>
    
            <Item key={"addFilm"}
                  thumb={<Image source={require('../../../images/play.png')}/>}
                  arrow="horizontal"
                  onClick={() => {
                      dispatch({
                          type: NAV_TOOLBOX_ADD_FILM
                      })
                  }}
            >
                添加电影<Brief>添加电影</Brief>
            </Item>
    
            <Item key={"addShow"}
                  thumb={<Image source={require('../../../images/play.png')}/>}
                  arrow="horizontal"
                  onClick={() => {
                      dispatch({
                          type: NAV_TOOLBOX_ADD_SHOW
                      })
                  }}
            >
                添加电视剧<Brief>添加电视剧</Brief>
            </Item>
            
            <Item key={"film"}
                thumb={<Image source={require('../../../images/video.png')}/>}
                onClick={() => {
                    dispatch({
                        type: NAV_TOOLBOX_FILM
                    })
                }}
                arrow="horizontal"
            >
                电影记录工具<Brief>记录电影</Brief>
            </Item>
    
            <Item key={"show"}
                  thumb={<Image source={require('../../../images/live.png')}/>}
                  arrow="horizontal"
                  onClick={() => {
                      dispatch({
                          type: NAV_TOOLBOX_SHOW
                      })
                  }}
            >
                电视剧记录工具<Brief>记录电视剧</Brief>
            </Item>
        </List>;
    }
}

function select(store) {
    return {
    }
}

export default connect(select)(ToolboxPage);