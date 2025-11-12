let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

//slides 

let slides = document.querySelectorAll('.slide-container');
let index = 0;


function next(){
    slides[index].classList.remove('active');
    index = (index+1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


