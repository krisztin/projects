const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const hands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if (secondsDegrees === 0) {
    hands.forEach(hand => hand.style.transition = 'none');
  } else {
    hands.forEach(hand => hand.style.transition = '');
  }
}

setInterval(setDate, 1000);
setDate();
