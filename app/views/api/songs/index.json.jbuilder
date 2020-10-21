@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :title, :artist_id, :genre
        # json.audioUrl url_for(song.audiofile)
    end
end