window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; //see results as you are speaking

let p = document.createElement("p");
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('results', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

        p.textContent = transcript;
        // add new paragraphs for every new talk event
        if(e.results[0].isFinal) {
            p = document.createElement('p');
            words.appendChild(p);
        }
});

recognition.addEventListener('end', recognition.start);

recognition.start();