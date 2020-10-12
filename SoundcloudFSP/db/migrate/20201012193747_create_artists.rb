class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :artists, :username, unique: true
    add_index :artists, :email, unique: true
    add_index :artists, :session_token, unique: true
  end
end
