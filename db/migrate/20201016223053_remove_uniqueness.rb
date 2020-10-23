class RemoveUniqueness < ActiveRecord::Migration[5.2]
  def change
    remove_index :songs, :genre
    add_index :songs, :genre
  end
end
