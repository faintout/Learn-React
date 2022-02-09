function list(state = {
    data:[],
    loading:false
}, action) {
    switch (action.type) {
        case 'updateDataList':
            state.data = action.data
            return state
        default:
            return state
    }
}
export default list