import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import photosReducer from '../reducers/photosReducer'
const configStore = () => {
    const store = createStore(combineReducers({
        photos: photosReducer,
    }), applyMiddleware(thunk))
    
    return store
}
export default configStore