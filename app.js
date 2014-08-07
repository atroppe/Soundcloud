window.onload = app;

function app() {
    console.log("app is working");
    $(".artist").html("Enya");
    $(".title").html("Anywhere Is");
    SC.initialize({
        client_id: "fe9cbd7c23e04dbb61e399379d903671"
    });

    // to get a particular track
    // /users/<user_id>/tracks/<track_id>
    // below we have 
    // user_id: user3879902
    // and
    // track_id: enya-only-time

    SC.get("/users/iyukon/tracks/enya-anywhere-is", function(track) {
        console.log(track);
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
    });
}
