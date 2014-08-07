window.onload = app;

function app() {
    console.log("app is working");

    SC.initialize({
        client_id: "fe9cbd7c23e04dbb61e399379d903671"
    });

    // to get a particular track
    // /users/<user_id>/tracks/<track_id>
    // below we have 
    // user_id: user3879902
    // and
    // track_id: enya-only-time

    var EnyaUrl = "/users/iyukon/tracks/enya-anywhere-is"

    SC.get(EnyaUrl, function(track) {
        console.log(track);
        console.log(track['favoritings_count']);
        console.log(track.title);
        // $(".artist").html("Enya");
        $(".title").html(track.title);
        $('.numberLikes').html(track['favoritings_count'])
        $('.numberFollow').html(track.comment_count);
        $('.main').css("background-image", "url(https://i1.sndcdn.com/artworks-000009842893-vta8b7-t500x500.jpg?e76cf77)");
        var song_object = null;

        $('button').on('click', function() {
            if (!song_object) {
                SC.stream('/tracks/' + track.id, function(song) {
                    $('button').html('STOP');
                    song.play();
                    song_object = song;
                });
            } else {
                song_object.stop();
                $('button').html('PLAY');
            }
        });
    });

}
// 0. make some styles and css animations for the album artwork
// 1. write some data (i.e. title, date created) to the DOM
// 2. handle click events on the button
//



// write some data from this information onto the DOM
// button.on('click', function(){
//   var sound = null;
//   if not playing
//     SC.stream("/users/user3879902/tracks/enya-only-time", function(s){
//       sound = s;
//       sound.play();
//     });
//   if playing
//     sound.stop()
// })
