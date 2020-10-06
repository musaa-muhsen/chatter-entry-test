"use strict";

// https://babeljs.io/ to complile modern javascript

var smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

var _loop = function _loop(i) {
  smoothScrollTrigger[i].addEventListener('click', function (e) {
    e.preventDefault();
    var href = smoothScrollTrigger[i].getAttribute('href');
    var targetElement = document.getElementById(href.replace('#', ''));
    var rect = targetElement.getBoundingClientRect().top;
    var offset = window.pageYOffset;
    var gap = 60;
    var target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth'
    });
  });
};

for (var i = 0; i < smoothScrollTrigger.length; i++) {
  _loop(i);
}

       /*
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }*/