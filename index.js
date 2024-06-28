// Code your solutions in this file
// function writeCards(names,event){
function writeCards(names, eventNam) {
  const Arr = [];
  for (let i = 0; i < names.length; i++) {
    Arr.push(`Thank you, ${names[i]}, for the wonderful ${eventNam} gift!`);
  }
  return Arr;
}

function countDown(number) {
  if (number < 1) {
    console.log("Please provide a positive integer.");
    return;
  }

  while (number >= 0) {
    console.log(number);
    number--;
  }
}
