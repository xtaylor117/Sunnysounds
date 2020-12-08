import { connect } from 'react-redux'
import { selectArtist, receiveAllSongs, deleteSong, receiveAllArtists, receiveSong, receiveCurrentSong, receiveNextSong, receivePrevSong } from '../../actions/song_actions'
import { createComment, receiveAllComments } from '../../actions/comment_actions'
import ArtistShow from './artist_show'
import { openModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    const currentSong = state.ui.playbar.currentSong;
    const artistId = parseInt(ownProps.match.params.artistId);
    const artist = selectArtist(state.entities, artistId);
    const songs = Object.values(state.entities.songs)
    const userSongs = Object.values(state.entities.songs).filter(song => song.artist_id === state.session.currentUser.id)
    const length = userSongs.length
    const artists = Object.values(state.entities.artists)
    const comments = Object.values(state.entities.comments)

    return {
        prevSong: state.ui.playbar.prevSong,
        currentSong,
        currentUser,
        songs,
        artistId,
        artist,
        artists,
        comments
    };
};

const mDTP = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    deleteSong: songId => dispatch(deleteSong(songId)),
    openModal: (modal) => dispatch(openModal(modal)),
    receiveAllArtists: () => dispatch(receiveAllArtists()),
    receiveSong: songId => dispatch(receiveSong(songId)),
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    receivePrevSong: songId => dispatch(receivePrevSong(songId)),
    receiveNextSong: songId => dispatch(receiveNextSong(songId)),
    createComment: song => dispatch(createComment(song)),
    receiveAllComments: () => dispatch(receiveAllComments())
});

export default connect(mSTP, mDTP)(ArtistShow);
