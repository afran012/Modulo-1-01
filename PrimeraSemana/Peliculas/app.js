let x = 10

const promesa = new Promise (( resolve , reject ) => {
    if (x==10) {
        resolve('La variable es igual 10')
    }
    else {
        reject ('la promsesa es diferente a 10')
    }
})

console.log(promesa)
promesa.then(res => {
    console.log('succes',res);
}).catch ( error => {
    console.log( "error" , error)
})