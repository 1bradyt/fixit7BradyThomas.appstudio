function Calculate(num1, num2) {
  return num1 + num2;
}
  
let p1 = prompt("What do you want your first number to be?")
let p2 = prompt("What do you want your second number to be?")

let summedNumbers = Calculate(Number(p1), Number(p2))
console.log(summedNumbers)