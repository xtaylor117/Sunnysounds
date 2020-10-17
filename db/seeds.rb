# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.destroy_all

demoUser = Artist.create(username: 'Demo', password: 'password')

artist1 = Artist.create(username: 'SIR', password: 'password')
artist2 = Artist.create(username: 'Chris Brown', password: 'password')
artist3 = Artist.create(username: 'Nujabes', password: 'password')
artist4 = Artist.create(username: 'Taku', password: 'password')
artist5 = Artist.create(username: 'Galimatias', password: 'password')
artist6 = Artist.create(username: 'Alina Baraz', password: 'password')

song1 = Song.create(title: 'Mood ft. Zacari', genre: 'Other', artist_id: artist1.id)
song2 = Song.create(title: 'Say You Love Me', genre: 'Hip Hop/Pop', artist_id: artist2.id)
song3 = Song.create(title: 'Mistline', genre: 'Modal Soul', artist_id: artist3.id)
song7 = Song.create(title: 'Feather ft. Cise Star', genre: 'Modal Soul', artist_id: artist3.id)
song4 = Song.create(title: 'Night 25', genre: 'Modal Soul', artist_id: artist4.id)
song5 = Song.create(title: 'Blowback', genre: 'Pop', artist_id: artist5.id)
song6 = Song.create(title: 'Pretty Thoughts', genre: 'Chill', artist_id: artist6.id)
