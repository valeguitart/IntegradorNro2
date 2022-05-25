const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', ()=> {mainMenuElement.classList.toggle('main-menu--show')});

let animado = document.querySelectorAll(".uno", ".dos", ".tres", ".cuatro", ".cinco", ".seis");

// function mostrarScroll(){
//     let scrollTop = document.documentElement.scrollTop;
//     for(var i=0; i = animado.length; i++) {
//         let alturaAnimado = animado[i].offsetTop;
//         if(alturaAnimado - 3 < scrollTop){
//             animado[i].style.opacity = 1;
//         }
//     }
// }

// window.addEventListener('scroll', mostrarScroll);