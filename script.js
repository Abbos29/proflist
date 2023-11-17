const modalBtn1 = document.getElementById('modal1-btn');
const modal1 = document.querySelector('#modal1');
const modalBtn2 = document.getElementById('modal2-btn');
const modal2 = document.querySelector('#modal2');
const body = document.querySelector('body');
const close1 = document.querySelector('.order-close1');
const close2 = document.querySelector('.order-close2');

// console.log(close);







modalBtn1.addEventListener('click', function () {
  modal1.classList.toggle('active');
  body.classList.add('active');


});

modalBtn2.addEventListener('click', function () {
  modal2.classList.toggle('active');
  body.classList.add('active');

});

close1.addEventListener('click', function () {
  modal1.classList.remove('active');
  body.classList.remove('active');
});

close2.addEventListener('click', function () {
  modal2.classList.remove('active');
  body.classList.remove('active');
});


// document.addEventListener('click', function (event) {
//   if (!modal1.contains(event.target) && !modalBtn1.contains(event.target)) {
//     modal1.classList.remove('active');
//     body.classList.remove('active');

//   }

//   if (!modal2.contains(event.target) && !modalBtn2.contains(event.target)) {
//     modal2.classList.remove('active');
//     body.classList.remove('active');
//   }
// });