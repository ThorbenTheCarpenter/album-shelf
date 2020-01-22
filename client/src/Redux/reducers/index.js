import objectReducer from "./objectReducer"
import { combineReducers } from 'redux'

const allReducers = combineReducers({

    objects: objectReducer
})

export default allReducers