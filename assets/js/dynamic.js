// Initialize the YouTube Player API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// Function called by the YouTube API when it's ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'VjeOpeXwnKo',    // Replace with the actual YouTube video ID
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      loop: 1,
      playlist: 'VjeOpeXwnKo'  // Needed for the loop to work
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

// Function called when the player is ready
function onPlayerReady(event) {
  event.target.playVideo();  // Start playing the video
  event.target.mute();       // Mute the video (optional)
  event.target.setPlaybackQuality('hd1080'); // Set desired playback quality (optional)
}
