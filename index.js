// Buscador
document.addEventListener("keyup", e=>{
    if (e.target.matches('#buscador')){
        document.querySelectorAll ('.uno, .dos, .tres, .cuatro, .cinco, .seis').forEach(memes => {
            memes.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?memes.classList.remove('filtro')
            :memes.classList.add('filtro')
        });
    }

});