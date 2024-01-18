import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const videoPlayer = new Player(iframe);

videoPlayer.on('timeupdate', throttle((event) => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));


const videoSavedTime = localStorage.getItem('videoplayer-current-time');

if (videoSavedTime) {
    videoPlayer.setCurrentTime(parseFloat(videoSavedTime));
};

