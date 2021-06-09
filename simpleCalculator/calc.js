'use strict'

// var field = document.getElementById('window');
var mainLine = document.getElementById('main-field');
var secondLine = document.getElementById('second-field');
var digits = document.getElementsByClassName('digit');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var mult = document.getElementById('mult');
var divide = document.getElementById('divide');
var enter = document.getElementById('enter');
var clear = document.getElementById('clear');


for (let i of digits) {
    i.onclick = function () {
        mainLine.textContent += this.textContent;
    }
}

// secondLine.textContent = mainLine.textContent;
var nmb = Number(secondLine.textContent);

plus.onclick = function() {
    nmb += Number(mainLine.textContent);
    secondLine.textContent += mainLine.textContent + ' + ';
    mainLine.textContent = '';
    // console.log(n);
}

enter.onclick = function() {
    nmb += Number(mainLine.textContent);
    secondLine.textContent += mainLine.textContent;
    mainLine.textContent = nmb;
}       

// enter.onclick = function() {
//     text.textContent = 
// }

clear.onclick = function () {
    mainLine.textContent = '';
    secondLine.textContent = '';
    nmb = 0;
}

