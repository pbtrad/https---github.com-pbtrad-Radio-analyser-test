"use strict";

$(function() {

    var sound = audioBatchLoader({
        song: "channels.json"


    });

    var playing = false;

    var sliderParams64Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter1.gain.value = ui.value;

        }
    };

    $('#filter64Hz').slider(sliderParams64Hz);

    var sliderParams150Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter2.gain.value = ui.value;

        }
    };

    $('#filter150Hz').slider(sliderParams150Hz);







    var sliderParams350Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter3.gain.value = ui.value;

        }
    };

    $('#filter350Hz').slider(sliderParams350Hz);



    var sliderParams1000Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter4.gain.value = ui.value;

        }
    };

    $('#filter1000Hz').slider(sliderParams1000Hz);




    var sliderParams2000Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter5.gain.value = ui.value;

        }
    };

    $('#filter2000Hz').slider(sliderParams2000Hz);


    var sliderParams6000Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter6.gain.value = ui.value;

        }
    };

    $('#filter6000Hz').slider(sliderParams6000Hz);


    var sliderParams12000Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter7.gain.value = ui.value;

        }
    };

    $('#filter12000Hz').slider(sliderParams12000Hz);



    $(".transport-icon").on("click", function() {

        if (!playing) {
            playing = true;
            sound.song.play();
            $(".transport-icon").attr("src", "images/stop.png");

        } else {
            playing = false;
            sound.song.stop();
            $(".transport-icon").attr("src", "images/play.png");
        }

    });

    /*var song;
    var fft;
    var button;
    
    var volhistory = [];
    var w;
    
    function toggleSong() {
      if (song.isPlaying()) {
        song.pause();
      } else {
        song.play();
      }
    }
    
    function preload() {
      
      song = loadSound("04 - The Maids of Michelstown.mp3");
    }
    
    function setup() {
      createCanvas(displayWidth, 880);
      colorMode(HSB);
      angleMode(DEGREES);
      //song = loadSound(url);
      button = createButton('play/stop');
      button.mousePressed(toggleSong);
      song.play();
      fft = new p5.FFT(0.9, 128);
      w = width / 20;
      ellipse(width/2, height/2, 100, 100);
    }
    
    //function draw() {
      //background(0);
      //var spectrum = fft.analyze();
      //console.log(spectrum);
      //stroke(255);
      //noStroke();
      //translate(width / 2, height / 2);
      //beginShape();
      //for (var i = 0; i < spectrum.length; i++) {
        //var angle = map(i, 0, spectrum.length, 0, 360);
        //var amp = spectrum[i];
        //var r = map(amp, 0, 256, 20, 100);
        //fill(i, 255, 255);
        //var x = r * cos(angle);
        //var y = r * sin(angle);
        //stroke(i, 255, 255);
        //line(0, 0, x, y);
        //vertex(x, y);
        //var y = map(amp, 0, 256, height, 0);
        //rect(i * w, y, w - 2, height - y);
      //}
      //endShape();
    //}
    
    function draw() {
      //background(0);
      background('rgba(36,67,34, 0.25)');
      var spectrum = fft.analyze();
      //console.log(spectrum);
      noStroke();
      for (var i = 0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        var y = map(amp, 0, 256, height, 0);
        fill(i, 255, 255);
        rect(i * w, y, w - 2, height - y);
      }
      //stroke(255);
      //Fill();
    }*/

});