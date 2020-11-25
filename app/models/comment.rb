class Comment < ApplicationRecord
    validates :body, :song_id, :author_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Artist
   
    belongs_to :song,
        primary_key: :id,
        foreign_key: :song_id,
        class_name: :Song
end
