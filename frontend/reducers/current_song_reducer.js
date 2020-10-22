import { RECEIVE_SONG } from '../actions/song_actions';

const _nullSong = { currentSong: null }

export default function currentSongReducer(oldState = _nullSong, action) {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SONG:
            nextState.currentSong = action.currentSong
            return nextState
        default:
            return oldState;
    }
}
