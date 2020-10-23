import * as songUtil from '../utils/song_api_utils'
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const RECEIVE_MODAL_SONG = 'RECEIVE_MODAL_SONG';

export const openModal = (modal) => {
    return {
        type: OPEN_MODAL,
        modal
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};


// const receiveModalSong = (song) => {
//     return {
//         type: RECEIVE_MODAL_SONG,
//         song
//     }
// }

// export const receiveModalSong = (songId) => dispatch => {
//     return songUtil.fetchSong(songId)
//         .then(
//             song => (dispatch(fetchModalSong(song)))
//         )
// }

