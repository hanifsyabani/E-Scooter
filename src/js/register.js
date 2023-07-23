// login
const iconEye = document.querySelector('.eye');
const sandi = document.querySelector('.inputPass');

iconEye.addEventListener('click', function(){
  if(sandi.type=="password"){
    sandi.type = "text";
    // iconEye.src = "eye.svg";
  }else{
    sandi.type = "password";
    // iconEye.src = "eye-off.svg";
  }
});