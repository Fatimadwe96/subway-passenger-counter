let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("previous-ent");


function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  saveEl.innerText += " " + count + "-";
  setZero();
}
function setZero() {

  count = 0;
  countEl.innerText = 0;


};