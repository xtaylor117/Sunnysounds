# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

require 'open-uri'

Artist.destroy_all
Song.destroy_all

demoUser = Artist.create!(username: "Demo", password: "password")
artist1 = Artist.create!(username: "Patrick Patrikios", password: "password")
artist2 = Artist.create!(username: "Asher Fulero", password: "password")
artist3 = Artist.create!(username: "Nana Kwabena", password: "password")
artist4 = Artist.create!(username: "DJ Freedem", password: "password")

song1 = Song.create!(title: "Beside Me", genre: "Dance & Electronic", artist_id: artist1.id)
    audiofile1 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Beside+Me+-+Patrick+Patrikios.mp3")
    song1.audiofile.attach(io: audiofile1, filename: "song#{song1.id}_aud.mp3")
    photofile1 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/buildings-5655593_1920.jpg")
    song1.photofile.attach(io: photofile1, filename: "song#{song1.id}_photo.png")

song2 = Song.create!(title: "Cold Water", genre: "Dance & Electronic", artist_id: artist1.id)
    file2 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Cold+Water+-+Patrick+Patrikios.mp3")
    song2.audiofile.attach(io: file2, filename: "song#{song2.id}_aud.mp3")
    photofile2 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/buildings-5655593_1920.jpg")
    song2.photofile.attach(io: photofile2, filename: "song#{song2.id}_photo.png")

song3 = Song.create!(title: "Cover", genre: "Dance & Electronic", artist_id: artist1.id)
    file3 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Cover+-+Patrick+Patrikios.mp3")
    song3.audiofile.attach(io: file3, filename:"song#{song3.id}_aud.mp3")
    photofile3 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/buildings-5655593_1920.jpg")
    song3.photofile.attach(io: photofile3, filename: "song#{song3.id}_photo.png")

song4 = Song.create!(title: "Dark Side", genre: "Dance & Electronic", artist_id: artist1.id)
    file4 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Dark+Side+-+Patrick+Patrikios.mp3")
    song4.audiofile.attach(io: file4, filename:"song#{song4.id}_aud.mp3")
    photofile4 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/buildings-5655593_1920.jpg")
    song4.photofile.attach(io: photofile4, filename: "song#{song4.id}_photo.png")

song5 = Song.create!(title: "Forget Me Not", genre: "Dance & Electronic", artist_id: artist1.id)
    file5 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Forget+Me+Not+-+Patrick+Patrikios.mp3")
    song5.audiofile.attach(io: file5, filename:"song#{song5.id}_aud.mp3")
    photofile5 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/buildings-5655593_1920.jpg")
    song5.photofile.attach(io: photofile5, filename: "song#{song5.id}_photo.png")

song6 = Song.create!(title: "In The Throes", genre: "Ambient", artist_id: artist2.id)
    file6 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/In+The+Throes+-+Asher+Fulero.mp3")
    song6.audiofile.attach(io: file6, filename:"song#{song6.id}_aud.mp3")
    photofile6 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/helichrysum-italicum-5351797_1920.jpg")
    song6.photofile.attach(io: photofile6, filename: "song#{song6.id}_photo.png")

song7 = Song.create!(title: "Spring Thaw", genre: "Ambient", artist_id: artist2.id)
    file7 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Spring+Thaw+-+Asher+Fulero.mp3")
    song7.audiofile.attach(io: file7, filename:"song#{song7.id}_aud.mp3")
    photofile7 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/helichrysum-italicum-5351797_1920.jpg")
    song7.photofile.attach(io: photofile7, filename: "song#{song7.id}_photo.png")

song8 = Song.create!(title: "No Starlight Dey Beat", genre: "Dance & Electronic", artist_id: artist3.id)
    file8 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/No+Starlight+Dey+Beat+-+Nana+Kwabena.mp3")
    song8.audiofile.attach(io: file8, filename:"song#{song8.id}_aud.mp3")
    photofile8 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/whortleberry-5752417_1920.jpg")
    song8.photofile.attach(io: photofile8, filename: "song#{song8.id}_photo.png")

