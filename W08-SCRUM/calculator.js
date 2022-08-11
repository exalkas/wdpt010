/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

 const calculatorScreen = document.querySelector("#calculator .screen");
 const equals = document.querySelector("#calculator .eval");
 
 /**
  * This function below write the value of the pressed key on the screen
  * The += is the equivalent of:
  * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
  *
  **/
 function print(val) {
   calculatorScreen.innerHTML += val;
 }
 
 //this code listen to every key on the calculator and add the value on the screen
 document.querySelectorAll("#calculator span").forEach((key) => {
   if (key.innerText !== "=") {
     key.addEventListener("click", (e) => print(e.target.innerText));
   }
 });
 
 document
    .querySelector("#calculator .clear")
    .addEventListener("click", () => {
     calculatorScreen.innerHTML = ""
     calc.clear()
   });
 
 
 class Calculator {
 
   constructor() {
     this.history = []
   }
 
   handleClick() {
 
     let text = calculatorScreen.innerHTML;
 
     text = text.replace('x', '*')
 
     const result = eval(text);
 
     this.addToHistory(result);
 
     // const self = this
 
     // self.addToHistory(result);
 
     calculatorScreen.innerHTML = result
 
     console.log('result is', result)
   }
 
   addToHistory(result) {
     this.history.push(result)
     console.log('history is', this.history)
   }
 
   clear() {
     this.history = []
     console.log('history is', this.history)
   }
 
   printThis() {
     console.log(this)
   }
 }
 
 const calc = new Calculator()
 
 calc.addToHistory(1) 
 calc.printThis()
 
 
 
 // Implement here the event when the = key is pressed
 equals.addEventListener('click', function () {calc.handleClick()})