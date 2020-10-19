import { combineReducers } from 'redux';
import artistsReducer from './artists_reducer'
import songReducer from './song_reducer'

const entitiesReducer = combineReducers({
    artists: artistsReducer,
    songs: songReducer
});

export default entitiesReducer;