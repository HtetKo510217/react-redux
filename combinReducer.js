const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = "BUY-CAKE";
const BUY_ICECREAM = "BUY-ICECREAM";
const combineReducers = redux.combineReducers;
function byCake () {
    return {
        type: BUY_CAKE,
        info: "first redux action"
    }
}
function byIceCreams () {
    return {
        type: BUY_ICECREAM,
        info: "first redux action"
    }
}

const initialCakeState = {
    numberOfCakes : 10
}
const initialIceCreamState = {
    numberOfIceCreams : 20
}

const cakeReducer = (state = initialCakeState,action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numberOfCakes : state.numberOfCakes -1,
        }
        default : return state
    }
}
const iceCreamReducer = (state = initialIceCreamState,action) => {
    switch(action.type) {
        case BUY_ICECREAM : return {
            ...state,
            numberOfIceCreams : state.numberOfIceCreams -1,
        }
        default : return state
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
})
const store = createStore(rootReducer)
console.log('Initial state',store.getState());
const unsubscribe = store.subscribe(()=>console.log('Updated state',store.getState()));
store.dispatch(byCake())
store.dispatch(byCake())
store.dispatch(byCake())
store.dispatch(byIceCreams())
store.dispatch(byIceCreams())
unsubscribe()