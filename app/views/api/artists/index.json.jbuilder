@artists.each do |artist|
    json.set! artist.id do 
        json.extract! artist, :username, :id

        # if (song.audiofile.attached?)
        #     json.audioUrl url_for(song.audiofile)
        # end
        
        # if (song.photofile.attached?)
        #     json.photoUrl url_for(song.photofile)
        # end

    end
end