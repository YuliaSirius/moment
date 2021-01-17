(function () {
  'use strict';
  const employee = document.querySelector('.employee');
  const engineer = document.querySelector('.engineer');
  const manager = document.querySelector('.manager');
  const wr1 = document.querySelector('.wr-1');
  const wr2 = document.querySelector('.wr-2');
  const wr3 = document.querySelector('.wr-3');
  const text = document.querySelector('.home_content_text');
  const homeImgs = document.querySelector('.home_images');
  const h1 = document.querySelector('h1');
  const homeLinks = document.querySelector('.home_links');
  const line = document.querySelector(`.line`);
  const image1 = document.querySelector('.home_images_1');
  const image2 = document.querySelector('.home_images_2');
  const image3 = document.querySelector('.home_images_3');

  const titleEmployee = document.querySelector('.employee_title');
  const titleEngineer = document.querySelector('.engineer_title');
  const titleManager = document.querySelector('.manager_title');

  const linksEmployee = document.querySelector('.employee_links');
  const linksEngineer = document.querySelector('.engineer_links');
  const linksManager = document.querySelector('.manager_links');

  const textEmployee = document.querySelector('.employee_text');
  const textEngineer = document.querySelector('.engineer_text');
  const textManager = document.querySelector('.manager_text');

  const videoEmployee = document.querySelector('.employee_video');
  const videoEngineer = document.querySelector('.engineer_video');
  const videoManager = document.querySelector('.manager_video');

  let blurrHome = false;

  let heightWr1 = wr1.clientHeight;
  document.documentElement.style.setProperty('--heightWr1', `${heightWr1}px`);
  let heightWr2 = wr2.clientHeight;
  document.documentElement.style.setProperty('--heightWr2', `${heightWr2}px`);
  let heightWr3 = wr3.clientHeight;
  document.documentElement.style.setProperty('--heightWr3', `${heightWr3}px`);
  let heightImages = homeImgs.clientHeight;
  document.documentElement.style.setProperty('--heightImages', heightImages);

  window.addEventListener('resize', () => {
    let heightWr1 = wr1.clientHeight;
    document.documentElement.style.setProperty('--heightWr1', `${heightWr1}px`);
    let heightWr2 = wr2.clientHeight;
    document.documentElement.style.setProperty('--heightWr2', `${heightWr2}px`);
    let heightWr3 = wr3.clientHeight;
    document.documentElement.style.setProperty('--heightWr3', `${heightWr3}px`);
    let heightImages = homeImgs.clientHeight;
    document.documentElement.style.setProperty('--heightImages', heightImages);
  });

  employee.addEventListener('click', doActive);
  engineer.addEventListener('click', doActive);
  manager.addEventListener('click', doActive);

  function doActive(e) {
    downAll();
    setTimeout(() => {
      up(e.target);
    }, 300);
  }

  function downAll() {
    image1.removeEventListener('mouseenter', mouseOver1);
    image1.removeEventListener('mouseleave', mouseOver1);
    image2.removeEventListener('mouseenter', mouseOver3);
    image2.removeEventListener('mouseleave', mouseOver3);
    image3.removeEventListener('mouseenter', mouseOver2);
    image3.removeEventListener('mouseleave', mouseOver2);

    changeClass(speech1, 'upSpeech', 'downSpeech');
    changeClass(speech2, 'upSpeech', 'downSpeech');
    changeClass(speech3, 'upSpeech', 'downSpeech');

    employee.classList.remove('active');
    engineer.classList.remove('active');
    manager.classList.remove('active');

    h1.classList.add('down');
    h1.classList.remove('up');

    text.classList.add('downTextHome');
    text.classList.remove('upText');

    homeLinks.classList.add('downLinkHome');
    homeLinks.classList.remove('upLinks');

    if (
      !image2.classList.contains('downImgManager') &&
      !image2.classList.contains('upImgManager')
    ) {
      image2.classList.add('downImgBegin');
    }

    if (
      !image1.classList.contains('downImgEmployee') &&
      !image1.classList.contains('upImgEmployee')
    ) {
      image1.classList.add('downImgBegin');
    }

    if (
      !image3.classList.contains('downImgEngineer') &&
      !image3.classList.contains('upImgEngineer')
    ) {
      image3.classList.add('downImgBegin');
    }
    changeClass(image1, 'upImgEmployee', 'downImgEmployee');
    changeClass(image3, 'upImgEngineer', 'downImgEngineer');
    changeClass(image2, 'upImgManager', 'downImgManager');

    changeClass(titleEmployee, 'up', 'down');
    changeClass(titleEngineer, 'up', 'down');
    changeClass(titleManager, 'up', 'down');

    changeClass(linksEmployee, 'upLinks', 'downLinks');
    changeClass(linksEngineer, 'upLinks', 'downLinks');
    changeClass(linksManager, 'upLinks', 'downLinks');

    changeClass(textEmployee, 'upText', 'downText');
    changeClass(textEngineer, 'upText', 'downText');
    changeClass(textManager, 'upText', 'downText');

    changeClass(videoEmployee, 'upVideo', 'downVideo');
    changeClass(videoEngineer, 'upVideo', 'downVideo');
    changeClass(videoManager, 'upVideo', 'downVideo');
  }

  function changeClass(common, curr, newClass) {
    if (common.classList.contains(curr)) {
      common.classList.add(newClass);
      common.classList.remove(curr);
    }
  }

  function up(param) {
    blur();
    param.classList.add('active');
    let div = document.querySelector(`.${param.classList[0]}-image`);
    let title = document.querySelector(`.${param.classList[0]}_title`);
    let text = document.querySelector(`.${param.classList[0]}_text`);
    let links = document.querySelector(`.${param.classList[0]}_links`);
    let video = document.querySelector(`.${param.classList[0]}_video`);

    wr2.classList.remove('wr2Transform2');
    wr1.classList.add('wr1Transform');
    wr2.classList.add('wr2Transform');
    wr3.classList.add('wr3Transform');

    line.style.display = 'none';

    div.classList.remove('downImgBegin');
    if (param.classList[0] === 'employee') {
      div.classList.add('upImgEmployee');
      image1.addEventListener('mouseenter', mouseOver1);
      image1.addEventListener('mouseleave', mouseLeave1);
    } else if (param.classList[0] === 'engineer') {
      div.classList.add('upImgEngineer');
      image3.addEventListener('mouseenter', mouseOver2);
      image3.addEventListener('mouseleave', mouseLeave2);
    } else if (param.classList[0] === 'manager') {
      div.classList.add('upImgManager');
      image2.addEventListener('mouseenter', mouseOver3);
      image2.addEventListener('mouseleave', mouseLeave3);
      wr2.classList.add('wr2Transform2');
    }
    title.classList.add('up');
    text.classList.add('upText');
    links.classList.add('upLinks');
    video.style.display = 'block';
    video.classList.add('upVideo');
  }

  //////hover на speech
  const speech1 = document.querySelector('.home_images_1_speech');
  const speech2 = document.querySelector('.home_images_3_speech');
  const speech3 = document.querySelector('.home_images_2_speech');

  function mouseOver1() {
    speech1.classList.add('upSpeech');
    speech1.classList.remove('downSpeech');
  }
  function mouseOver2() {
    speech2.classList.add('upSpeech');
    speech2.classList.remove('downSpeech');
  }
  function mouseOver3() {
    speech3.classList.add('upSpeech');
    speech3.classList.remove('downSpeech');
  }
  function mouseLeave3() {
    speech3.classList.remove('upSpeech');
    speech3.classList.add('downSpeech');
  }
  function mouseLeave2() {
    speech2.classList.remove('upSpeech');
    speech2.classList.add('downSpeech');
  }
  function mouseLeave1() {
    speech1.classList.remove('upSpeech');
    speech1.classList.add('downSpeech');
  }

  ///// skroll

  function scrollChange(e) {
    e = window.event || e;
    let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    if (delta < 0) {
      if (image1.classList.contains('upImgEmployee')) {
        downAll();
        setTimeout(() => {
          up(engineer);
        }, 300);
      } else {
      }
      if (image3.classList.contains('upImgEngineer')) {
        downAll();
        setTimeout(() => {
          up(manager);
        }, 300);
      }
      if (
        !image1.classList.contains('downImgEmployee') &&
        !image3.classList.contains('downImgEngineer') &&
        !image2.classList.contains('downImgManager')
      ) {
        downAll();
        setTimeout(() => {
          up(employee);
        }, 300);
      }
    }
    if (delta > 0) {
      if (image2.classList.contains('upImgManager')) {
        downAll();
        setTimeout(() => {
          up(engineer);
        }, 300);
      }
      if (image3.classList.contains('upImgEngineer')) {
        downAll();
        setTimeout(() => {
          up(employee);
        }, 300);
      }
      if (image1.classList.contains('upImgEmployee')) {
        downAll();
        setTimeout(() => {
          changeClass(image1, 'downImgEmployee', 'upImgBegin');
          changeClass(image2, 'downImgManager', 'upImgBegin');
          changeClass(image3, 'downImgEngineer', 'upImgBegin');
          changeClass(image1, 'downImgBegin', 'upImgBegin');
          changeClass(image2, 'downImgBegin', 'upImgBegin');
          changeClass(image3, 'downImgBegin', 'upImgBegin');
          changeClass(h1, 'down', 'up');
          changeClass(text, 'downTextHome', 'upTextBegin');
          delBlur();
          changeClass(homeLinks, 'downLinkHome', 'upLinksBegin');
          wr1.classList.remove('wr1Transform');
          wr2.classList.remove('wr2Transform');
          wr3.classList.remove('wr3Transform');
          line.style.display = 'block';
        }, 300);
        setTimeout(() => {
          image1.classList.remove('upImgBegin');
          image2.classList.remove('upImgBegin');
          image3.classList.remove('upImgBegin');
          text.classList.remove('upTextBegin');
          homeLinks.classList.remove('upLinksBegin');
        }, 600);
      }
    }
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

  addMouseWell(window, scrollChange);

  function blur() {
    if (blurrHome) {
      return;
    }
    let elements = document.querySelector('#blur');
    elements.beginElement();
    blurrHome = true;
  }

  function delBlur() {
    if (!blurrHome) {
      return;
    }
    let elements = document.querySelector('#delblur');
    elements.beginElement();
    blurrHome = false;
  }
})();

let bottomVideoEmployee = document.querySelector('.employee_video_bottom');
let bottomVideoManager = document.querySelector('.manager_video_bottom');
let bottomVideoEngineer = document.querySelector('.engineer_video_bottom');

bottomVideoEmployee.addEventListener('click', openPage);
bottomVideoManager.addEventListener('click', openPage);
bottomVideoEngineer.addEventListener('click', openPage);

function openPage(event) {
  event.preventDefault();
  this.querySelector('video').classList.add('openvideo');
  this.querySelector('.wr_vid').classList.add('openvideo');
  setTimeout(() => {
    if (this == bottomVideoEmployee)
      
      
      
      window.location.assign("employee.html");
      if (this == bottomVideoManager)
      window.location.assign("manager.html");
      if (this == bottomVideoEngineer)
      window.location.assign("engineer.html");
  }, 600);
}

// if (location.hash) { // на случай рефреша
//   document.addEventListener("DOMContentLoaded", function(event) {
//     setHash(location.hash);
//   });
// }
