// DOM
const btnIMC = document.getElementById("calcularIMC")
const imgFemale = document.getElementById("imgFemale")
const imgMale = document.getElementById("imgMale")
const inputEdad = document.getElementById("inputEdad")
const inputPeso = document.getElementById("inputPeso")
const inputAltura = document.getElementById("inputAltura")

var edad = 0
var sexo = 0
var peso = 0
var altura = 0
var saludable = 0
var imc = 0

var datosImc = []



imgFemale.addEventListener ('click' , async (e)=> {
    sexo = 1
    imgFemale.style.width = "60%"
    imgMale.style.width = "35%"
})

imgMale.addEventListener ('click' , async (e)=> {
    sexo = 2
    imgFemale.style.width = "47%"
    imgMale.style.width = "45%"
})

btnIMC.addEventListener('click', async (e) => {
    edad = inputEdad.value
    peso = inputPeso.value
    altura = inputAltura.value

    var datosImc = [sexo,edad,peso,altura]
    console.log(edad,peso,altura)
    try {

        if (isNaN(edad) || edad == "" || edad == 0 || 
        isNaN(peso) || peso == "" || peso == 0 || 
        isNaN(altura) || altura == "" || altura == 0 ||
        isNaN(sexo) || sexo == "" || sexo == 0)
        {
        window.alert("Datos invalidos")
    }
    else {
        imc = peso/(Math.pow((altura/100),2))
        console.log(imc)

        let userImcLocal = JSON.parse(localStorage.getItem('userImcLocal'))
        if ( !userImcLocal ) {
            localStorage.setItem( 'userImcLocal' , JSON.stringify([]))
        }
        
        userImcLocal = JSON.parse(localStorage.getItem('userImcLocal'))
        userImcLocal.push(datosImc)
        localStorage.setItem( 'userImcLocal' , JSON.stringify(userImcLocal)) 
        



        //window.alert(`Tu IMC es de ${imc}`)
    }

    if (imc<18.5) {
        window.alert(`Tu IMC es de ${imc} y estás pod debajo del peso`)
    }
    
    else if (imc < 24.9 && imc > 18.5) {
        window.alert(`Tu IMC es de ${imc} saludable`)
        
    }

    else if (imc < 29.9 && imc > 25) {
        window.alert(`Tu IMC es de ${imc} sobrepeso`) 
    }

    else if (imc < 39.9 && imc > 30) {
        window.alert(`Tu IMC es de ${imc} Obeso`) 
    }

    else if (imc > 40) {
        window.alert(`Tu IMC es de ${imc} extrema`) 
    }
    
        
    } catch (error) {
        console.log(error)
        
    }



})


