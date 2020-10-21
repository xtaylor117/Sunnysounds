class Api::SongsController < ApplicationController

    def index 
        @songs = Song.all
        render :index
    end

    def create
        @song = Song.new(song_params)
        debugger
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
        @song = Song.find_by(id: params[:id])

        if @song.update(song_params)
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end

    end

    def destroy
        @song = Song.find_by(id: params[:id])
        @song.destroy
        render json: {}
    end

    private
    def song_params
        params.require(:song).permit(:title, :artist_id, :genre, :audiofile)
    end

end

