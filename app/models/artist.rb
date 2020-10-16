class Artist < ApplicationRecord
    validates :username, :password_digest, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :songs,
    foreign_key: :artist_id,
    class_name: :Song

    #SPIRE

    def self.find_by_credentials(un, pw)
        @artist = Artist.find_by(username: un)

        if @artist && @artist.is_password?(pw)
            return @artist
        else
            return nil
        end
    end

    def password=(pw)
        self.password_digest = BCrypt::Password.create(pw)
        @password = pw
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
