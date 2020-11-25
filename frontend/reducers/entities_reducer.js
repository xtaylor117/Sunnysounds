import { combineReducers } from 'redux';
import artistsReducer from './artists_reducer'
import songReducer from './song_reducer'
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    artists: artistsReducer,
    songs: songReducer,
    comments: commentsReducer
});

export default entitiesReducer;


