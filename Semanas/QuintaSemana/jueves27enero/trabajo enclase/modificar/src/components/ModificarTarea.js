/* 
btnEditar.addEventListener('click', async () => {
    let idModificar = document.getElementById('id').value
    let nameModificar = document.getElementById('name').value
    let lastNameModificar = document.getElementById('lastName').value
    let emailModificar = document.getElementById('email').value

    let resp = await fetch(`http://localhost:4002/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameModificar,
            apellido: lastNameModificar,
            correo: emailModificar
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    let data = resp.json()
    console.log(data);
})
*/

