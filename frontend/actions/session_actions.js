import * as APIUtil from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const clearErrors = errors => ({
    type: CLEAR_SESSION_ERRORS,
    errors
})


export const signup = artist => dispatch => {
    return APIUtil.signup(artist)
        .then(
            user => (dispatch(receiveCurrentUser(user))), 
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
}
   
export const login = artist => dispatch => {
    return APIUtil.login(artist)
        .then(
            user => (dispatch(receiveCurrentUser(user))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
}
 
export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(user => (dispatch(logoutCurrentUser())))
}

export const clearSessionErrors = (errors) => dispatch => {
    return dispatch(clearErrors(errors))
}
