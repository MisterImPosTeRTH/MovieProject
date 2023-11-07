import {combineReducers} from 'redux'
import authReducer from './AuthSlice'
const rootReducer = combineReducers({
  auths:authReducer
})

export default rootReducer