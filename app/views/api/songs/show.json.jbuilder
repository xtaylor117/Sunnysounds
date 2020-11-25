json.extract! @song, :id, :title, :artist_id, :genre
    if (@song.audiofile.attached?)
        json.audioUrl url_for(@song.audiofile)
    end
    
    if (!@song.photofile.attached?)
        json.photoUrl url_for("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/sunny_logo.png")
    end
    