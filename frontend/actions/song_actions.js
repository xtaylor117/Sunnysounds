import * as songUtil from '../utils/song_api_utils'

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const DELETE_SONG = "DELETE_SONG"

export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS"
export const CLEAR_SONG_ERRORS = "CLEAR_SONG_ERRORS"

const receiveAllSongs = songs => ({
    type: RECEIVE_ALL_SONGS,
    songs
})

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
})

const deleteSong = song => ({
    type: DELETE_SONG,
    song
})

const receiveSongErrors = errors => ({
    type: RECEIVE_SONG_ERRORS,
    errors
})

const clearSongErrors = errors => ({
    type: CLEAR_SONG_ERRORS,
    errors
})

export const createSong = (artistId, song) => {
    return songUtil.createSong(artistId, song)
        .then( 
            createdSong => (dispatch(receiveSong(createdSong))),
            err => (dispatch(receiveSongErrors(err.responseJSON)))
        )
}

export const editSong = song => {
    return songUtil.updateSong(song)
        .then( 
            editedSong => (dispatch(receiveSong(editedSong))),
            err => (dispatch(receiveSongErrors(err.responseJSON)))
        )
}

export const deleteSong = songId => {
    return songUtil.updateSong(songId)
        .then( song => dispatch(deleteSong(song)))
}

export const receiveAllSongs = artistId => {
    return songUtil.fetchAllSongs(artistId)
        .then( songs => dispatch(receiveAllSongs(songs)))
}

export const receiveSong = songId => {
    return songUtil.fetchSong(songId)
        .then( song => dispatch(receiveSong(song)))
}

export const clearSongErrors = () => dispatch => {
    return dispatch(clearSongErrors())
}
