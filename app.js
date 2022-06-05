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
    console.log({d: d, arr: arr, rslt: result, opr: operator});
  })
})

oprs.forEach(function(opr) {
  opr.addEventListener('click', function(e) {
    operator = e.currentTarget.innerText;
    if(d) {
      arr.push(parseInt(d, 10));
    }
    if(arr.length >= 3) {
      evaluate(arr)
      arr = [];
      arr.push(result);
    }
    arr[1] = operator;
    d = '';
    display.textContent = operator;
    console.log({d: d, arr: arr, rslt: result, opr: operator});
  })
})

end.addEventListener('click', function() {
  arr.push(parseInt(d, 10));
  evaluate(arr)
  arr = [];
  d = '';
  if(Number.isInteger(result)) {
    display.textContent = result;
  } else {
    display.textContent = result.toFixed(2);
  }
  console.log({d: d, arr: arr, rslt: result, opr: operator});
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