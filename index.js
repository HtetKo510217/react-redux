const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = "BUY-CAKE";

function byCake () {
    return {
        type: BUY_CAKE,
        info: "first redux action"
    }
}

// (previousState,action) => newState

const initialState = {
    numberOfCakes : 10
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numberOfCakes : state.numberOfCakes -1,
        }
        default : return state
    }
}

const store = createStore(reducer)
console.log('Initial state',store.getState());
const unsubscribe = store.subscribe(()=>console.log('Updated state',store.getState()));
store.dispatch(byCake())
store.dispatch(byCake())
store.dispatch(byCake())
unsubscribe()