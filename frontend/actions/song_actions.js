import * as songUtil from '../utils/song_api_utils'
import * as artistUtil from '../utils/session_api_util'

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const DELETE_SONG = "DELETE_SONG"
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS"
export const CLEAR_SONG_ERRORS = "CLEAR_SONG_ERRORS"
export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS"

export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG"
export const RECEIVE_PREVIOUS_SONG = "RECEIVE_PREVIOUS_SONG"
export const RECEIVE_NEXT_SONG = "RECEIVE_NEXT_SONG"

const fetchCurrentSong = (song) => ({
    type: RECEIVE_CURRENT_SONG,
    song
})

const fetchPrevSong = (song) => ({
    type: RECEIVE_PREVIOUS_SONG,
    song
})

const fetchNextSong = (song) => ({
    type: RECEIVE_NEXT_SONG,
    song
})

const fetchAllSongs = (songs) => ({
    type: RECEIVE_ALL_SONGS,
    songs
})

const fetchAllArtists = (users) => ({
    type: RECEIVE_ALL_ARTISTS,
    users
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

export const receiveAllArtists = () => dispatch => {
    return artistUtil.fetchAllArtists()
        .then(
            artists => (dispatch(fetchAllArtists(artists)))
        )
}

export const receiveSong = (songId) => dispatch => {
    return songUtil.fetchSong(songId)
        .then(
            song => (dispatch(fetchSong(song)))
        )
}

export const receiveCurrentSong = (songId) => dispatch => {
    return songUtil.fetchSong(songId)
        .then(
            song => (dispatch(fetchCurrentSong(song)))
        )
}

export const receivePrevSong = (songId) => dispatch => {
    return songUtil.fetchSong(songId)
        .then(
            song => (dispatch(fetchPrevSong(song)))
        )
}

export const receiveNextSong = (songId) => dispatch => {
    return songUtil.fetchSong(songId)
        .then(
            song => (dispatch(fetchNextSong(song)))
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