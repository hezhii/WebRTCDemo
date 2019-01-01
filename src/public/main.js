navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

const video = document.querySelector('video');

function successCallback(stream) {
  // Note: make the returned stream available to console for inspection
  window.stream = stream;

  if (window.URL) {
    // Chrome浏览器
    video.srcObject = stream;
  } else {
    // Firefox和Opera: 可以直接把视频源设置为stream
    video.src = stream;
  }
  // 播放
  video.play();
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia({
  audio: true,
  video: true,
}, successCallback, errorCallback);