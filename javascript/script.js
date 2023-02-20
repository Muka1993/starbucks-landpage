
// FUNÇÃO QUE AO CLICAR NO STARBUCKS TROCA OS COPOS

function imgSlider(mudando){
    document.querySelector('.starbucks').src = mudando;
}

// FUNÇÃO QUE MUDA A COR DO CIRCULO EM VOLTA DOS STARBUCKS

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


// FUNÇAO PARA MENU HAMBURGUER

var menu = document.querySelector('.menu');

function clickMenu(){
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    }else {
        menu.style.display = 'none'
    }
}

// FUNÇÃO QUE FORÇA A MUDANÇA DO MENU HAMBURGUER PARA BLOCK  

function telaTamanho() {
    if(window.innerWidth >= '992'){
    menu.style.display = 'block';
   } else {
    menu.style.display = 'none';
   }
 }

// FUNÇÃO DARK MODE

const btnDarkMode = document.querySelector('.dark_mode_svg');

btnDarkMode.addEventListener("click", (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
    e.target.style.color = 'black'
    }else{
        html.classList.add('dark')
    e.target.style.color = 'white'    
    }
});

