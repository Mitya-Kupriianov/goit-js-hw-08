import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

var callback = function () {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
};

player.on('timeupdate', throttle(callback, 1000));
player.setCurrentTime(+localStorage.getItem('videoplayer-current-time'));
