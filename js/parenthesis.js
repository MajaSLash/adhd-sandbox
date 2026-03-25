function isValid(s) {
  let parStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      parStack.push(s[i]);
    }
    if (s[i] === ")") {
      if (parStack.length == 0) {
        return false;
      }
      parStack.pop();
    }
  }
  if (parStack == 0) {
    return true;
  }
  return false;
}

console.log(isValid("hello( wor)()ld!"));
