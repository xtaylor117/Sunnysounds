export const fetchAllSongs = () => {
    return $.ajax({
        url: '/api/songs',
        method: 'GET'
    })
}

export const fetchSong = (songId) => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        method: 'GET'
    }) 
}

export const createSong = (song) => {
    return $.ajax({
        url: '/api/songs',
        method: 'POST',
        data: {
            song: song,
        }
    }) 
}

export const deleteSong = (songId) => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        method: 'DELETE'
    })
}

export const updateSong = (song) => {
    return $.ajax({
        url: `/api/songs/${song.id}`,
        method: 'PATCH',
        data: {
            song: song,
        }
    })
}