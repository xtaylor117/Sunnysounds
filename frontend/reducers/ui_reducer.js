import { combineReducers } from 'redux';
import modal from './modal_reducer';
import currentSong from './current_song_reducer'

export default combineReducers({
    modal,
    currentSong
});
