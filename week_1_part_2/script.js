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

//Question 2//

function calculate({ n1, n2, op }) {
  if (op == "+") {
    return n1 + n2;
  } else if (op == "-") {
    return n1 - n2;
  } else {
    return "Not supported";
  }
}

console.log(calculate({ n1: 2, n2: 3, op: "+" }));
console.log(calculate({ n1: 5, n2: 2, op: "-" }));
console.log(calculate({ n1: 1, n2: 6, op: "x" }));

// Question 3//

function cal(discounted) {
  let total = 0;
  for (let i = 0; i < discounted.products.length; i++) {
    total += discounted.products[i].price;
  }
  return total * discounted.discount;
}

const discountedPrice = cal({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

console.log(discountedPrice);

//Question 4//

function twoSum(nums, target) {
  var val = [];

  for (var i = 0; i < nums.length; i++) {
    for (var x = 0; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        val.push(nums.indexOf(nums[i]));
        val.push(nums.indexOf(nums[x]));
      }
    }
  }

  return val.splice(0, 2);
}

twoSum([2, 7, 11, 15], 9);

//Question 5

function delayedResult(n1, n2, delayTime, callback) {
  window.setTimeout(() => {
    callback(n1 + n2);
  }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});

delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
});
