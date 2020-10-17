class Api::SongsController < ApplicationController

    def index 
        @songs = Song.where(artist_id: params[:artist_id])
        render :index
    end

    def create
        @song = Song.new(song_params)

        if @song.save
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def show
        @song = Song.find_by(id: params[:id])

        if @song
            render :show
        else
            render json: @song.errors.full_messages, status: 404
        end
    end

    def update
        @song = Song.where(artist_id: params[:artist_id]).find_by(id: params[:id])

        if @song.update(song_params)
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end

    end

    def destroy
        @song = Song.where(artist_id: params[:artist_id]).find_by(id: params[:id])
        @song.destroy
        render :index
    end

    private
    def song_params
        params.require(:song).permit(:title, :artist_id, :genre)
    end

end

