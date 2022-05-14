let counterDogyrElem = document.querySelector('.dogyr-count');
let counterHumanyrElem = document.querySelector('.humanyr-count');
//count variable for human years input
let hcount = 0;

updateDDisplay()
updateHDisplay()

//Even listeners for button
counterPlusElem.addEventListener("click",()=>{
    hcount ++;
    updateDDisplay()
    updateHDisplay()
});
counterMinusElem.addEventListener("click",()=>{
    hcount --;
    updateDDisplay()
    updateHDisplay()
});

function updateDDisplay(){
    counterDogyrElem.innerHTML = hcount * 7;
};

function updateHDisplay(){
    counterHumanyrElem.innerHTML = hcount;
}