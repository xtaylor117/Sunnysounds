import { connect } from 'react-redux'
import { selectArtist, receiveAllSongs, deleteSong, receiveAllArtists } from '../../actions/song_actions'
import ArtistShow from './artist_show'
import { openModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    const artistId = parseInt(ownProps.match.params.artistId);
    const artist = selectArtist(state.entities, artistId);
    const songs = Object.values(state.entities.songs)
    const userSongs = Object.values(state.entities.songs).filter(song => song.artist_id === state.session.currentUser.id)
    const length = userSongs.length
    const latestSong = userSongs[length - 1]
    const artists = Object.values(state.entities.artists)

    return {
        latestSong,
        currentUser,
        songs,
        artistId,
        artist,
        artists
    };
};

const mDTP = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    deleteSong: songId => dispatch(deleteSong(songId)),
    openModal: (modal) => dispatch(openModal(modal)),
    receiveAllArtists: () => dispatch(receiveAllArtists())
});

export default connect(mSTP, mDTP)(ArtistShow);
