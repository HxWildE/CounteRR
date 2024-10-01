
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText





// let j = prompt('Tera naam ky h be?','Maachod denge naam bta apna')

// let WelcomeEl = document.getElementById(`Welcome-el`)
// let name =j
// let greeting = " Aoo bosdk  "
// WelcomeEl.innerText = greeting+ name
// console.log(WelcomeEl)

let countEl = document.getElementById("count-el") // pass in arguments
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let j= " " + count + "- " 
    saveEl.innerText += j
    count = 0       //set back to zero
    countEl.textContent = 0 //show zero on screen
    }


/*  STRING KA  USE 
let name = "Per Harald Borgen"
 let greeting = "Hi, my name is "
  let myGreeting = greeting + name
  console.log(myGreeting)*/
