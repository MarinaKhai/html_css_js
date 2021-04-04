var clickBtn = document.getElementById('click-btn');
var modalLayer = document.getElementById('modal-layer');
var closeBtn = document.getElementById('close-modal-btn');

clickBtn.onclick = function() {
    modalLayer.style.display = 'block';
}
closeBtn.onclick = function() {
    modalLayer.style.display = 'none';
}

window.onclick = function(e) {
    if (e.target == modalLayer)
        modalLayer.style.display = 'none';
}