let formulario = document.querySelector('form');


let ingresar = document.getElementById('btn-ingresar');
let crear = document.getElementById('btn-crear');

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
    getLocalStorage();
}

const registrarUsuario = () => {
    capturaDatos();

}

formulario.addEventListener('submit', async e => {
    console.log(e)
    e.preventDefault();
    await capturaDatos();

    e.target.reset()
})