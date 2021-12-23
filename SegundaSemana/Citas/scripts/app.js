
let formulario = document.querySelector('form');

let borrar = document.getElementById('borrar');
console.log(borrar)

let listarCita = document.getElementById('listarCita');
let buscar = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda');


let citas = JSON.parse(localStorage.getItem('Citas')) || [];

const capturaDatos = () => {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;

    let registro = {
        nombre,
        fecha,
        hora,
        sintomas
    }

    citas.unshift(registro);
    localStorage.setItem('Citas',JSON.stringify(citas));
    getLocalStorage();
  
}

formulario.addEventListener('submit', e => {
    console.log(e)
    e.preventDefault();
    capturaDatos();
    e.target.reset()
})


const getLocalStorage = () =>{
    listarCita.innerHTML = '';
    let citasLocalStorage = JSON.parse(localStorage.getItem('Citas'));
    //console.log(citasLocalStorage);
    citasLocalStorage?.map(cita => {
        const {nombre,fecha,hora,sintomas} = cita;
        listarCita.innerHTML += `
                            <td>${nombre}</td>
                            <td>${fecha}</td>
                            <td>${hora}</td>
                            <td>${sintomas}</td>
        `   
     })
}


document.addEventListener('DOMContentLoaded',getLocalStorage);



buscar.addEventListener('click', e => {
    e.preventDefault();
    let input = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('Citas'));
    let filtro = data.filter(cita => cita.nombre.toLowerCase()  === input.toLowerCase())
    busqueda.innerHTML = '';  
    console.log(filtro)  
   
     filtro.length === 0 ?
          busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>`
          :
          (
            filtro.map(cita => { 
                const {nombre,fecha,hora,sintomas} = cita;
                busqueda.innerHTML += `
                                    <div style="color:white;">${nombre}</div>
                                    <div style="color:white;">${fecha}</div>
                                    <div style="color:white;">${hora}</div>
                                    <div style="color:white;">${sintomas}
                                    <button id="borrar">Borrar</Button></div><br>             
                `   
             })
          )
          borrar = document.getElementById('borrar');

          borrar.addEventListener('click', e => {
            console.log(borrar)
            let data = JSON.parse(localStorage.getItem('Citas'));

            let found = data.find( cita => cita.nombre.toLowerCase()  === input.toLowerCase());
            console.log(found)
            arrayIndex = data.indexOf(found)
            console.log(arrayIndex)
            data.splice(arrayIndex,1)
            console.log(data)
            localStorage.setItem('Citas',JSON.stringify(data));
            getLocalStorage("fi");
        })

})

