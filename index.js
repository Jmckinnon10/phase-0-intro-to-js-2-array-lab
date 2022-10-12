// // Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){ 
  return cats.push('Ralph')
}

function destructivelyPrependCat(name) {
  return cats.unshift('Bob')
}

function destructivelyRemoveLastCat(name) {
  return cats.pop()
}

function destructivelyRemoveFirstCat(name) {
  return cats.shift()
}

function appendCat(name) {
   const copyOfCats = [...cats]
   copyOfCats.push('Broom')
   return copyOfCats
}

function prependCat(name) {
  const copyOfCats = [...cats]
  copyOfCats.unshift('Arnold')
  return copyOfCats
}

function removeLastCat(name) {
  const copyOfCats = [...cats]
  copyOfCats.pop()
  return copyOfCats
}

function removeFirstCat(name) {
  const copyOfCats = [...cats]
  copyOfCats.shift()
  return copyOfCats
}






// const cats = ["Milo",  "Otis", "Garfield"]

// function destructivelyAppendCat(name){
//   return cats.push("Ralph");
// }

// function destructivelyPrependCat(name){
//   return cats.unshift("Bob");
// }

// function destructivelyRemoveLastCat(name){
//   return cats.pop();
// }

// function destructivelyRemoveFirstCat(name){
//   return cats.shift();
// }

// function appendCat(name){
//   const copyOfCats = cats.slice()
//   copyOfCats.push("Broom")
//   return copyOfCats;
// }

// function prependCat(name){
//   const copyOfCats = cats.slice()
//   copyOfCats.unshift("Arnold")
//   return copyOfCats;
// }

// function removeLastCat(name){
//   const copyOfCats = cats.slice()
//   copyOfCats.pop()
//   return copyOfCats;
// }

// function removeFirstCat(name){
//   const copyOfCats = cats.slice()
//   copyOfCats.shift()
//   return copyOfCats;
// }
