// menu trigger -------------------------------------------------

const triggermenu = document.querySelector('.trigger-menu');
const menu = document.querySelector('.mobile-menu');

triggermenu.addEventListener('click',function(){
  menu.classList.toggle('open');
  menu.classList.toggle('close');
});

// page nav -------------------------------------------------

const pagenav = document.querySelector('.page-nav');
const contentstart = document.querySelector('.pillar-content');
const pagenavtrigger = document.querySelector('.page-nav-trigger');
const pagenavdropdown = document.querySelector('.page-nav__dropdown');

const contentoffset = contentstart.getBoundingClientRect().top + pageYOffset;

const pagenavshow = (arg) => {
  if ( window.pageYOffset < arg ){
    pagenav.classList.remove('visible');
    pagenav.classList.add('hidden');
  } else {
    pagenav.classList.remove('hidden');
    pagenav.classList.add('visible');
  }
}
const pagenavdropdowntoggle = (arg) => {
   pagenavtrigger.addEventListener('mouseenter', () => {
    pagenavdropdown.classList.remove('hidden');
    pagenavdropdown.classList.add('visible');
  })
  pagenavtrigger.addEventListener('mouseleave', () => {
    pagenavdropdown.classList.remove('visible');
    pagenavdropdown.classList.add('hidden');
  })
}

if (pagenav){
  pagenavdropdowntoggle();
}

// scrollbar porgress indicator -----------------------------

const scrollbar = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// scroll event ---------------------------------------------

window.onscroll = () => {
  scrollbar();
  if (pagenav){
    pagenavshow(contentoffset);
  }
}