song9 = Song.create!(title: "She No Dull Beat", genre: "Dance & Electronic", artist_id: artist3.id)
    file9 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/She+No+Dull+Beat+-+Nana+Kwabena.mp3")
    song9.audiofile.attach(io: file9, filename:"song#{song9.id}_aud.mp3")
    photofile9 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/whortleberry-5752417_1920.jpg")
    song9.photofile.attach(io: photofile9, filename: "song#{song9.id}_photo.png")
    
song10 = Song.create!(title: "Ocean View", genre: "Dance & Electronic", artist_id: artist1.id)
    file10 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Ocean+View+-+Patrick+Patrikios.mp3")
    song10.audiofile.attach(io: file10, filename:"song#{song10.id}_aud.mp3")
    photofile10 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/buildings-5655593_1920.jpg")
    song10.photofile.attach(io: photofile10, filename: "song#{song10.id}_photo.png")

song11 = Song.create!(title: "Street Rhapsody", genre: "Hip Hop & Rap", artist_id: artist4.id)
    file11 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Street+Rhapsody+-+DJ+Freedem.mp3")
    song11.audiofile.attach(io: file11, filename:"song#{song11.id}_aud.mp3")
    photofile11 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/road-5743713_1920.jpg")
    song11.photofile.attach(io: photofile11, filename: "song#{song11.id}_photo.png")

song12 = Song.create!(title: "Today's Plan", genre: "Hip Hop & Rap", artist_id: artist4.id)
    file12 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Today's+Plan+-+DJ+Freedem.mp3")
    song12.audiofile.attach(io: file12, filename:"song#{song12.id}_aud.mp3")
    photofile12 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/road-5743713_1920.jpg")
    song12.photofile.attach(io: photofile12, filename: "song#{song12.id}_photo.png")

song13 = Song.create!(title: "Her Love Is Good", genre: "Acoustic", artist_id: demoUser.id)
    file13 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Her+Love+Is+Good.m4a")
    song13.audiofile.attach(io: file13, filename:"song#{song13.id}_aud.m4a")
    photofile13 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/mountains-1412683_640.png")
    song13.photofile.attach(io: photofile13, filename: "song#{song13.id}_photo.png")

song14 = Song.create!(title: "A Sad Ukelele", genre: "Acoustic", artist_id: demoUser.id)
    file14 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/A+Sad+Ukulele.m4a")
    song14.audiofile.attach(io: file14, filename:"song#{song14.id}_aud.m4a")
    photofile14 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/mountains-1412683_640.png")
    song14.photofile.attach(io: photofile14, filename: "song#{song14.id}_photo.png")

song15 = Song.create!(title: "Drowning", genre: "Acoustic", artist_id: demoUser.id)
    file15 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Drowning+%5BInstrumental%5D.m4a")
    song15.audiofile.attach(io: file15, filename:"song#{song15.id}_aud.m4a")
    photofile15 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/mountains-1412683_640.png")
    song15.photofile.attach(io: photofile15, filename: "song#{song15.id}_photo.png")

song16 = Song.create!(title: "HUBBADA", genre: "Acoustic", artist_id: demoUser.id)
    file16 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/HUBBADA.m4a")
    song16.audiofile.attach(io: file16, filename:"song#{song16.id}_aud.m4a")
    photofile16 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/mountains-1412683_640.png")
    song16.photofile.attach(io: photofile16, filename: "song#{song16.id}_photo.png")

song17 = Song.create!(title: "Poison", genre: "Acoustic", artist_id: demoUser.id)
    file17 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/Poison+%5BUKULELE+ORIGINAL%5D.mp3")
    song17.audiofile.attach(io: file17, filename:"song#{song17.id}_aud.mp3")
    photofile17 = open("https://sunnysounds-seed.s3-us-west-1.amazonaws.com/mountains-1412683_640.png")
    song17.photofile.attach(io: photofile17, filename: "song#{song17.id}_photo.png")

