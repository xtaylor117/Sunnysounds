class FixIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :songs, :artist_id
    add_index :songs, :artist_id
  end
end
