
import About from '../view/about'
import Book from '../view/book'
import Details from '../view/details'
import Index from '../view/index'
import User from '../view/user'
export const routes = [
    {
        exact:true,
        path:"/",
        element:Index
    },
    {
        path:"/details/:id",
        element:Details
    },
    {
        path:"/index/:id",
        element:Index,
    },
    {
        path:"/user/:id",
        element:User
    },
    {
        path:"/book",
        element:Book
    },
    {
        path:"/about",
        element:About
    },
]