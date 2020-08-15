const audioCtx = new AudioContext();

//Create audio source
//Here, we use an audio file, but this could also be e.g. microphone input
const audioEle = new Audio();
audioEle.crossOrigin = 'anonymous';
//audioEle.src = '04 - The Maids of Michelstown.mp3';//insert file name here
//audioEle.src = "https://edge.audioxi.com/98";
audioEle.src = webradio.play_station;
audioEle.autoplay = true;
audioEle.preload = 'auto';

const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

//Create analyser node
const analyserNode = audioCtx.createAnalyser();
//analyserNode.fftSize = 256;
analyserNode.fftSize = 1024;

const bufferLength = analyserNode.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

//Set up audio node network
audioSourceNode.connect(analyserNode);
analyserNode.connect(audioCtx.destination);

//Create 2D canvas
const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const canvasCtx = canvas.getContext('2d');
canvasCtx.clearRect(0, 0, canvas.width, canvas.height);


function draw() {
  //Schedule next redraw
  requestAnimationFrame(draw);

  //Get spectrum data
  //analyserNode.getFloatFrequencyData(dataArray);
  analyserNode.getByteFrequencyData(dataArray);
  //Draw black background
  canvasCtx.fillStyle = 'rgba(96, 173, 135, 0.5)';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  //Draw spectrum
  const barWidth = (canvas.width / bufferLength) * 2.5;
  let posX = 0;
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] + 140) * 2;
    canvasCtx.fillStyle = 'rgba(' + Math.floor(barHeight + 100) + ', 83, 51, 0.5)';
    canvasCtx.fillRect(posX, canvas.height - barHeight / 2, barWidth, barHeight / 2);
    posX += barWidth + 1;
  }
};

draw();

$("#message").ajaxError(function (event, request, settings) {
  $(this).show();
  $(this).append("<li>Error requesting page " + settings.url + "</li>");
});