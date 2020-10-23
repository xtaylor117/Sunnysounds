class RemoveAudiourl < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :audio_url
  end
end
