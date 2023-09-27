function calculator(num1, num2, op) {
  let res;
  switch (op) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      res = num1 / num2;
      break;
    default:
      res = 'Syntax Error';
  }
  console.log(res);
  return res;
}

calculator(12, 9, 'pogi');
