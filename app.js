const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idex = 0;
    }

    imgs.style.transform = 'translateX(${-idx = 1200}px)';
}

setInterval(carrossel, 1800);