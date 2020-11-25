export const createComment = (comment) => {
    debugger
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