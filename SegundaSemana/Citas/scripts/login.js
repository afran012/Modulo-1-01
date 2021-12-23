let formulario = document.querySelector('form');


let ingresar = document.getElementById('btn-ingresar');
let registrar = document.getElementById('btn-registrar');
let crear = document.getElementById('btn-crear');
let nombre = document.getElementById('div-nombre');


let users = JSON.parse(localStorage.getItem('Users')) || [];

const capturarDatos = () => {
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('contrasena').value;
    let nombre = document.getElementById('nombre').value;

    let registro = {
        correo,
        contrasena,
        nombre
    }

    users.unshift(registro);
    localStorage.setItem('Users',JSON.stringify(users));
}

const ingresarUsuario = () => {
    console.log("ingresarUsuario")
    users = JSON.parse(localStorage.getItem('Users')) || [];
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('contrasena').value;

    let usuarioVal = users.find(user => user.correo === correo)
    console.log(usuarioVal)
    if (usuarioVal) {
        if (usuarioVal.contrasena == contrasena) {
            window.location.replace("../index.html");
            
        }
        else {
            window.alert("Usuario o contraseña invalidos")
        }
        
    } else {
        window.alert("Usuario o contraseña invalidos")        
    }


}

formulario.addEventListener('submit', async e => {
    console.log(e)
    e.preventDefault();
    await ingresarUsuario();
    e.target.reset()
})

registrar.addEventListener('click', e => {
    e.preventDefault();
    registrar.style.display = "none"
    ingresar.style.display = "none"
    crear.style.display = "block"
    nombre.style.display = "block"
})

crear.addEventListener('click', e => {
    e.preventDefault();
    registrar.style.display = "block"
    ingresar.style.display = "block"
    crear.style.display = "none"
    nombre.style.display = "none"

    capturarDatos()
})

ingresar.addEventListener('click', e => {
    e.preventDefault();
    ingresarUsuario()

})