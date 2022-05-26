window.addEventListener('load', () => {
    const form = document.getElementById('formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const contraseña = document.getElementById('contraseña')
    const confirmarContraseña = document.getElementById('confirmarContraseña')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () =>{
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const contraseñaValor = contraseña.value.trim()
        const confirmarContraseñaValor = confirmarContraseña.value.trim();

        // Validando campo de Usuario
        if (usuarioValor === '') {
            validaFalla(usuario, 'Campo Vacio')
        } else {
            validaOk(usuario)
        };

        // Validando campo de email

        if (emailValor === '') {
            validaFalla(email, 'Campo Vacio')
        } else if(!validaEmail(emailValor)){
            validaFalla(email, 'El e-mail no es válido')
        } else {
            validaOk(email)
        }

        // Validando contraseña
        const er = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
        if (contraseñaValor === '') {
            validaFalla(contraseña, 'Campo Vacio');
        } else if(contraseñaValor.length < 8){
            validaFalla(contraseña, 'Debe tener 8 caracteres cómo mínimo');
        } else if (!contraseñaValor.match(er)){
            validaFalla(contraseña, 'Debe tener al menos una may., una min. y un núm.');
        } else {
            validaOk(contraseña);
        }

        // Validando Confirmar Contraseña
        if (confirmarContraseñaValor === '') {
            validaFalla(confirmarContraseña, 'Confirme su contraseña')
        } else if(contraseñaValor !== confirmarContraseñaValor){
            validaFalla(confirmarContraseña, 'La contraseña no coincide')
        } else{
            validaOk(confirmarContraseña)
        } 

    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
        formControl.className = 'form-control falla'
    }

    const validaOk = (input) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    }

    

})