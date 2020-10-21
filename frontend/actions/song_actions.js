import * as songUtil from '../utils/song_api_utils'

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const DELETE_SONG = "DELETE_SONG"

export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS"
export const CLEAR_SONG_ERRORS = "CLEAR_SONG_ERRORS"

const fetchAllSongs = (songs) => ({
    type: RECEIVE_ALL_SONGS,
    songs
})

const fetchSong = (song) => ({
    type: RECEIVE_SONG,
    song
})

const removeSong = (songId) => ({
    type: DELETE_SONG,
    songId
})

const receiveSongErrors = (errors) => ({
    type: RECEIVE_SONG_ERRORS,
    errors
})
// 
const removeSongErrors = (errors) => ({
    type: CLEAR_SONG_ERRORS,
    errors
})

export const receiveAllSongs = () => dispatch => {
    return songUtil.fetchAllSongs()
        .then(
            songs => (dispatch(fetchAllSongs(songs)))
        ) 
}

export const receiveSong = (songId) => dispatch => {
    return songUtil.fetchSong(songId)
        .then(
            song => (dispatch(fetchSong(song)))
        )
}

export const createSong = (song) => dispatch => {
    return songUtil.createSong(song)
        .then( 
            createdSong => (dispatch(fetchSong(createdSong))),
            err => (dispatch(receiveSongErrors(err.responseJSON)))
        )
}

export const editSong = (song) => dispatch => {
    return songUtil.updateSong(song)
        .then( 
            editedSong => (dispatch(fetchSong(editedSong))),
            err => (dispatch(receiveSongErrors(err.responseJSON)))
        )
}

export const deleteSong = (songId) => dispatch => {
    debugger
    return songUtil.deleteSong(songId)
        .then(() => dispatch(removeSong(songId)))
}


export const clearSongErrors = () => dispatch => {
    return dispatch(removeSongErrors())
}

export const selectSong = ({ songs }, songId) => {
    return songs[songId];
};

export const selectArtist = ({ artists }, artistId) => {
    return artists[artistId];
};