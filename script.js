const body = document.querySelector('body');
const modal2 = document.getElementById('modal2')
const modalbtn1 = document.querySelector('#modal1-btn')

modalbtn1.addEventListener("click", function(){
   modal2.classList.toggle('active')
    body.classList.toggle('active')
})
// function handleKeyPress(){
//     if( === "Escape")
//     modal2.toggleClasslist.remove('active')
//     toggleContainer.addEventListener('click', toggleActiveClass);
//     document.addEventListener('keydown', handleKeyPress);
// }