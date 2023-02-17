
function imgSlider(mudando){
    document.querySelector('.starbucks').src = mudando;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

var menu = document.querySelector('.menu');

function clickMenu(){
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    }else {
        menu.style.display = 'none'
    }
}


function telaTamanho() {
    if(window.innerWidth >= '992'){
    menu.style.display = 'block';
   } else {
    menu.style.display = 'none';
   }
 }



