import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import lengthReducer from '../reducers/lengthReducer'
import photosReducer from '../reducers/photosReducer'
const configStore = () => {
    const store = createStore(combineReducers({
        photos: photosReducer,
        length:lengthReducer
    }), applyMiddleware(thunk))
    
    return store
}
export default configStore