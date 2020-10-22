import { connect } from 'react-redux'
import { selectArtist, receiveAllSongs, deleteSong, receiveSong } from '../../actions/song_actions'
import { receiveArtist } from '../../actions/session_actions'
import ArtistShow from './artist_show'

const mSTP = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    const artistId = parseInt(ownProps.match.params.artistId);
    const artist = selectArtist(state.entities, artistId);
    const songs = Object.values(state.entities.songs)
    const userSongs = Object.values(state.entities.songs).filter(song => song.artist_id === state.session.currentUser.id)
    const length = userSongs.length
    const latestSong = userSongs[length - 1]

    return {
        latestSong,
        currentUser,
        songs,
        artistId,
        artist
    };
};

const mDTP = dispatch => ({
    receiveArtist: artistId => dispatch(receiveArtist(artistId)),
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    deleteSong: songId => dispatch(deleteSong(songId)),
    receiveSong: songId => dispatch(receiveSong(songId))
});

export default connect(mSTP, mDTP)(ArtistShow);
