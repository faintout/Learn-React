import { combineReducers} from 'redux'
import details from './children/details'
import list from './children/list'
import user from './children/user'
//把所需要处理的值，结合起来
let Reducers = combineReducers({
    list,
    details,
    user
})
export default Reducers