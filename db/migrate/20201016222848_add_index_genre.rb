class AddIndexGenre < ActiveRecord::Migration[5.2]
  def change
    add_index :songs, :genre, unique: true
  end
end
