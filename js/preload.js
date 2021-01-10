// (function () {
'use strict';

function classElem(v) {
  return document.querySelector(v);
}

function loadbar() {
  let preload = classElem('.preload'),
    prog = classElem('.progress'),
    c = 0,
    tot = imagesHome.length;
  if (tot == 0) return doneLoading();

  function imgLoaded() {
    c += 1;
    let perc = (((100 / tot) * c) << 0) + '%';
    prog.style.width = perc;
    if (c === tot) return doneLoading();
  }

  function doneLoading() {
    preload.classList.add('loaded_hiding');
    window.setTimeout(function () {
      preload.classList.add('loaded');
      preload.classList.remove('loaded_hiding');
    }, 500);
  }

  function preloadImages() {
    for (let i = 0; i < arguments.length; i++) {
      let tImg = new Image();
      tImg.onload = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src = arguments[i];
    }
  }

  for (let i = 0; i < imagesHome.length; i++) {
    preloadImages(imagesHome[i]);
  }
}
document.addEventListener('DOMContentLoaded', loadbar, false);


let imagesHome = [
  './img/manager/manager_main_bg.png',
  './img/home/manager1x.png',
  './img/home/manager2x.png',
  './img/home/manager3x.png',
  './img/home/manager1x.webp',
  './img/home/manager2x.webp',
  './img/home/manager3x.webp',

  './img/home/woman1x.png',
  './img/home/woman2x.png',
  './img/home/woman3x.png',
  './img/home/woman1x.webp',
  './img/home/woman2x.webp',
  './img/home/woman3x.webp',

  './img/home/engineer1x.png',
  './img/home/engineer2x.png',
  './img/home/engineer3x.png',
  './img/home/engineer1x.webp',
  './img/home/engineer2x.webp',
  './img/home/engineer3x.webp',

  // './img/home/menu_image1x.png',
  // './img/home/menu_image2x.png',
  // './img/home/menu_image3x.png',
  // './img/home/menu_image1x.webp',
  // './img/home/menu_image2x.webp',
  // './img/home/menu_image3x.webp',
];
// })();
