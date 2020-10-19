class Song < ApplicationRecord
    validates :title, :artist_id, presence: true

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :Artist
    
    has_one_attached :audio_url

end