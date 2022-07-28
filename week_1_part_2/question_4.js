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