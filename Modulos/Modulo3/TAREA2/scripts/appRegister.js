function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');

  const username = document.getElementById('name');
  const lastName = document.getElementById('lastName');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const log = document.getElementById('log');
  const descripcion = document.getElementById('exampleFormControlTextarea1');
  const btnIngresar = document.getElementById('btnIngresar');

  btnIngresar



  btnIngresar.addEventListener('click', async (e) => {
    try {
        let userLocal = JSON.parse(localStorage.getItem('user'))
        if ( !userLocal ) {
            localStorage.setItem( 'user' , JSON.stringify([]))
        }
        let users = [username.value , lastName.value , phone.value , address.value , descripcion.value ]
        console.log(users)
        userLocal = JSON.parse(localStorage.getItem('user'))
        userLocal.push(users)
        localStorage.setItem( 'user' , JSON.stringify(userLocal)) 
    

        
    } catch (error) {
        console.log(error)
        
    }
    
  });