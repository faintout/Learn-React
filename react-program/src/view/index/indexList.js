import React, { Component } from 'react'
import { Avatar, List,Pagination } from 'antd'
import { Link } from 'react-router-dom'
import TextTag from '../../components/textTag'
import { connect } from 'react-redux'
import axios from 'axios'
import moment from 'moment'
class IndexList extends Component {
    constructor(args) {
        super(args)
        this.state = {
            page: 1,
            pageSize:20,
            // dataList:[],
            tab: ''
        }
    }
    getListData(type) {
        return new Promise(res=>{
            this.props.dispatch(async dispatch => {
                let { data: { data: dataList } } = await axios.get(`https://cnodejs.org/api/v1/topics?tab=${type||this.state.tab}&page=${this.state.page}&limit=${this.state.pageSize}`)
                await dispatch({ 'type': 'updateDataList', data: dataList })
                res()
            })
        })
    }
    componentDidMount(){
        this.getListData('all')
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
    pageChange = (page, pageSize)=>{
        this.setState({
            page:page
        },async()=>{
            await this.getListData()
        })
    }
    async shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.tab !== this.props.tab) {
            this.setState({
                tab:nextProps.tab,
                page:1
            },async ()=>{
                await this.getListData(nextProps.tab)
                return true
            })
        }
        return false
    }
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log('update-01-父组建的更新会触发这个函数')
    // }
    render() {
        return (
            <div>
                <List
                    loading={this.props.loading}
                    dataSource={this.props.data}
                    renderItem={
                        item => (
                            <List.Item
                            actions={[
                                    "浏览：" + item.visit_count,
                                    "回复：" + item.reply_count,
                                    
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
                                            文章发表：{moment(item.create_at).format('lll')}
                                        </p>
                                    }
                                >
                                </List.Item.Meta>
                            </List.Item>
                        )
                    }
                />
                <Pagination  onChange={this.pageChange} showSizeChanger={false} defaultCurrent={1} current={this.state.page} total={440} pageSize={this.state.pageSize}/>

            </div>
        )
    }
}

export default connect(state => state.list)(IndexList)
