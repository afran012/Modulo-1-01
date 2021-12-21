let enviar = document.getElementById('btn_enviar_evaluacion');
let ordenar = document.getElementById('btn_ordenar_valores');
let filtrar = document.getElementById('btn_filtrar_distancia');
let filtrarInput = document.getElementById('filtrar');
let buscar = document.getElementById('btn_buscar_planeta');
let buscarInput = document.getElementById('buscar');


let planetas = JSON.parse(localStorage.getItem('Planetas')) || [];


const estructurarPlaneta=(planeta)=>{
    let numero = planeta[0].value
    let nombre = planeta[1].value 
    let distancia = planeta[2].value
    let tamanio = planeta[3].value
    let datosPlaneta = {
        numero,
        nombre,
        distancia,
        tamanio
    }

    planetas.push(datosPlaneta)
    return datosPlaneta

}


const capturaPlanetas = () => {
    try {

        let planeta1 = document.querySelectorAll('.planeta1')
        let planeta2 = document.querySelectorAll('.planeta2')
        let planeta3 = document.querySelectorAll('.planeta3')
        let planeta4 = document.querySelectorAll('.planeta4')
        planeta1 = estructurarPlaneta(planeta1);
        planeta2 = estructurarPlaneta(planeta2);
        planeta3 = estructurarPlaneta(planeta3);
        planeta4 = estructurarPlaneta(planeta4);
        console.log(planetas)

        localStorage.setItem('Planetas',JSON.stringify(planetas));
        getLocalStorage();

        
    } catch (error) {
        console.log(error)
    }
}

const ordenarPlanetas = () =>{

    planetas.sort((o1, o2) => {
        if (o1.tamanio < o2.tamanio) {
            return -1;
        } else if (o1.tamanio > o2.tamanio) {
            return 1;
        } else {
            return 0;
        }
    });


    localStorage.setItem('Planetas',JSON.stringify(planetas));
    getLocalStorage();

}

const filtrarPlanetas =() =>{
    planetas = JSON.parse(localStorage.getItem('Planetas'));
    planetas = planetas.filter((dato) => {
        if (dato.distancia>=filtrarInput.value) {
            return 1
            
        } 
        else {
            return 0
            
        }
    })
    listarCita.innerHTML = '';

    planetas = planetas.filter((dato) => {
        if (dato.distancia>=filtrarInput.value) {
            return 1
            
        } 
        else {
            return 0
            
        }
    })

    planetas.map(cita => {
        const {numero,nombre,distancia,tamanio} = cita;
        listarCita.innerHTML += `
                            <td>${numero}</td>
                            <td>${nombre}</td>
                            <td>${distancia}</td>
                            <td>${tamanio}</td>
        `   
     })

    console.log(planetas)
}

const buscarPlanetas = () => {
    planetas = JSON.parse(localStorage.getItem('Planetas'));

    planetas = planetas.filter((dato) => {
        if (dato.nombre==buscarInput.value) {
            return 1
            
        } 
        else {
            return 0
            
        }
    })

    listarCita.innerHTML = '';
    
    planetas.map(cita => {
        const {numero,nombre,distancia,tamanio} = cita;
        listarCita.innerHTML += `
                            <td>${numero}</td>
                            <td>${nombre}</td>
                            <td>${distancia}</td>
                            <td>${tamanio}</td>
        `   
     })

    console.log(planetas)

}




const getLocalStorage = () =>{
    listarCita.innerHTML = '';
    let citasLocalStorage = JSON.parse(localStorage.getItem('Planetas'));
    //console.log(citasLocalStorage);
    citasLocalStorage.map(cita => {
        const {numero,nombre,distancia,tamanio} = cita;
        listarCita.innerHTML += `
                            <td>${numero}</td>
                            <td>${nombre}</td>
                            <td>${distancia}</td>
                            <td>${tamanio}</td>
        `   
     })
}
getLocalStorage();

enviar.addEventListener('click', e => {
    e.preventDefault();
    capturaPlanetas();
})


ordenar.addEventListener('click', e => {
    e.preventDefault();
    ordenarPlanetas();
})

filtrar.addEventListener('click', e => {
    e.preventDefault();
    filtrarPlanetas();
})

buscar.addEventListener('click', e => {
    e.preventDefault();
    buscarPlanetas();
})