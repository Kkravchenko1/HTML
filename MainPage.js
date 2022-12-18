document.getElementById("button").addEventListener("click", newPicture);


 // const img = document.querySelector('img');

function fizzBuzz(){
for(var x = 1; x <= 15; x++){
    if(x % 3 === 0){
    console.log('Fizz')}
    else{
        console.log(x)
    }
}}


async function newPicture(){
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=2F06Ix6QSntmvESMW5NDT4NBVbjFIQQy&s=cats&s=cats', {mode: 'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }
  newPicture()


let array = [5, 7, 1, 15, 9, 2, 14, 8, 7, 3]

// Binary search 
let iterativeFunction = function (arr, x) {
  
    let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}
  
// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
  
if (iterativeFunction(arr, x, 0, arr.length-1))
    console.log("Element found!<br>");
else console.log("Element not found!<br>");
  
x = 6;
  
if (iterativeFunction(arr, x, 0, arr.length-1))
console.log("Element found!<br>");
else console.log("Element not found!<br>");




let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');




let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    if(count <= 10){
        count = 0;
        updateDisplay();
    } else {
    count++;
    updateDisplay();}
}) ;

counterMinusElem.addEventListener("click",()=>{
    if(count <= 0){
        count = 10
        updateDisplay();
    } else{
    count--;
    updateDisplay();}
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

let testerTest = document.getElementById('test')

testerTest.addEventListener('click',  () => {
    console.log("I was clicked")
})


let testTestTwo = document.getElementById('testTwo')

testTestTwo.addEventListener('mouseover',  () => {
    console.log("I was hovered over")
})

let clicker = document.getElementById('fname');
let buttonClicker = document.getElementById('formButton')
let fname = document.getElementById('fname')

let testText = document.querySelector('.testText')
let testValue = document

let clickerValue = document.getElementById('fname').value

console.log(clicker.value)

buttonClicker.addEventListener('click', () =>{

    console.log(clickerValue)
    console.log(clicker)
})

var game = 0

function gameWinner(){

    winnings = 25  * 10
    game = game + winnings
    console.log(game)
}

let clickerOne = document.getElementById("testGame")

clickerOne.addEventListener("click", gameWinner)


console.log(game)