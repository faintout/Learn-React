import Home from "../components/Home"
import News from "../components/News"
import NoPage from "../components/NoPage"
import User from "../components/User"
import NewsIndex from "../components/NewsIndex"
import NewsDetail from "../components/NewsDetail"

export const routes = [
    {
        exact:true,
        path:"/",
        element:Home
    },
    {
        path:"/User",
        element:User
    },
    {
        path:"/News",
        element:News,
        children:[
            {
                exact:true,
                path:"/News/",
                element:NewsIndex
            },
            {
                path:"/News/NewsDetail/:id",
                element:NewsDetail
            },
            {
                path:"*",
                element:NoPage
            }
        ]
    },
    {
        path:"*",
        element:NoPage
    },
]