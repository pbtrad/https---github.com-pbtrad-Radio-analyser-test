//var mediaElement = document.querySelector('audio');
var source = audioContext.createMediaElementSource(player);

var highShelf = audioContext.createBiquadFilter();
var lowShelf = audioContext.createBiquadFilter();
var highPass = audioContext.createBiquadFilter();
var lowPass = audioContext.createBiquadFilter();

source.connect(highShelf);
highShelf.connect(lowShelf);
lowShelf.connect(highPass);
highPass.connect(lowPass);
lowPass.connect(audioContext.destination);

highShelf.type = "highshelf";
highShelf.frequency.value = 4700;
highShelf.gain.value = 50;

lowShelf.type = "lowshelf";
lowShelf.frequency.value = 35;
lowShelf.gain.value = 50;

highPass.type = "highpass";
highPass.frequency.value = 800;
highPass.Q.value = 0.7;

lowPass.type = "lowpass";
lowPass.frequency.value = 880;
lowPass.Q.value = 0.7;

var ranges = document.querySelectorAll('input[type=range]');
ranges.forEach(function(range){
  range.addEventListener('input', function() {
    window[this.dataset.filter][this.dataset.param].value = this.value;
  });
});