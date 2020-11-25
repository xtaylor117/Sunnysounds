json.comment do 
    json.extract! @comment, 
        :id, 
        :body, 
        :song_id,
        :author_id, 
        :created_at
end

# json.author do 
#     json.extract! @comment.author, :id, :username
#     if @comment.author.profile_pic.attached?
#         json.photoURL url_for(@comment.author.profile_pic)
#     else
#         json.photoUrl ''
#     end
# end