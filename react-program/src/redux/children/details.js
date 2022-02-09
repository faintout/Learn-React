
function details(state = {
    data:[],
    loading:true
}, action) {
    switch (action.type) {
        case 'updateDetailInfo':
            state.data = action.data
            return Object.assign({},state)
        default:
            return state
    }
}
export default details