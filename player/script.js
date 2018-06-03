/*
function Player() {
  this.playButton = document.querySelector("#playButton");
  this.video = document.querySelector("#video");
  this.progressBar = document.querySelector("#bar");
  
  this.playButton.addEventListener("click", function() {
    
  if (this.playButton.innerHTML == "play") {
    this.video.play();
    this.playButton.innerHTML = "pause";
  } else {
    this.video.pause();
    this.playButton.innerHTML = "play";
  } 
  });
  
  this.updateBar = function() {
  var progress = Math.floor((100/this.video.duration) * this.video.currentTime);
  this.progressBar.setAttribute("value", progress);
  if (this.video.duration == this.video.currentTime) {
    this.video.currentTime = 0;
    this.playButton.innerHTML = "play";
  }
  }
  
  this.video.addEventListener("timeupdate", this.updateBar);

  var changePosition = function(e) {
  var x = e.pageX - this.offsetLeft, 
      y = e.pageY - this.offsetTop,
      clickedValue = x * this.max / this.offsetWidth;
  console.log(x, y);
  this.progressBar.setAttribute("value", clickedValue);
  this.video.currentTime = Math.round(clickedValue /(100/this.video.duration));
  }

  this.progressBar.addEventListener("click", changePosition);
}

var palyer = new Player();
*/

var playButton = document.querySelector("#playButton");
var video = document.querySelector("#video");
var progressBar = document.querySelector("#bar");

playButton.addEventListener("click", function() {
  if (playButton.innerHTML == "play") {
    video.play();
    playButton.innerHTML = "pause";
  } else {
    video.pause();
    playButton.innerHTML = "play";
  } 
});

var updateBar = function() {
  var progress = Math.floor((100/video.duration) * video.currentTime);
  progressBar.setAttribute("value", progress);
  if (video.duration == video.currentTime) {
    video.currentTime = 0;
    playButton.innerHTML = "play";
  }
}

video.addEventListener("timeupdate", updateBar);

var changePosition = function(e) {
  var x = e.pageX - this.offsetLeft, 
      y = e.pageY - this.offsetTop,
      clickedValue = x * this.max / this.offsetWidth;
  console.log(x, y);
  progressBar.setAttribute("value", clickedValue);
  video.currentTime = Math.round(clickedValue /(100/video.duration));
}

progressBar.addEventListener("click", changePosition);
