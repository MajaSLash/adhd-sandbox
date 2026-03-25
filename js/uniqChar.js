/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charList = new Map();

  for (let i = 0; i < s.length; i++) {
    if (charList.has(s[i])) {
      charList.set(s[i], charList.get(s[i]) + 1);
    } else {
      charList.set(s[i], 1);
    }
    console.log(charList);
  }

  let unique = -1;

  for (let i = 0; i < s.length; i++) {
    console.log("i=" + i);
    console.log("s[i]=" + s[i]);
    if (charList.has(s[i]) && charList.get(s[i]) === 1) {
      unique = s[i];
      return unique;
    }
  }
  return unique;
};

console.log(firstUniqChar("lookl"));
