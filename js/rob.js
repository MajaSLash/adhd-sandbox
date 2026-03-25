/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //must not be adjacent nodes
  //max to min values
  //track nodes not selected that are not adjacent -> they can still be picked
  //end when no nodes are left that follow rule

  let houses = new Map();
  let allowed = Math.ceil(nums.length / 2);
  let total = 0;

  for (let i = 0; houses.size < allowed; i++) {
    console.log("i=" + i);
    let target = Math.max(...nums);
    console.log("target=" + target);
    if (target == -1) {
      break;
    }
    let address = nums.indexOf(target);
    console.log("address=" + address);
    if (
      !houses.has(address) &&
      !houses.has(address - 1) &&
      !houses.has(address + 1)
    ) {
      houses.set(address, target);
      nums[address] = -1;
      console.log("set new!");
    }
    nums[address] = -1;
  }

  for (const i of houses.values()) {
    total += i;
    console.log("total updated to =" + total);
  }

  return total;
};

console.log(rob([2, 3, 2]));
