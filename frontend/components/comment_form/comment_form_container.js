import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state) => {
    return ({       
        currentUser: state.session.currentUser,
        currentSong: state.ui.currentSong,
    })
};

const mapDispatchToProps = dispatch => ({
    createComment: song => dispatch(createComment(song)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));