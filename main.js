let color ="black";
let click = false;
//use DOMContentLoaded to run Js after html and css has loaded to not crash the site!
document.addEventListener('DOMContentLoaded', function(){
    createContainer(16);
    document.querySelector("body").addEventListener('click', function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
        }
        let drawMessage = document.querySelector("#drawMessage");
        if(click){
            drawMessage.innerHTML = "You can now draw!"
        }else{
            drawMessage.innerHTML = "Click to draw!"
        }
    })
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

//get the size of the container
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

//Choose the color
function colorDiv(){
    if(click){
        if (color == "random" ){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = "black";
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

//reset the container
function resetContainer(){
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white')
}