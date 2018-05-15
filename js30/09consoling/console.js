const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hi')

// Interpolated
console.log('hi i am a %s string', 'stringy');

// Styled
console.log('%c i am some styled text', 'font-size: 20px');

// warning!
console.warn(`I'm warning you!`);

// Error :|
console.error('bleep');

// Info
console.info('fun fact')

// Testing
const p = document.querySelector('p');

console.assert(1 === 2, 'nope');

// clearing
console.clear()

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`); // or groupCollapsed for a collapsed view
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})

// counthing
console.count('thing');
console.count('thing');
console.count('thing');
console.count('thing');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/krisztin')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });