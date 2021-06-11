var displayedImage = document.querySelector('.displayed-img');
var overlay = document.querySelector('.overlay');
var btn = document.querySelector('button');

var thumbBar = document.querySelector('.thumb-bar');


/* Looping through images */
for (let i = 1; i < 6; i++) {
  var thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(thumbImage);
  thumbImage.onclick = function() {
    displayedImage.setAttribute('src', 'images/pic' + i + '.jpg');
  }
}

/* Dimming effect on/off */
btn.onclick = function() {
  overlay.classList.toggle('dark');
}



