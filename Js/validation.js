

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkinputs()
})

function checkinputs(){
    //get valus from the input
    const userNameValue =  username.value.trim()
    const emailValue =  email.value.trim()
    const passordValue =  password.value.trim()
    const password2value =  password2.value.trim()


    if(userNameValue === ''){
        //show error
        // add error class
        setErrorFor(username, 'username Cannot be blank')
    }else{
        //add success
        setSuccessFor(username)
    }
    if(emailValue === ''){
        setErrorFor(email, 'email Cannot be blank')
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'email is not valid')
    }else{
        setSuccessFor(email)
    }


    if(passordValue === ''){
        setErrorFor(password, 'password Cannot be blank')
    }else{
        setSuccessFor(password)
    }
    if(password2value === ''){
        setErrorFor(password2, 'password2 Cannot be blank')
    }else if(passordValue !== password2value ) {
        setErrorFor(password2, 'passwords does not match')
    } else{
        setSuccessFor(password2)
    }

}

function setErrorFor(input, message){
    const formControl  = input.parentElement; //form-control 
    const small = formControl.querySelector('small');
    
    // add error message inside samll
    small.innerText = message;
   
    //add error class
    formControl.className = 'form-control error'

}

function setSuccessFor(input){
    const formControl  = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}