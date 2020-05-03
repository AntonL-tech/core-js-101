// function extractNameFromTemplate(value) {
//   const res = value.substring(7, value.length - 1);
//   console.log(res);
// }
// extractNameFromTemplate('Hello, Chuck Norris!');


// function findElement(arr, value) {
//   console.log(arr.indexOf(value) || -1);
// }
// findElement(['Ace', 10, true], 10);


// function generateOdds(len) {

// }

// generateOdds(5);


// function getTail(arr, n) {
//   console.log(arr.slice(arr.length - n, arr.length));
// }

// getTail([ 'a', 'b', 'c', 'd'], 3);


// function toCsvText(arr) {
//   let newArray = arr.join('\n+');
//   console.log(newArray);
// }
// toCsvText([
//         [  0, 1, 2, 3, 4 ],
//       [ 10,11,12,13,14 ],
//          [ 20,21,22,23,24 ],
//        [ 30,31,32,33,34 ]
//       ]);


// function toArrayOfSquares(arr) {
//   console.log(arr.map((element) => element *= element )) ;
// }

// toArrayOfSquares([ 0, 1, 2, 3, 4, 5 ]);


// function getMovingSum(arr) {

// }


// getMovingSum([1, 1, 1, 1, 1]);S


// function getPositivesCount(arr) {
//    console.log(arr.filter((element) => typeof (element) === 'number' && element > 0).length);
// }


// getPositivesCount([ 1, '2' ]);

// function findAllOccurences(arr, item) {
//   console.log(arr.filter((element) => element === arr[item]).length);
// }

// findAllOccurences([0, 0, 1, 1, 1, 2], 2);


// function sortCitiesArray(arr) {
//   console.log(arr.sort((a, b) => {
//     if (a.country > b.country) return 1;
//     if (a.country < b.country) return -1;
//     if (a.country === b.country) {
//       if (a.city > b.city) return 1;
//       if (a.city < b.city) return -1;
//     }
//     return 0;
//   }));
// }

// sortCitiesArray([
//         { country: 'Russia',  city: 'Moscow' },
//        { country: 'Belarus', city: 'Minsk' },
//         { country: 'Poland',  city: 'Warsaw' },
//         { country: 'Russia',  city: 'Saint Petersburg' },
//         { country: 'Poland',  city: 'Krakow' },
//         { country: 'Belarus', city: 'Brest' }
//       ])


// function matrix(n) {
//   console.log(Array(n).fill(Array(n).fill()));
// }
// matrix(5);


// function getIntervalArray(start, end) {
//   let array = new Array(end + 1 - start).fill(0);
//   let counter = start - 1;
//   array = array.map(() => {
//     counter += 1;
//     return counter;
//   });
//   console.log(array);
// }

// getIntervalArray(-2, 2);


// console.log(11 % 3);
