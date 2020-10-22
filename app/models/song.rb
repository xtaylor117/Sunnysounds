class Song < ApplicationRecord
    validates :title, :artist_id, presence: true
    validate :ensure_audiofile

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :Artist
    
    has_one_attached :audiofile
    has_one_attached :photofile

    def ensure_audiofile
        unless self.audiofile.attached?
        errors[:audiofile] << "must be attached"
        end
    end
end