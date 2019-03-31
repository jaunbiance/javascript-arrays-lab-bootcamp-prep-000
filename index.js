var kittens = []; //define your array here
kittens.push('Milo', 'Otis', 'Garfield');

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.unshift();
  return kittens;
}