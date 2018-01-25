

var hamburger = document.querySelector('.hamburger');
var sidemenu = document.querySelector('.sidemenu');
var menuWrapper = document.querySelector('.sidemenu-wrapper');
var topBar = document.querySelector('.topBar');
var bottomBar = document.querySelector('.bottomBar');
var socialLinks = document.querySelector('.sidemenu__social');
var bgImg = Array.from(document.querySelectorAll('.bg-img'));
console.log(bgImg)
var menuOpen = false;



menuWrapper.style.visibility = 'hidden';
sidemenu.style.width = '0';
topBar.style.width = '0';
bottomBar.style.width = '0';




hamburger.addEventListener('click', () => {
  menuOpen = true;

  if(sidemenu.style.width == '0px') {
    $('.slideshow__text-container').on('mousewheel touchmove', function(e) {
      e.preventDefault();
    });
    hamburger.classList.add( "active" );
    sidemenu.style.width = '350px';
    topBar.style.width = '100vw';
    bottomBar.style.width = '100vw';
    socialLinks.style.width = '100%';
    socialLinks.style.visibility = 'visible';
    menuWrapper.style.width = '100%';
    menuWrapper.style.visibility = 'visible';
    bgImg.map((el, i) => {
      el.classList.add('test');
      el.style.transition = '1.4s'
    })


  } else {
    menuOpen = false;
    hamburger.classList.remove( "active" );
    sidemenu.style.width = '0px';
    topBar.style.width = '0px';
    bottomBar.style.width = '0px';
    socialLinks.style.width = '0px';
    socialLinks.style.visibility = 'hidden';
    menuWrapper.style.width = '0px';
    menuWrapper.style.visibility = 'hidden';
    bgImg.map((el, i) => {
      el.classList.remove('test');
      setTimeout(function(){ el.style.transition = '0s'; }, 1000);

    })
    $('.slideshow__text-container').unbind('mousewheel')
  }
})

// console.log(menuOpen)
// if(menuOpen == true) {
//
// }
