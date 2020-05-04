import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddlware from 'redux-thunk';
import data from './data/data.json';

//initial State
const startState = {
    cards:[]
}


//Actions
export const initialCard =()=>{
    return{
        type:"INITIALCARDS",
        cards:data
    }
}

export const addItem = (item)=>{
    return {
        type:"ADD",
        item
    }
}

//reducers
export const reducer=  (state=initialCard,action)=>{
    switch (actions.typ) {
        case 'INITIALCARDS':
            return {
                cards:action.cards
            }
        case 'ADD':{
            return {
                ...state,
                cards:[...state.cards,action.item]
            }
        }
        default:
            return state;
    }
}

//create store
export const initStore = (initialState = startState)=>{
    return createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunkMiddlware)))
}

