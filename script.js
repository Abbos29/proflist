const modalBtn1 = document.getElementById('modal1-btn');
const modal1 = document.querySelector('#modal1');
const body = document.querySelector('body');

modalBtn1.addEventListener('click', function() {
  modal1.classList.toggle('active');
  body.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  if (!modal1.contains(event.target) && !modalBtn1.contains(event.target)) {
    modal1.classList.remove('active');
  }
});