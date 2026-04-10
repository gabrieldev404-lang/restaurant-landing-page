document.querySelector('.hamburguer-area').addEventListener('click', activate)

let bar = document.querySelectorAll('.hamburguer-area .active-area');
let active = document.querySelector('.header ul');

function activate() {
    active.classList.toggle('active');
    bar.forEach((element)=>{
        element.classList.toggle('white');
    });
};

