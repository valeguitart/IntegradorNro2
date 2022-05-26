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
            console.log("Campo Vacio");
            validaFalla(usuario, 'Campo Vacio')
        } else {
            validaOk(usuario)
        };

        // Validando campo de email

        if (emailValor === '') {
            console.log("Campo Vacio");
            validaFalla(email, 'Campo Vacio')
        } else {
            validaOk(email)
        }

        // Validando contraseña
        if (contraseñaValor === '') {
            console.log("Campo Vacio");
            validaFalla(contraseña, 'Campo Vacio')
        } else {
            validaOk(contraseña)
        }

        // Validando Confirmar Contraseña
        if (confirmarContraseñaValor === '') {
            console.log("Campo Vacio");
            validaFalla(confirmarContraseña, 'Campo Vacio')
        } else {
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

})