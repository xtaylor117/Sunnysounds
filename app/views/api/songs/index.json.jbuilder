@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :title, :artist_id, :genre

        if (song.audiofile.attached?)
            json.audioUrl url_for(song.audiofile)
        end
        
        if (song.photofile.attached?)
            json.photoUrl url_for(song.photofile)
        end

    end
end