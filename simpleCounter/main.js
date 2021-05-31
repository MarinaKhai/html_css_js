let arrowUp = document.querySelector('.up');
let arrowTenUp = document.querySelector('.tenUp');
let arrowDown = document.querySelector('.down');
let arrowTenDown = document.querySelector('.tenDown');
let nmb = document.querySelector('.number');

arrowUp.addEventListener('click', () => {
    ++nmb.innerHTML;
});

arrowDown.addEventListener('click', () => {
    --nmb.innerHTML;
});

arrowTenUp.addEventListener('click', () => {
    let tenUp = Number(nmb.innerHTML);
    nmb.innerHTML = tenUp + 10;
});

arrowTenDown.addEventListener('click', () => {
    let tenDown = Number(nmb.innerHTML);
    nmb.innerHTML = tenDown - 10;
});
