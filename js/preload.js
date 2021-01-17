'use strict';
if (localStorage.getItem('showPreloader') == 'false') {
} else {
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
  ];
  function classElem(v) {
    return document.querySelector(v);
  }
  let preloader = document.createElement('div');
  preloader.className = 'preload';
  preloader.innerHTML = `<svg
  width="58"
  height="58"
  viewBox="0 0 58 58"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"      >
  <rect width="58" height="58" fill="url(#pattern0)" />
  <defs>
    <pattern
      id="pattern0"
      patternContentUnits="objectBoundingBox"
      width="1"
      height="1">
      <use xlink:href="#image0" transform="scale(0.00625)" />
    </pattern>
    <image
      id="image0"
      width="160"
      height="160"
      xlink:href="data:image/png;base64,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"
    />
  </defs>
  </svg>
  <div class="progstat"></div>
  <div class="progress"></div>`;
  document.body.append(preloader);

  window.addEventListener('load', loadbar, false);
  function loadbar() {
    let preload = classElem('.preload'),
      prog = classElem('.progress'),
      c = 0,
      tot = imagesHome.length;

    function doneLoading() {
      preload.classList.add('loaded_hiding');
      window.setTimeout(function () {
        preload.classList.add('loaded');
        preload.classList.remove('loaded_hiding');
        localStorage.setItem('showPreloader', 'false');
      }, 500);
    }
    function imgLoaded() {
      c += 1;
      let perc = (((100 / tot) * c) << 0) + '%';
      prog.style.width = perc;
      if (c === tot) return doneLoading();
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
}
