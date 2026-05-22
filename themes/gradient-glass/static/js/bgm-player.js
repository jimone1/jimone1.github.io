(function () {
  var audio = document.getElementById('bgm-audio');
  var toggle = document.getElementById('bgm-toggle');
  if (!audio || !toggle) return;

  var icon = toggle.querySelector('.bgm-icon');
  var bars = toggle.querySelector('.bgm-bars');
  var tracks = ['/audio/lofi-track-1.mp3'];
  var currentTrack = 0;
  var isPlaying = false;

  audio.volume = 0.3;

  function setPlaying() {
    isPlaying = true;
    toggle.classList.add('playing');
    icon.style.display = 'none';
    bars.style.display = 'flex';
  }

  function setPaused() {
    isPlaying = false;
    toggle.classList.remove('playing');
    icon.style.display = 'inline';
    bars.style.display = 'none';
  }

  // Auto-play on first user interaction
  function autoPlay() {
    audio.play().then(setPlaying).catch(function () {});
    document.removeEventListener('click', autoPlay, true);
    document.removeEventListener('keydown', autoPlay, true);
    document.removeEventListener('scroll', autoPlay);
    document.removeEventListener('touchstart', autoPlay);
  }

  document.addEventListener('click', autoPlay, true);
  document.addEventListener('keydown', autoPlay, true);
  document.addEventListener('scroll', autoPlay, { once: true });
  document.addEventListener('touchstart', autoPlay, { once: true });

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (isPlaying) {
      audio.pause();
      setPaused();
    } else {
      audio.play().then(setPlaying).catch(function () {});
    }
  });

  audio.addEventListener('ended', function () {
    currentTrack = (currentTrack + 1) % tracks.length;
    audio.src = tracks[currentTrack];
    audio.play();
  });
})();
