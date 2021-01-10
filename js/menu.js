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

let pictureWr = menu.querySelector('.menu_content_image_wr');
let picture = pictureWr.querySelector('img');
let source = pictureWr.querySelector('source');

function showImg() {
  switch (this.classList[0]) {
    case 'momentum_link':
      source.srcset = './img/moment/moment_content_img.webp 1x, ./img/moment/moment_content_img2x.webp 2x, ./img/moment/moment_content_img3x.webp 3x';
            picture.src = './img/moment/moment_content_img.png';
      picture.srcset =
        './img/moment/moment_content_img2x.png 2x, ./img/moment/moment_content_img3x.png 3x';
      break;
    case 'momentumgt_link':
      source.srcset =
        './img/gt/img_gt.webp 1x, ./img/gt/img_gt2x.webp 2x, ./img/gt/img_gt3x.webp 3x';
      picture.src = './img/gt/img_gt.png';
      picture.srcset =
        './img/gt/img_gt2x.png 2x, ./img/gt/img_gt3x.png 3x';
      break;
    case 'momentumsfl_link':
      source.srcset =
        './img/sfl/moment_content_img_sfl.webp 1x, ./img/sfl/moment_content_img_sfl2x.webp 2x, ./img/sfl/moment_content_img_sfl3x.webp 3x';
      picture.src = './img/sfl/moment_content_img_sfl.png';
      picture.srcset =
        './img/sfl/moment_content_img_sfl2x.png 2x, ./img/sfl/moment_content_img_sfl3x.png 3x';
      break;
    case 'momentumfl_link':
      source.srcset =
        './img/fl/moment_content_img_fl.webp 1x, ./img/fl/moment_content_img_fl2x.webp 2x, ./img/fl/moment_content_img_fl3x.webp 3x';
      picture.src = './img/fl/moment_content_img_fl.png';
      picture.srcset =
        './img/fl/moment_content_img_fl2x.png 2x, ./img/fl/moment_content_img_fl3x.png 3x';
      break;
  }
}
