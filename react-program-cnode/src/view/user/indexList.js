import React, { Components } from "React";
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Avatar, List,Pagination } from 'antd'
export default function IndexList(props) {
    return (
        <div>
            <List
                dataSource={props.data}
                renderItem={
                    item => (
                        <List.Item
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item.author.avatar_url}></Avatar>
                                }
                                title={
                                    <div>
                                        <Link to={'/details/' + item.id}>{item.title}</Link>
                                    </div>
                                }
                                description={
                                    <p>
                                        <Link to={'/user/' + item.user}>{item.user}</Link>
                                        文章发表：{moment(item.create_at).format('lll')}
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