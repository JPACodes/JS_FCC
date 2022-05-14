// Help from https://dev.to/stewyearth how to make counter blog.
// Select DOM elements and store them into variables
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');


//setup a count variable to track count
let count = 0;

updateDisplay();
//Add event listeners. This dicates what happens after we click our +/- buttons
counterPlusElem.addEventListener("click",()=>{
    //functionality is added in here
    count++;
    //updating display method#1 but it's better to use a function
    //counterDisplayElem.innerHTML = count;
    updateDisplay();
});
counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
}

