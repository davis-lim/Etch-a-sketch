let color ="black"
//use DOMContentLoaded to run Js after html and css has loaded to not crash the site!
document.addEventListener('DOMContentLoaded', function(){
    createContainer(16);
    let btnSelector = document.querySelector("#popup");
    btnSelector.addEventListener("click", function(){
        let size = getSize();
        createContainer(size);
    });
})

//create CSSgrid
function createContainer(size){
    let container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //CSS grid template
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
     
    let numDivs = size * size;
    for(i = 0; i<numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", colorDiv)// why does using colordiv() generate error??
        container.appendChild(div)
    }
}

function getSize(){
    let input = window.prompt("Enter your preferred size!")
    let message = document.querySelector("#message");
    if(input == "" || input == null){
        message.innerHTML = "Please provide a number"
    } else if(input<0 || input>100){
        message.innerHTML = "Please input between 0 and 100"
    } else{
    message.innerHTML = "Now you play!";
    return input;
    }
}

function colorDiv(){
    if (color == "random" ){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetContainer(){
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white')
}