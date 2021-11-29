var moneda = [['Elige tu Moneda', 0],['Dolar', 1],['Peso Mexicano', 21.67],['Peso Colombiano', 4035.00],['Euro', 0.89],['Libra Esterlina', 0.75]];
console.log(moneda)

const btn1 = document.getElementById("monedaInicial")
const btn2 = document.getElementById("monedaFinal")
const btn3 = document.getElementById("convertir")
const valid = document.getElementById("validacion")
var moninit = 0
var monfin = 0
var moneyInput = document.getElementById("input-money")

valid.style.display = "none"

btn1.addEventListener('click', async (e) => {
    btn1.innerHTML = ""
    moneda.forEach(moneda => {
        let val = document.createElement("div");
        val.innerHTML = moneda[0]
        btn1.appendChild(val)
        val.addEventListener('click', async (e) => {
            moninit = moneda[1]
            console.log (moninit)
        })
    }
    ) 
})

btn2.addEventListener('click', async (e) => {
    btn2.innerHTML = ""
    moneda.forEach(moneda => {
        let val = document.createElement("div");
        val.innerHTML = moneda[0]
        btn2.appendChild(val)
        val.addEventListener('click', async (e) => {
            monfin = moneda[1]
            console.log (monfin)
        })
    }
    ) 
})

btn3.addEventListener('click', async (e) => {
    console.log(moneyInput.value)
    valid.style.display = "inline"
    if (isNaN(moneyInput.value) || moneyInput.value == "" || moninit == 0 || monfin == 0){
        valid.style.backgroundColor = "red"
        window.alert("Datos invalidos")
    }
    else {
        valid.style.backgroundColor = "green"
        let valorFinal = moneyInput.value*monfin/moninit
        console.log(valorFinal)
        window.alert(valorFinal)
    }

})