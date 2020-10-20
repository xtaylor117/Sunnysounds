import { connect } from 'react-redux'
import { selectArtist } from '../../actions/song_actions'
import { receiveArtist } from '../../actions/session_actions'
import ArtistShow from './artist_show'

const mSTP = (state, { match }) => {
    debugger
    const artistId = parseInt(match.params.artistId);
    const artist = selectArtist(state.entities, artistId);

    return {
        artistId,
        artist
    };
};

const mDTP = dispatch => ({
    receiveArtist: artistId => dispatch(receiveArtist(artistId))
});

export default connect(mSTP, mDTP)(ArtistShow);
