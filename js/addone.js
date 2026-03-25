/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carryOver = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (i == digits.length - 1 && digits[i] == 9) {
      carryOver = true;
      digits[i] = 0;
      if (i == 0) {
        digits.unshift(1);
        break;
      }
      continue;
    }
    if (digits[i] == 9 && carryOver == true) {
      digits[i] = 0;
      if (i == 0) {
        digits.unshift(1);
        break;
      }
      continue;
    }
    if (carryOver == true) {
      digits[i]++;
      break;
    } else {
      digits[i]++;
      break;
    }
  }
  return digits;
};

console.log(plusOne([9, 9]));
