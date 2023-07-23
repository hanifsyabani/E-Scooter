// login
const iconEye = document.querySelector('.eye')
const sandi = document.getElementById('passwordInputs');

iconEye.addEventListener('click', function(){
  if(sandi.type=="password"){
    sandi.type = "text";
    // iconEye.src = "eye.svg";
  }else{
    sandi.type = "password";
    // iconEye.src = "eye-off.svg";
  }
});