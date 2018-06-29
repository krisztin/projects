const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;


function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    // .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

// when new voice is selected the speech stops and starts again
/* startover is so that if we want to build a different function
that will not need the voice to restart from beginning we can pass in false
*/
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
/*
stopButton.addEventListener('click', toggle(false)); - loads with doc and becomes useless
Solutions
stopButton.addEventListener('click', toggle.bind(null, false));
stopButton.addEventListener('click', function(){
  toggle(false);
});
stopButton.addEventListener('click', () => toggle(false));
*/
stopButton.addEventListener('click', toggle.bind(null, false));
