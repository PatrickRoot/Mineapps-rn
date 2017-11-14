/*
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/11/13 11:20
 * @Author: Patrick <root@sixlab.cn>
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, InputItem, List, Modal, TextareaItem} from "antd-mobile";
import moment from "moment";
import DatePicker from 'antd-mobile/lib/date-picker';
import PickerView from 'antd-mobile/lib/picker-view';
import {addFilm, updateFilm} from "../../actions/FilmAction";
import {getDouban} from "../../utils/Http";
import {DOUBAN_FILM, DOUBAN_SEARCH} from "../../constants/urls";

class AddFilmPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.record ? "修改电影" : "添加电影",
    });
    
    constructor(props) {
        super(props);
        
        const {record} = this.props.navigation.state.params;
        let modify = false;
        let viewDate;
        let doubanScore;
        if (record) {
            modify = true;
            
            viewDate = record.viewDate;
            if (viewDate) {
                viewDate = moment(viewDate);
            } else {
                viewDate = moment(moment().format("YYYY-MM-DD"));
            }
            
            doubanScore = record.doubanScore;
            if (doubanScore != undefined && doubanScore != null) {
                doubanScore = String(doubanScore);
            }
        } else {
            viewDate = moment(moment().format("YYYY-MM-DD"));
        }
        
        this.state = {
            record: modify ? record : {},
            viewDate: viewDate,
            doubanScore: doubanScore,
            modify: modify,
            showDouban: false,
            doubanList: [[]],
            keyword: "",
            doubanPickerVal: "",
        };
    }
    
    updateText(name, val) {
        let record = this.state.record;
        record[name] = val;
        
        this.setState({record: record});
    }
    
    updateDate(val) {
        this.setState({viewDate: val});
    }
    
    updateNumber(val) {
        this.setState({doubanScore: val});
    }
    
    submitInfo() {
        let record = this.state.record;
        
        let viewDate = this.state.viewDate;
        if (viewDate) {
            record.viewDate = moment(viewDate.format("YYYY-MM-DD")).valueOf();
        }
        
        let doubanScore = this.state.doubanScore;
        if (doubanScore) {
            record.doubanScore = new Number(doubanScore);
        }
        
        const {dispatch} = this.props;
        if (this.state.modify) {
            dispatch(updateFilm(record));
        } else {
            dispatch(addFilm(record));
        }
    }
    
    searchDouban() {
        let that = this;
        
        let keyword = this.state.record.movieName;
        let last = this.state.keyword;
        if (last == keyword) {
            this.setState({showDouban: true});
        } else if (keyword) {
    
            let url = DOUBAN_SEARCH + "?q=" + keyword;
            
            getDouban(url, function (data) {
                if(data && data.success){
                    let doubanList = [];
                    let subjects = data.data.subjects;
                    
                    for (let item of subjects) {
                        doubanList.push({
                            label: `[${item.year}]${item.title}`,
                            value: item.id,
                        });
                    }
                    
                    that.setState({
                        showDouban: true,
                        doubanList: [doubanList],
                        doubanPickerVal: doubanList[0].value
                    });
                }
            })
        }
    }
    
    confimDouban(){
        let that = this;
        let record = this.state.record;
        let score = this.state.doubanScore;
    
        let doubanPickerVal = this.state.doubanPickerVal;
        getDouban(DOUBAN_FILM+doubanPickerVal, function (data) {
            if(data && data.success && data.data){
                let item = data.data;
                
                record.movieName = item.title;
                record.produceYear = item.year;
                record.doubanKey = doubanPickerVal;
                score = String(item.rating.average);
                record.doubanScore = item.rating.average;
                
                if(item.directors){
                    let val = "";
                    for (let director of item.directors) {
                        val += director.name +" ";
                    }
                    record.director = val.trim();
                }
                
                let remark = "";
                if (item.countries) {
                    let val = "";
                    for (let country of item.countries) {
                        val += country + " ";
                    }
                    remark += "<国家>：";
                    remark += val.trim();
                }
                if (item.aka) {
                    let val = "";
                    for (let name of item.aka) {
                        val += name + " ";
                    }
                    remark += "<别名>：";
                    remark += val.trim();
                }
                
                let oldMark = record.remark;
                if(oldMark){
                    oldMark = oldMark.trim();
                }
                record.remark = remark;
                if(oldMark){
                    record.remark = remark + "\n" + oldMark;
                }
    
                that.setState({
                    showDouban: false,
                    doubanScore: score,
                    record: record,
                });
            }
        });
    }
    
    closeDouban(){
        this.setState({showDouban: false});
    }
    
    changeDouban(val){
        this.setState({doubanPickerVal: val});
    }
    
    render() {
        let that = this;
        return <List>
            <Modal
                visible={this.state.showDouban}
                transparent
                maskClosable={false}
                title={`${this.state.keyword} 结果`}
                footer={
                    [
                        {text: '关闭', onPress: this.closeDouban.bind(this)},
                        {text: '确定', onPress: this.confimDouban.bind(this)},
                    ]
                }
            >
                <PickerView
                    cols={1}
                    value={this.state.doubanPickerVal}
                    onChange={this.changeDouban.bind(this)}
                    data={this.state.doubanList}
                    cascade={false}
                />
            </Modal>
    
            <InputItem
                value={this.state.record.movieName}
                onChange={this.updateText.bind(this, "movieName")}
                extra={"豆"}
                clear
                onExtraClick={this.searchDouban.bind(this)}
                placeholder="电影名字"
            >电影名字</InputItem>
            
            <InputItem
                value={this.state.record.produceYear}
                onChange={this.updateText.bind(this, "produceYear")}
                clear
                placeholder="出品年份"
            >出品年份</InputItem>
            
            <InputItem
                value={this.state.record.director}
                onChange={this.updateText.bind(this, "director")}
                clear
                placeholder="导演"
            >导演</InputItem>
            
            <DatePicker
                mode="date"
                title="观看日期"
                extra="Optional"
                value={this.state.viewDate}
                onChange={this.updateDate.bind(this)}
            >
                <List.Item arrow="horizontal">观看日期</List.Item>
            </DatePicker>
            
            <InputItem
                value={this.state.doubanScore}
                onChange={this.updateNumber.bind(this)}
                clear
                placeholder="豆瓣评分"
            >豆瓣评分</InputItem>
            
            <TextareaItem
                value={this.state.record.remark}
                onChange={this.updateText.bind(this, "remark")}
                clear
                title="备注"
                placeholder="备注"
                rows={5}
            />
            
            <List.Item>
                <Button onClick={this.submitInfo.bind(this)}>提交修改</Button>
            </List.Item>
        </List>;
    }
}

function select(store) {
    return {
        ShowStore: store.ShowStore
    }
}

export default connect(select)(AddFilmPage);