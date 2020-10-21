import { DELETE_SONG, RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions'

const songReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs
        case RECEIVE_SONG:
            newState[action.song.id] = action.song
            return newState
        case DELETE_SONG:
            delete newState[action.songId]
            return newState
        default:
            return oldState;
    }
}

export default songReducer;