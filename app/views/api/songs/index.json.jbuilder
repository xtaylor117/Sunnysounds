@songs.each do |song|
    json.set! song.id do 
        json.extract! song, 
            :title, 
            :artist_id, 
            :genre, 
            :created_at
    end
end