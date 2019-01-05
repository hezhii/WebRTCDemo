const localVideo = document.querySelector('#local');
const getMediaBtn = document.querySelector('#getMediaBtn');

getMediaBtn.addEventListener('click', getLocalStream);

function getLocalStream() {
  console.log('Get local stream');
  getMediaBtn.disabled = true;
  navigator.getUserMedia({
    video: true,
  }, function(stream) {
    localVideo.srcObject = stream;
  }, function(err) {
    console.error(`getUserMedia() error: ${err.name}`);
  });
}