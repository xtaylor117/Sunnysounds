# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Artist.destroy_all

demoUser = Artist.create(username: "Demo", password: "password")

artist1 = Artist.create(username: "Patrick Patrikios", password: "password")
artist2 = Artist.create(username: "Asher Fulero", password: "password")
artist3 = Artist.create(username: "Nana Kwabena", password: "password")
artist4 = Artist.create(username: "DJ Freedem", password: "password")

song1 = Song.create(title: "Beside Me", genre: "Dance & Electronic", artist_id: artist1.id)
    file1 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Beside+Me+-+Patrick+Patrikios.mp3")
    song1.audiofile.attach(io: file1, filename: "song#{song1.id}_aud.mp3")

song2 = Song.create(title: "Cold Water", genre: "Dance & Electronic", artist_id: artist1.id)
    file2 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Cold+Water+-+Patrick+Patrikios.mp3")
    song2.audiofile.attach(io: file2, filename: "song#{song2.id}_aud.mp3")

song3 = Song.create(title: "Cover", genre: "Dance & Electronic", artist_id: artist1.id)
    file3 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Cover+-+Patrick+Patrikios.mp3")
    song3.audiofile.attach(io: file3, filename:"song#{song3.id}_aud.mp3")

song4 = Song.create(title: "Dark Side", genre: "Dance & Electronic", artist_id: artist1.id)
    file4 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Dark+Side+-+Patrick+Patrikios.mp3")
    song4.audiofile.attach(io: file4, filename:"song#{song4.id}_aud.mp3")

song5 = Song.create(title: "Forget Me Not", genre: "Dance & Electronic", artist_id: artist1.id)
    file5 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Forget+Me+Not+-+Patrick+Patrikios.mp3")
    song5.audiofile.attach(io: file5, filename:"song#{song5.id}_aud.mp3")

song6 = Song.create(title: "In The Throes", genre: "Ambient", artist_id: artist2.id)
    file6 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/In+The+Throes+-+Asher+Fulero.mp3")
    song6.audiofile.attach(io: file6, filename:"song#{song6.id}_aud.mp3")

song7 = Song.create(title: "Spring Thaw", genre: "Ambient", artist_id: artist2.id)
    file7 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Spring+Thaw+-+Asher+Fulero.mp3")
    song7.audiofile.attach(io: file7, filename:"song#{song7.id}_aud.mp3")

song8 = Song.create(title: "No Starlight Dey Beat", genre: "Dance & Electronic", artist_id: artist3.id)
    file8 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/No+Starlight+Dey+Beat+-+Nana+Kwabena.mp3")
    song8.audiofile.attach(io: file8, filename:"song#{song8.id}_aud.mp3")

song9 = Song.create(title: "She No Dull Beat", genre: "Dance & Electronic", artist_id: artist3.id)
    file9 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/She+No+Dull+Beat+-+Nana+Kwabena.mp3")
    song9.audiofile.attach(io: file9, filename:"song#{song9.id}_aud.mp3")
    
song10 = Song.create(title: "Ocean View", genre: "Dance & Electronic", artist_id: artist1.id)
    file10 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Ocean+View+-+Patrick+Patrikios.mp3")
    song10.audiofile.attach(io: file10, filename:"song#{song10.id}_aud.mp3")

song11 = Song.create(title: "Street Rhapsody", genre: "Hip Hop & Rap", artist_id: artist4.id)
    file11 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Street+Rhapsody+-+DJ+Freedem.mp3")
    song11.audiofile.attach(io: file11, filename:"song#{song11.id}_aud.mp3")

song12 = Song.create(title: "Today's Plan", genre: "Hip Hop & Rap", artist_id: artist4.id)
    file12 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Today's+Plan+-+DJ+Freedem.mp3")
    song12.audiofile.attach(io: file12, filename:"song#{song12.id}_aud.mp3")
    

