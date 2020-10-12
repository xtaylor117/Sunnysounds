class Artist < ApplicationRecord
    validates :username, :email, :password_digest, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    #SPIRE

    def self.find_by_credentials(un, pw)
        @user = user.find_by(username: username)

        if @user && user.is_password?(pw)
            return @user
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
