const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

function carrossel () {
    idx++;

    if(idx > img.length - 1) {
        idx=0;
    }

    imgs.style.transform = `translateX(${-idx * 1000}px)`;
}
setInterval(carrossel, 1800);

const imgs2 = document.getElementById('img2');
const img2 = document.querySelectorAll('#img2 img2');

let idx2 = 0;

function carrossel2 () {
    idx2++;

    if(idx2 > img.length - 1) {
        idx2=0;
    }

    imgs2.style.transform = `translateX(${-idx2 * 400}px)`;
}
setInterval(carrossel2, 1800);