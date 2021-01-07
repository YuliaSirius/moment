// (function () {
'use strict';
const wrapper = document.querySelector('.wrapper');
let sectionWidth = document.querySelector('.moment_content').offsetWidth;
let video = document.querySelector('.video_background');

const koeff = 100;
let counter = 0;
let counterMax = sectionWidth / koeff;

let blurred = false;
function scrollHorizontally(e) {
  e = window.event || e;
  let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  counter += delta;
  if (openModel) {
    return;
  }
  if (counter >= 0) {
    delBlur()
    blurred = false;
   } else {
       blur();
    blurred = true;
  }
  if (counter > 0) {
    counter = 0;
  }
  if (counter < -Math.floor(counterMax)) {
    counter = -Math.floor(counterMax);
  }
  wrapper.style.transform = `translateX(${counter * koeff}px)`;
}

function blur() {
console.log(blurred)
  if (blurred) {
    return;
  }
  let elements = document.querySelector('.blur');
  elements.beginElement();
}


function delBlur() {
  if (!blurred) {
    return;
  }
  let elements = document.querySelector('.delblur');
   elements.beginElement();
}



function addMouseWell(elem, callback) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      elem.addEventListener('wheel', callback);
    } else if ('onmousewheel' in document) {
      elem.addEventListener('mousewheel', callback);
    } else {
      elem.addEventListener('MozMousePixelScroll', callback);
    }
  } else {
    elem.attachEvent('onmousewheel', callback);
  }
}

addMouseWell(window, scrollHorizontally);
// })();
