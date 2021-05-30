let arrowUp = document.querySelector('.up');
let arrowDown = document.querySelector('.down');
let nmbBox = document.querySelector('.numberContainer');
let nmb = 0;

arrowUp.addEventListener('click', () => {
    nmbBox.innerHTML = ++nmb;
});

arrowDown.addEventListener('click', () => {
    nmbBox.innerHTML = --nmb;
});
