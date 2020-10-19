class AddAudioUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :audio_url, :string
  end
end
