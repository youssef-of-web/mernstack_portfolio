import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import ProfileReducer from './ProfileReducer'

export default combineReducers({
   auth: AuthReducer,
   profile: ProfileReducer,
   errors: ErrorReducer
})