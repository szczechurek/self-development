/**
 * TODO:
 * 1. Refactor old functions to ES6 ones (function as variable)
 * 2. Fix the bug with multiple math sign's by setting up a sign variable and allowing it to be one sign top's
 */

function display(val) {
  document.getElementById("result").value += val;

  return val;
}

function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);

  document.getElementById("result").value = y;

  return y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}
