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
import {
    View,
} from 'react-native';
import {
    List,
    SearchBar,
} from 'antd-mobile';
import {searchFilm, searchRecentlyFilm} from "../../actions/FilmAction";
import {NAV_TOOLBOX_ADD_FILM} from "../../constants/types";

const Item = List.Item;

class FilmPage extends Component {
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(searchRecentlyFilm(10))
    }
    
    searchText(keyword) {
        const {dispatch} = this.props;
        dispatch(searchFilm({
            keyword: keyword,
        }))
    }
    
    showInfo(msxFilm) {
        const {dispatch} = this.props;
        dispatch({
            type: NAV_TOOLBOX_ADD_FILM,
            record: msxFilm,
        });
    }
    
    render() {
        let that = this;
        
        return <View>
            <SearchBar placeholder="请输入关键字"
                       onSubmit={this.searchText.bind(this)}
            />
            {
                this.props.FilmStore.data.map(function (item, index) {
                    let produceYear = item.produceYear;
                    let title = " " + (index + 1) + "." ;
                    
                    if (produceYear) {
                        title += " [";
                        title += produceYear;
                        title += "] ";
                    }
                    
                    title += item.movieName;
                    
                    return <Item key={item.id}
                                 onClick={that.showInfo.bind(that, item)}
                    >
                        {title}
                    </Item>;
                })
            }
        </View>
    }
}

function select(store) {
    return {
        FilmStore: store.FilmStore
    }
}

export default connect(select)(FilmPage);