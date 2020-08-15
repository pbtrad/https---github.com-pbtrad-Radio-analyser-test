
var webradio = {
  player: function () {
    return document.getElementById("player");
  },
  play_station: function (url) {
    document.getElementById("player").src = url;
   
  },
  
  load_channels: function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        var station_data = JSON.parse(request.responseText);
        for (var i = 0; i < station_data.length; i++) {
          var category = station_data[i];
          var li = document.createElement("li");
          li.textContent = category.name;
          li.setAttribute("class", "category");
          document.getElementById("channelList").appendChild(li);
          for (var i1 = 0; i1 < category.channels.length; i1++) {
            var li = document.createElement("li");
            li.textContent = category.channels[i1].name;
            (function (url) {
              li.addEventListener("click", function () {
                webradio.play_station(url);
              }, false)
            }(category.channels[i1].url));
            li.setAttribute("class", "station");
            document.getElementById("channelList").appendChild(li);
          }
          document.getElementById("channelList").appendChild(document.createElement("br"));
        }
      }
    }
    request.open("GET", "channels.json");
    request.send();
  },
  get_value: function (key) {
    if (window.localStorage[key] != undefined) {
      return window.localStorage[key];
    }
  },
  set_value: function (key, value) {
    window.localStorage[key] = value;
  }
};

const audioContext = new AudioContext();

//Create audio source
//Here, we use an audio file, but this could also be e.g. microphone input
const audioEle = new Audio();
audioEle.crossOrigin = 'anonymous';
player.crossOrigin = 'anonymous';
//audioEle.src = '04 - The Maids of Michelstown.mp3';//insert file name here
//audioEle.src = "https://edge.audioxi.com/98";
audioEle.src = "channels.json";
audioEle.autoplay = true;
audioEle.preload = 'auto';

const audioSourceNode = audioContext.createMediaElementSource(player);

//Create analyser node
const analyserNode = audioContext.createAnalyser();
//analyserNode.fftSize = 256;
analyserNode.fftSize = 2048;

const bufferLength = analyserNode.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

//Set up audio node network
audioSourceNode.connect(analyserNode);
analyserNode.connect(audioContext.destination);

//Create 2D canvas
const canvas = document.createElement('canvas');
//canvas.style.position = 'absolute';
//canvas.style.top = 0;
//canvas.style.left = 0;
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
  canvasCtx.fillStyle = 'rgba(56, 56, 56, 0.5)';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  //Draw spectrum
  const barWidth = (canvas.width / bufferLength) * 2.5;
  let posX = 0;
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] + 600) * 2;
    canvasCtx.fillStyle = 'rgba(' + Math.floor(barHeight + 200) + ', 83, 51, 0.5)';
    canvasCtx.fillRect(posX, canvas.height - barHeight / 2, barWidth, barHeight / 2);
    posX += barWidth + 1;
  }
};

draw();







