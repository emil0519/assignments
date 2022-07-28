//Question 1//

function max(array) {
  var val = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > val) {
      val = array[i];
    }
  }

  return val;
}

console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));