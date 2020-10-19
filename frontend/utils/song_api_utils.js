export const fetchAllSongs = (artistId) => {
    return $.ajax({
        url: `/api/artists/${artistId}/songs`,
        method: 'GET'
    })
}

export const createSong = (artistId, song) => {
    return $.ajax({
        url: `/api/artists/${artistId}/songs`,
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
    retirm $.ajax({
        url: `/api/songs/${song.id}`,
        method: 'PATCH',
        data: {
            song: song,
        }
    })
}