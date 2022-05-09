'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-modal');
const openbtns = document.querySelectorAll('.show-modal');
//opening modal
const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
};
//closing modal
const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
};
//targeting all 3 buttons to open
for(let i = 0; i < openbtns.length; i++)
openbtns[i].addEventListener('click', openModal);
//closing w clicking button and overlay
closebtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//closing with esc key
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
