let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");
let resetCount = document.getElementById("save-btn");
let savedFromStorage = JSON.parse(localStorage.getItem('savedValues'));

let savedValuesArray = savedFromStorage ? savedFromStorage : ["Previous Entries were"];
saveEl.innerHTML = savedValuesArray.join("-");
function increment(){
  count++;
  countEl.innerText = count;
}


function decrement(){
  count--;
  if(count >= 0){
    countEl.innerText = count;
  } else{
    count = 0;
  }
 
}


function save(){
  const savedValue =countEl.innerText;
  savedValuesArray.push(savedValue);
  saveEl.innerHTML = savedValuesArray.join("-");
  countEl.innerHTML = 0;
  count = 0;
  localStorage.setItem('savedValues', JSON.stringify(savedValuesArray))
}

function reset(){
  localStorage.clear('savedValues');
  count = 0;
  savedValuesArray = ["Previous Entries were"];
  saveEl.innerHTML = 'No Previous Entries'
}

console.log(savedFromStorage);
