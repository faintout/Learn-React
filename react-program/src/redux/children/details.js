
function details(state = {
    data:[],
    loading:true
}, action) {
    switch (action.type) {
        case 'updateDetailInfo':
            return Object.assign({},state,{data:action.data})
        default:
            return state
    }
}
export default details