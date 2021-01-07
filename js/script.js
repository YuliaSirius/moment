// (function () {
'use strict';

let openModel = false;
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

///// modal form

let request = document.querySelectorAll('.request');
let application = document.querySelector('.application');
let applWr = document.querySelector('.application-wr');

let openForm = false;
let req = [...request];
req.forEach((el) => {
  el.addEventListener('click', openRequest);
});

let iconBurger = application.querySelector('.menu_header_left_icon-menu');

iconBurger.addEventListener('click', closeRequest);

function openRequest() {
  if (!openForm) {
    iconBurger.querySelector('p:first-child').classList.add(
      'burger_active_first_line'
    );
    iconBurger.querySelector('p:last-child').classList.add(
      'burger_active_second_line'
    );
    application.classList.remove('closeApp');
    application.classList.add('openApp');
    applWr.classList.remove('delAnimAppWr');
    applWr.style.display = 'block';
  applWr.classList.add('animAppWr');
  openForm = true
  }
}

function closeRequest() {
  if (openForm) {
    iconBurger.querySelector('p:first-child').classList.remove('burger_active_first_line'
    );
    iconBurger.querySelector('p:last-child').classList.remove('burger_active_second_line'
    );

    application.classList.add('closeApp');
    setTimeout(() => {
      application.classList.remove('openApp');
      applWr.style.display = 'none';
    }, 300);
    applWr.classList.remove('animAppWr');
    applWr.classList.add('delAnimAppWr');
    openForm = false
  }
}
// })();
