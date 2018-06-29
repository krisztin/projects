const nav = document.querySelector('#main'); // grab the nav element with the id main
const topOfNav = nav.offsetTop;

function fixNav() {
 if (window.scrollY >= topOfNav) {
   // we target the body so that we can then target its children
   // therefore when we enter the 'fixed' state you can play around with the whole doc
   // not just the nav
   document.body.classList.add('fixed-nav'); 
   // fixed element is taken out of doc flow and the padding goes off a bit
   // this fixes it
   document.body.style.paddingTop = nav.offsetHeight + 'px';
 } else {
   document.body.style.paddingTop = 0;
   document.body.classList.remove('fixed-nav');
 }
}

window.addEventListener('scroll', fixNav);