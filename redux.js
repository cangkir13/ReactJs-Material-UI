const {createStore} = require('redux')

let stateServer = {
    age:0,
    name:'umar'
}

const conterState = (state= stateServer, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age:state.age + 1
            }
        case 'RENAME':
            return {
                ...state,
                name:'ganti nama'
            }
        default:
            return state
    }
}


let store = createStore(conterState)

console.log(store)
// console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState())
} )

// add age
store.dispatch({type:'ADD_AGE'})
// console.log(store.getState());
// rename
store.dispatch({type:'RENAME'})
// console.log(store.getState());