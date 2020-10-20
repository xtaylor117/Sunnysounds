import { connect } from 'react-redux'
import { selectArtist, receiveAllSongs } from '../../actions/song_actions'
import { receiveArtist } from '../../actions/session_actions'
import ArtistShow from './artist_show'

const mSTP = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    const artistId = parseInt(ownProps.match.params.artistId);
    const artist = selectArtist(state.entities, artistId);
    const songs = Object.values(state.entities.songs)

    return {
        currentUser,
        songs,
        artistId,
        artist
    };
};

const mDTP = dispatch => ({
    receiveArtist: artistId => dispatch(receiveArtist(artistId)),
    receiveAllSongs: () => dispatch(receiveAllSongs())
});

export default connect(mSTP, mDTP)(ArtistShow);
