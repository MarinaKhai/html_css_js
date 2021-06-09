'use strict'

// var field = document.getElementById('window');
var text = document.getElementById('text-field');
var digits = document.getElementsByClassName('digit');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var mult = document.getElementById('mult');
var divide = document.getElementById('divide');

var enter = document.getElementById('enter');
var clear = document.getElementById('clear');


for (let i of digits) {
    i.onclick = function () {
        text.textContent += this.textContent;
    }
}

let nmb = Number(text.textContent);

plus.onclick = function() {
    nmb += Number(text.textContent);
    text.textContent = '';
    
}
enter.onclick = function() {
    console.log(nmb);
    text.textContent = '';
}       

// enter.onclick = function() {
//     text.textContent = 
// }

clear.onclick = function () {
    text.textContent = '';
}

