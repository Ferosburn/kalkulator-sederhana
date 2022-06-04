const btns = document.querySelectorAll('.btn');
const oprs = document.querySelectorAll('.opr');
const end = document.querySelector('.rslt');
const display = document.getElementById('display');
const test = document.getElementById('test');

let operator = '';
let d = '';
let result = 0;
let arr = [];

btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    if(result) {
      result = 0;
    }
    d += e.currentTarget.innerText;
    display.textContent = d;
    console.log(d, arr, result);
  })
})

oprs.forEach(function(opr) {
  opr.addEventListener('click', function(e) {
    operator = e.currentTarget.innerText;
    arr.push(parseInt(d, 10));
    if(arr.length >= 3) {
      evaluate(arr)
      arr = [];
      arr.push(result);
    }
    arr[1] = operator;
    d = '';
    display.textContent = operator;
    console.log(d, arr, result);
  })
})

end.addEventListener('click', function() {
  arr.push(parseInt(d, 10));
  evaluate(arr)
  arr = [];
  d = '';
  display.textContent = result;
  console.log(d, arr, result);
})

function evaluate(arr) {
  const num1 = arr[0];
  const num2 = arr[2];
  switch(arr[1]) {
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      console.log('masukkan operator')
      break;
  }
}