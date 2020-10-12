import { combineReducers } from 'redux';
import artistsReducer from './artists_reducer'

const entitiesReducer = combineReducers({
    artists: artistsReducer
});

export default entitiesReducer;