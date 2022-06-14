import React, { Component } from 'react'
import { Avatar, List } from 'antd'
import { Link } from 'react-router-dom'
import TextTag from '../../components/textTag'
import { connect } from 'react-redux'
import axios from 'axios'
class IndexList extends Component {
    constructor(args) {
        super(args)
        this.state = {
            pageSize: 1,
            // dataList:[],
            tab: ''
        }
        this.getListData('all')
    }
    getListData(type) {
        return new Promise(res=>{
            this.props.dispatch(async dispatch => {
                let { data: { data: dataList } } = await axios.get(`https://cnodejs.org/api/v1/topics?tab=${type}&page=${this.state.pageSize}&limit=20`)
                await dispatch({ 'type': 'updateDataList', data: dataList })
                res()
            })
        })
    }
    // componentDidUpdate() {

    //     this.getListData()
    // }
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log('update-01-父组建的更新会触发这个函数')
    // }
    // getSnapshotBeforeUpdate() {
    //     this.getListData()
    // }
    // static getDerivedStateFromProps(nextProps, state) {
    //     let { tab } = state
    //     console.log('state', nextProps.tab,state.tab);
    //     if (tab != nextProps.tab) {
    //         return {
    //             tab: nextProps.tab
    //         }
    //     }
    //     return {
    //         tab: nextProps.tab
    //     }
    // }
    async shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.tab,this.props.tab)
        if (nextProps.tab !== this.props.tab) {
            await this.getListData(nextProps.tab)
            return true
        }
        // if(this.state.tab!==nextState.tab){
        //     this.getListData(nextProps.tab)
        //     return true
        // }
        
        return false
    }
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log('update-01-父组建的更新会触发这个函数')
    // }
    render() {
        return (
            <div>
                {console.log(this.props)}
                <List
                    loading={this.props.loading}
                    dataSource={this.props.data}
                    renderItem={
                        item => (
                            <List.Item
                                actions={[
                                    "回复：" + item.reply_count,
                                    "浏览：" + item.visit_count
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src={item.author.avatar_url}></Avatar>
                                    }
                                    title={
                                        <div>
                                            <TextTag data={item}></TextTag>
                                            <Link to={'/details/' + item.id}>{item.title}</Link>
                                        </div>
                                    }
                                    description={
                                        <p>
                                            <Link to={'/user/' + item.user}>{item.user}</Link>
                                            &nbsp;&nbsp;
                                            文章发表：2022-01-06
                                        </p>
                                    }
                                >
                                </List.Item.Meta>
                            </List.Item>
                        )
                    }
                />

            </div>
        )
    }
}

export default connect(state => state.list)(IndexList)
