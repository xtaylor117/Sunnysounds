class Api::ArtistsController < ApplicationController
       
    def new
        @artist = Artist.new
        render :new
    end

    def create
        @artist = Artist.new(artist_params)

        if @artist.save
            login!(@artist)
            redirect_to api_artist_url(@artist)
        else
            flash.now[:errors] = @artist.errors.full_messages
            render :new
        end
    end

    def index
        @artists = Artist.all
        render :index
    end

    def show
        @artist = Artist.find(params[:id])
        
        if @artist
            render :show
        else
            render json: @artist.errors.full_messages, status: 404
        end
    end

    def update
        @artist = Artist.find(params[:id])

        if @artist.update(artist_params)
            redirect_to api_artist_url(@artist)
        else
            render json: @artist.errors.full_messages, status: 422
        end
    end

    def destroy
        @artist = Artist.find(params[:id])

        if @artist.destroy
            redirect_to api_artists_url
        else
            render plain: 'This artists does not exist!'
        end
    end

    private
    def artist_params
        params.require(:artist).permit(:username, :email, :password)
    end
end
