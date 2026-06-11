
let password = document.getElementById('password');
let eyeIcon = document.getElementById('eyeIcon');

eyeIcon.addEventListener('click', () => {
    if(password.type === "password"){
        password.type = "text";
        eyeIcon.src = "Images/eye-close.png";
    }else{
        password.type = "password";
        eyeIcon.src = "Images/eye-open.png";
    }
})