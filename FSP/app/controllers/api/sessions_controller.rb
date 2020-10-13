class Api::SessionsController < ApplicationController

    def create
        @artist = Artist.find_by_credentials(params[:artist][:username], params[:artist][:password])
 
        if @artist.nil?
            render json: ['Invalid username or password.'], status: 401
        else
            login!(@artist)
            redirect_to api_artist_url(@artist)
        end
    end

    def destroy
        unless current_user
            render json: user.errors.full_messages, status: 404
        else
            logout!
            render json: {}
        end
    end
end
