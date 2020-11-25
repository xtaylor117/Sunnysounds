@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :author_id, :song_id
    end
end