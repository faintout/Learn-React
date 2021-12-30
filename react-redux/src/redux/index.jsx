import { createStore } from 'redux'

//create注册
function reducer(state=0,action){
    switch(action.type){
        case 'add':
            return ++state
        case 'del':
            return --state
        default :
            return 0
    }

}
let store= createStore(reducer)

function listener(){
   let value =  store.getState()
   console.log('value',value);
}

//订阅
store.subscribe(()=>listener())

//发送
store.dispatch({
    type:'add'
})
store.dispatch({
    type:'add'
})