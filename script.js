const modalBtn1 = document.getElementById('modal1-btn');
const modal1 = document.querySelector('#modal1');
const modalBtn2 = document.getElementById('modal2-btn');
const modal2 = document.querySelector('#modal2');
const body = document.querySelector('#body');

modalBtn1.addEventListener('click', function() {
  modal1.classList.toggle('active');
  body.classList.remove('active');
});
modalBtn2.addEventListener('click', function() {
    modal2.classList.toggle('active');
    body.classList.remove('active');
  });
  

document.addEventListener('click', function(event) {
  if (!modal1.contains(event.target) && !modalBtn1.contains(event.target)) {
    modal1.classList.remove('active');
  }

  if (!modal2.contains(event.target) && !modalBtn2.contains(event.target)) {
    modal2.classList.remove('active');
  }
});