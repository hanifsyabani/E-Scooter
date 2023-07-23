// swiper her0
var swiper = new Swiper(".right-hero", {
  spaceBetween: 30,
  centeredSlides: true,
  loop : true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// color
const center = document.querySelector('.red-img');
const bg = document.querySelector('.img-center');
const red = document.querySelector('.img-red');
const black = document.querySelector('.img-black');
const blue = document.querySelector('.img-blue');
const yellow = document.querySelector('.img-yellow');

red.addEventListener('click', function(){
  center.src= 'red.png';
  bg.style.background='linear-gradient(to right, #ed213a, #93291e)';
});

black.addEventListener('click', function(){
  center.src='hero.png';
  bg.style.background='linear-gradient(to right, #000000, #434343)';
});

blue.addEventListener('click', function(){
  center.src='blue.png';
  bg.style.background='linear-gradient(to right, #2193b0, #6dd5ed)';
});

yellow.addEventListener('click', function(){
  center.src='yellow.png';
  bg.style.background='linear-gradient(to right, #cac531, #f3f9a7)'
});

// navbar
const hamburger = document.querySelector('.hamburger');
const navLinks= document.querySelector('.nav-link');

hamburger.onclick=()=>{
  navLinks.classList.toggle('active');
}

// darkmode
const moon = document.querySelector('.bulan');
const btnLogin = document.querySelector('.btn-login');
const footer = document.querySelector('.container-footer');

moon.onclick=()=>{
  document.body.classList.toggle('darkMode');
  if(document.body.classList.contains('darkMode')){
    moon.src='sun.svg';   
    btnLogin.style.color='white';
    footer.style.backgroundColor = 'black';
  }else{
    moon.src='moon.svg';
    btnLogin.style.color='#42454A';
    footer.style.backgroundColor = '#42454A';
  }

}

