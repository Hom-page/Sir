document.querySelector('.video-player__logo').addEventListener('click', function() {
    var player = document.querySelector('.video-player');
    var video = player.querySelector('.video-player__element');
  
    // Play the video
    video.play();
  
    // Switch to the "playing" state to hide the thumbnail/logo and show the video
    player.classList.add('video-player--playing');
  });
  