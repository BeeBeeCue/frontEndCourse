const fruitArray = ['banana', 'apple', 'poopypants'];
console.log(fruitArray);

const testSort = [21, 4, 41, 14];
testSort.sort((a, b) => a - b);
console.log(testSort);

const result = testSort.map((x) => (x * 2));
console.log(result);


const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(testSort.reduce(reducer));



console.log(fruitArray.forEach(v => {
  console.log('Test: ' + v);
}));