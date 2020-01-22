import { FETCH_OBJECTS, ADD_OBJECT, DELETE_OBJECT, EDIT_OBJECT } from '../actions/types'

const initialState = {
    listOfObjects: [],
    object: {},
    editObj: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        
        case FETCH_OBJECTS:
            return {
                ...state,
                listOfObjects: action.payload
            };
        
        case ADD_OBJECT: 
            return {
                ...state,
                object: action.payload
            };

        case DELETE_OBJECT: 
            return {
                ...state,
                object: action.payload
            };
        
        case EDIT_OBJECT: 
            return {
                ...state,
                editObj: action.payload
            };

        default: 
            return state;
    }
}