/*
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/15 15:05
 * @Author: Patrick <root@sixlab.cn>
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Image,
} from 'react-native';
import {
    List,
    Card,
    Modal,
    Picker,
    Button,
    SearchBar,
} from 'antd-mobile';
import {searchShow, updateShow, updateStatus} from "../../actions/ShowAction";
import Stepper from "antd-mobile/lib/stepper";

const Item = List.Item;

const SelectStatus = [
    [
        {
            key: '',
            label: '全部',
            value: '',
        },
        {
            key: '20',
            label: '仅正在观看',
            value: '20',
        },
        {
            key: '30',
            label: '仅未观看',
            value: '30',
        },
    ],
];

class ShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            sValue: ["20"],
            showInfo: false,
            record: {},
        };
    }
    
    componentDidMount() {
        let status = this.state.sValue[0];
        
        const {dispatch} = this.props;
        dispatch(searchShow({
            keyword: this.state.keyword,
            showStatus: status,
        }))
    }
    
    searchText(keyword) {
        this.setState({
            keyword: keyword,
        });
        
        let status = this.state.sValue[0];
        
        const {dispatch} = this.props;
        dispatch(searchShow({
            keyword: keyword,
            showStatus: status,
        }))
    }
    
    searchStatus(sValue) {
        this.setState({
            sValue: sValue,
        });
        let status = sValue[0];
        
        const {dispatch} = this.props;
        dispatch(searchShow({
            keyword: this.state.keyword,
            showStatus: status,
        }))
    }
    
    showInfo(msxShow) {
        this.setState({
            record: msxShow,
            showInfo: true,
            showId: msxShow.id,
            showSeason: msxShow.showSeason,
            showEpisode: msxShow.showEpisode,
        });
    }
    
    closeInfo() {
        // let record = this.state.record;
        // record.showSeason = this.state.showSeason;
        // record.showEpisode = this.state.showEpisode;
        // record: record,
        
        this.setState({
            showInfo: false,
        });
    }
    
    updateInfo() {
        let showId = this.state.showId;
        let season = this.state.showSeason;
        let episode = this.state.showEpisode;
    
        const {dispatch} = this.props;
        dispatch(updateShow(showId, season, episode));
        
        this.setState({
            showInfo: false,
        });
    }
    
    changeSeason(val) {
        this.setState({
            showSeason: val,
            showEpisode: 1
        });
    }
    
    changeEpisode(val) {
        this.setState({
            showEpisode: val,
        });
    }
    
    play() {
        this.changeStatus("20");
    }
    
    pause() {
        this.changeStatus("30");
    }
    
    changeStatus(status){
        let showId = this.state.showId;
    
        const {dispatch} = this.props;
        dispatch(updateStatus(showId, status));
    
        this.setState({
            showInfo: false,
        });
    }
    
    render() {
        let that = this;
        return <View>
            <Modal
                visible={this.state.showInfo}
                transparent
                maskClosable={false}
                onClose={this.closeInfo.bind(this)}
                title={this.state.record.showName}
                footer={
                    [
                        {text: '关闭', onPress: this.closeInfo.bind(this)},
                        {text: '确定', onPress: this.updateInfo.bind(this)},
                    ]
                }
            >
                <View>
                    <Card full>
                        <Card.Header
                            title={`${this.state.record.showSeason} 季 ${this.state.record.showEpisode} 集`}
                            extra={
                                this.state.record.viewStatus == "20" ?
                                    <Button onClick={this.pause.bind(this)}>播放</Button>
                                    :
                                    <Button onClick={this.play.bind(this)}>暂停</Button>
                            }
                        />
                        <Card.Body>
                            <List>
                                <List.Item
                                    key="tv"
                                    extra={this.state.record.tv}
                                >
                                    出品：
                                </List.Item>
                                <List.Item
                                    key="remark"
                                    extra={this.state.record.remark}
                                >
                                    备注：
                                </List.Item>
                                <List.Item
                                    key="season"
                                    extra={<Stepper
                                        showNumber
                                        min={1}
                                        value={this.state.showSeason}
                                        onChange={this.changeSeason.bind(this)}
                                    />}
                                >
                                    季:
                                </List.Item>
                                <List.Item
                                    key="episode"
                                    extra={<Stepper
                                        showNumber
                                        min={1}
                                        value={this.state.showEpisode}
                                        onChange={this.changeEpisode.bind(this)}
                                    />}
                                >
                                    集:
                                </List.Item>
                            </List>
                        </Card.Body>
                    </Card>
                </View>
            </Modal>
            <SearchBar placeholder="请输入关键字"
                       onSubmit={this.searchText.bind(this)}
            />
            <List>
                <Picker data={SelectStatus}
                        title="范围"
                        cascade={false}
                        extra="请选择(默认全部)"
                        value={this.state.sValue}
                        onOk={this.searchStatus.bind(this)}
                >
                    <Item key="选择范围" arrow="horizontal">选择范围</Item>
                </Picker>
            </List>
            {
                this.props.ShowStore.data.map(function (item, index) {
                    let icon = "";
                    if (item.viewStatus === "20") {
                        icon = <Image source={require('../../../images/play.png')}/>
                    } else {
                        icon = <Image source={require('../../../images/pause.png')}/>
                    }
                    
                    let extra = item.showSeason + " · ";
                    let episode = item.showEpisode;
                    
                    if (episode < 10) {
                        extra += "  ";
                    } else if (episode < 100) {
                        extra += " ";
                    }
                    
                    extra += episode;
                    
                    let title = " " + (index + 1) + "." + item.showName;
                    
                    return <Item key={item.id}
                                 thumb={icon}
                                 extra={extra}
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
        ShowStore: store.ShowStore
    }
}

export default connect(select)(ShowPage);
