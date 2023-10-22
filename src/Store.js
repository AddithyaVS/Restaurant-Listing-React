import {combineReducers,applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import {restaurantReducer} from './Reducers/restaurantReducer'

const reducers = combineReducers({
    restaurantList: restaurantReducer
})

const middleware = [thunk]

 const Store  = createStore(reducers,applyMiddleware(...middleware))

export default Store