export const login = artist => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { artist }
    })
}

export const signup = artist => {
    return $.ajax({
        method: 'POST',
        url: '/api/artists',
        data: { artist }
    })
}

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
}
