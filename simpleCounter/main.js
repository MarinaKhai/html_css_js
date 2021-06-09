let arrowUp = document.querySelector('.up');
let arrowDown = document.querySelector('.down');
let nmb = document.querySelector('.number');

arrowUp.addEventListener('click', () => {
    ++nmb.innerHTML;
});

arrowDown.addEventListener('click', () => {
    --nmb.innerHTML;
});
