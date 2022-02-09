// import { createStore } from 'redux'

//create注册

export function reducer(state=0,action){
    switch(action.type){
        case 'add':
            return ++state
        case 'del':
            return --state
        default :
            return 0
    }

}
// let store= createStore(reducer)

// function listener(){
//    let value =  store.getState()
//    console.log('value',value);
// }

// store.subscribe(()=>listener())

export function returnType(type){
    return {type}
}
export function addSync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(returnType('add'))
        },1000)
    }
}