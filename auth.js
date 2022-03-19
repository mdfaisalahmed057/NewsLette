const SignInForm=document.querySelector('#SignForm')
SignInForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email=SignInForm['Sign-Email'].value
    const password=SignInForm['Sign-Password'].value
    // console.log(email)
    auth.createUserWithEmailAndPassword(email,password).then(cred=>{
        // console.log(cred)
        const modal=document.querySelector('#modal')
        M.Modal.getInstance(modal).close();  //get instance will get the instance of closing 
    SignInForm.reset()// materilizw lib for closing
    })
})