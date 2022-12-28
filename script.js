let scrollTop = 0;
let lastScrollTop = 0;
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
  scrollTop = pageYOffset;
  if (scrollTop > lastScrollTop) {
    header.classList.add('header_transform');
  } else {
    header.classList.remove('header_transform')
  }
  lastScrollTop = scrollTop;
});