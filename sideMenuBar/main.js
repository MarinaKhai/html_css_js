let menu = document.querySelector('.menu-container');
let showMenu = document.querySelector('.show-menu');
let closeMenu = document.querySelector('.menu-header');

let catalog = document.querySelectorAll('.item-link')[0];
let newProduct = document.querySelectorAll('.item-link')[1];
let sale = document.querySelectorAll('.item-link')[2];
let about = document.querySelectorAll('.item-link')[3];

showMenu.onclick = function() {
    menu.style.transform = 'none';
    menu.style.transition = 'all 1s';
    this.style.display = 'none';
    this.style.transition = 'display 1s';

}

closeMenu.onclick = function() {
    menu.style.transform = 'translateX(-100%)';
    menu.style.transition = 'all 1s';
    showMenu.style.display = 'block';
    showMenu.style.transition = 'display 5s';
}

catalog.onclick = function() {
    menu.style.transform = 'translateX(-100%)';
    menu.style.transition = 'all 1s';
}
newProduct.onclick = function() {
    menu.style.transform = 'translateX(-100%)';
    menu.style.transition = 'all 1s';
}
sale.onclick = function() {
    menu.style.transform = 'translateX(-100%)';
    menu.style.transition = 'all 1s';
}
about.onclick = function() {
    menu.style.transform = 'translateX(-100%)';
    menu.style.transition = 'all 1s';
}