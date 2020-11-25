export const createComment = (comment) => {
    return $.ajax({
        method: `POST`,
        url: `/api/comments`,
        data: { comment }
    })
}

export const deleteComment = (commentId) => {
    return $.ajax({
        method: `DELETE`,
        url: `/api/comments/${commentId}`,
    })
}

export const fetchAllComments = () => {
    return $.ajax({
        url: 'api/comments',
        method: 'GET'
    })
}