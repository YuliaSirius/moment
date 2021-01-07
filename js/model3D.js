
// (function () {
  'use strict';

let increase = document.querySelectorAll('.increase');
let incr = [...increase];
let modelMomentum = document.querySelector('.connections_model_momentum');
let modelGt = document.querySelector('.connections_model_gt');
let modelSfl = document.querySelector('.connections_model_sfl');
let modelFl = document.querySelector('.connections_model_fl');

openModel = false;

incr.forEach((el) => {
  el.addEventListener('click', showModel);
});

function showModel() {
  openModel = true;
  switch (this.classList[1]) {
    case 'increase-momentum':
      modelMomentum.classList.add('showModel');
      modelMomentum
        .querySelector('.connections_model_icon-menu')
        .addEventListener('click', hideModel);
      break;
    case 'increase-gt':
      modelGt.classList.add('showModel');
      modelGt
        .querySelector('.connections_model_icon-menu')
        .addEventListener('click', hideModel);
      break;
    case 'increase-sfl':
      modelSfl.classList.add('showModel');
      modelSfl
        .querySelector('.connections_model_icon-menu')
        .addEventListener('click', hideModel);
      break;
    case 'increase-fl':
      modelFl.classList.add('showModel');
      modelFl
        .querySelector('.connections_model_icon-menu')
        .addEventListener('click', hideModel);
      break;
  }
}

function hideModel() {
  this.closest('.model').classList.remove('showModel');
  openModel = false;
}
// })();