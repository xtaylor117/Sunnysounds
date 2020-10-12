class Api::SessionsController < ApplicationController
    
    def new 
        render :new
    end

    def create
        @artist = Artist.find_by_credentials(params[:artist][:username], params[:artist][:password])

        if @artist.nil?
            flash.now[:errors] = ['Invalid username or password.']
            render :new
        else
            login!(@artist)
            redirect_to artist_url(@artist)
        end
    end

    def destroy
        logout!
        redirect_to
    end
end
