'use strict';
///menu
const iconOpen = document.querySelector('.header_top_left_icon-menu');
const menu = document.querySelector('.menu');

iconOpen.addEventListener('click', clickMenu);
iconOpen.addEventListener('mouseenter', hoverMenu);

iconOpen.addEventListener('mouseleave', delHoverMenu);

let openMenu = false;

function clickMenu() {
  if (!openMenu) {
    this.querySelector('p:first-child').classList.add(
      'burger_active_first_line'
    );
    this.querySelector('p:last-child').classList.add(
      'burger_active_second_line'
    );
    menu.classList.remove('close');
    menu.classList.add('open');
    openMenu = true;
  } else {
    this.querySelector('p:first-child').classList.remove(
      'burger_active_first_line'
    );
    this.querySelector('p:last-child').classList.remove(
      'burger_active_second_line'
    );
    menu.classList.add('close');
    setTimeout(() => {
      menu.classList.remove('open');
    }, 300);
    openMenu = false;
  }
}

function hoverMenu() {
  if (!openMenu) {
    this.querySelector('p:first-child').classList.add('lineUp');
    this.querySelector('p:last-child').classList.add('lineDown');
  }
}
function delHoverMenu() {
  this.querySelector('p:first-child').classList.remove('lineUp');
  this.querySelector('p:last-child').classList.remove('lineDown');
}

menu.querySelector('.momentum_link').addEventListener('mouseenter', showImg);
menu.querySelector('.momentumgt_link').addEventListener('mouseenter', showImg);
menu.querySelector('.momentumsfl_link').addEventListener('mouseenter', showImg);
menu.querySelector('.momentumfl_link').addEventListener('mouseenter', showImg);

let picture = menu.querySelector('.menu_content_image_img');
let pictureWr = menu.querySelector('.menu_content_image_wr');
let source = pictureWr.querySelector('source');

function showImg() {
  switch (this.classList[0]) {
    case 'momentum_link':
      source.srcset = './img/moment/moment_content_img.webp';
      picture.src = './img/moment/moment_content_img.png';
      break;
    case 'momentumgt_link':
      source.srcset = './img/gt/moment_content_img_gt.webp';
      picture.src = './img/gt/moment_content_img_gt.png';
      break;
    case 'momentumsfl_link':
      source.srcset = './img/sfl/moment_content_img_sfl.webp';
      picture.src = './img/sfl/moment_content_img_sfl.png';
      break;
    case 'momentumfl_link':
      source.srcset = './img/fl/moment_content_img_fl.webp';
      picture.src = './img/fl/moment_content_img_fl.png';
      break;
  }
}

// image1.addEventListener('mouseenter', mouseOver1);
// image1.addEventListener('mouseleave', mouseOver1);
