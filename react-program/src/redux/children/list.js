function list(state = {
    data:[],
    loading:false
}, action) {
    switch (action.type) {
        case 'updateDataList':
            return Object.assign({},state,{data:action.data})
        default:
            return state
    }
}
export default list