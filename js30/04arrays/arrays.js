// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [{first: 'Albert',last: 'Einstein',year: 1879,passed: 1955},
  {first: 'Isaac',last: 'Newton',year: 1643,passed: 1727},
  {first: 'Galileo',last: 'Galilei',year: 1564,passed: 1642},
  {first: 'Marie',last: 'Curie',year: 1867,passed: 1934},
  {first: 'Johannes',last: 'Kepler',year: 1571,passed: 1630},
  {first: 'Nicolaus',last: 'Copernicus',year: 1473,passed: 1543},
  {first: 'Max',last: 'Planck',year: 1858,passed: 1947},
  {first: 'Katherine',last: 'Blodgett',year: 1898,passed: 1975},
  {first: 'Ada',last: 'Lovelace',year: 1815,passed: 185},
  {first: 'Sarah E.',last: 'Goode',year: 1855,passed: 1905},
  {first: 'Lise',last: 'Meitner',year: 1878,passed: 1965},
  {first: 'Hanna',last: 'Hammarström',year: 1829,passed: 1905}
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
const fifteenBeef = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} + ${inventor.last}`); //this is so that you don't have to concat with a  + ' ' +

// 3. Sort the inventors by birthdate, oldest to youngest
const order = inventors.sort(function(a, b) {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

const orderBeef = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

// 4. How many years did all the inventors live?
const lived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

// 5. Sort the inventors by years lived
const longest = inventors.sort((a, b) => {
  const last = a.passed - a.year;
  const next = b.passed - b.year;
  return last > first ? -1 : 1;
  // if(last > next) {
  //   return -1;
  // } else {
  //   return 1;
  // }
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(document.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphaSort = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(', ');
  const [bLast, bFirst] = b.split(', ');
  return aLast > bLast ? 1 : -1;
});


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {  //whilst it's looping through if it finds an item that's new then it assigns 0 to it...
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {}); //...because we don't know the items in the array or new ones could be added and it would be a pain to add all as a key between {} i.e. walk=0