/////////////////////////////////////////////////////////////
// House Robbers
//
// You are given a list of homes with dollar amounts associated with them
// If you rob one house, you can't rob the houses next to them.
//
// Ex. [a, b, c]
// if I rob house 'a', I can't rob house b
// if I rob house 'b', I can't rob a or c
// if I rob house 'c', I can't rob house b
//
// Your goal is to tell me the max dollar amount that I can make
//
/////////////////////////////////////////////////////////////

var testCase = [123, 12345, 1, 2, 543, 41];
var simpleTestCase = [1,2,3];

var houseRobbers = function (houses) {
  var bestMoneySoFar = [];
  houses[-1] = 0;
  houses[-2] = 0;
  houses[-3] = 0;
  bestMoneySoFar[-1] = 0;
  bestMoneySoFar[-2] = 0;
  bestMoneySoFar[-3] = 0;

  robHouse(houses.length-1);

  function robHouse(houseIndex){
    if( bestMoneySoFar[houseIndex] !== undefined ) return bestMoneySoFar[houseIndex]; 
    else{
      bestMoneySoFar[houseIndex] = Math.max( 
          robHouse(houseIndex - 1),
          robHouse(houseIndex - 2) + houses[houseIndex],
          robHouse(houseIndex - 3) + houses[houseIndex] )
        return bestMoneySoFar[houseIndex];
    }
  }

  var length = houses.length;
  var result = Math.max( bestMoneySoFar[length-1], bestMoneySoFar[length-2], bestMoneySoFar[length-3]);

  return result;

};

console.log(houseRobbers(testCase) === 12888);
console.log(houseRobbers(simpleTestCase) === 4);
