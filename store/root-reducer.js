import { combineReducers } from 'redux'

import mealsReducer from './reducers/meals.reducer'

export default combineReducers({
    meals: mealsReducer,
})