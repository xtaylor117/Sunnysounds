import * as commentUtil from '../utils/comment_api_utils';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS'

const receiveComment = (comment) => {
    return ({
        type: RECEIVE_COMMENT,
        comment,
    });
};

const removeComment = (commentId) => {
    return ({
        type: REMOVE_COMMENT,
        commentId,
    });
};

const fetchAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

export const receiveAllComments = () => dispatch => {
    return commentUtil.fetchAllComments()
        .then(
            comments => (dispatch(fetchAllComments(comments)))
        )
}

export const createComment = (comment) => (dispatch) => {
    return (
        commentUtil.createComment(comment)
            .then(comment => {
                return dispatch(receiveComment(comment))
            })
    );
};

export const deleteComment = (commentId) => (dispatch) => {
    return (
        commentUtil.deleteComment(commentId)
            .then(() => { dispatch(removeComment(commentId)) })
    );
};