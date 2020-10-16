class Api::SongsController < ApplicationController
    def index 
        @songs = Song.where(artist_id: params[:user_id])
        render :index
    end

    def create
        @song = Song.new(song_params)

        if @song.save
            redirect_to api_artist_songs(params[:artist_id])
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def show
        @song = Song.find(params[:id])
        
        if @artist
            render :show
        else
            render json: @song.errors.full_messages, status: 404
        end
    end

    def destroy
        
    end

    private
    def song_params
        params.require(:song).permit(:title, :artist_id, :genre)
    end

end

