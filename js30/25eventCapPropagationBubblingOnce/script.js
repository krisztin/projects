const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // prevents bubbling
}

divs.forEach(div => div.addEventListener('click', logText));

// by default if you listen on nested elements and ie click .three
// captures them from top to bottom ie .one, .two, .three
// then bubbles (fires) up .three, .two, .one


// if we want to grab .one no matter what's clicked:
divs.forEach(div => div.addEventListener('click', logText, {
  capture: true,
}));

// if we only want it to fire once when clicked and never again:
divs.forEach(div => div.addEventListener('click', logText, {
  once: true,
}));

// this is the same as
// div.removeEventListener('click', logText);

button.addEventListener('click', () => {
  console.log('click');
}, {
  once: true,
});
