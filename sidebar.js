

var hamburger = document.querySelector('.hamburger')
var sidemenu = document.querySelector('.sidemenu')
console.log(hamburger)

hamburger.addEventListener('click', () => {
  if(sidemenu.style.display == 'none') {
    sidemenu.style.display = 'flex';
  } else {
    sidemenu.style.display = 'none';
  }
})
