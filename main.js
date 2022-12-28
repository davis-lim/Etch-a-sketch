//use DOMContentLoaded to run Js after html and css has loaded to not crash the site!
document.addEventListener('DOMContentLoaded', function(){
    createContainer(16);
    console.log("hi")
})

//create CSSgrid
function createContainer(size){
    let container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //CSS grid template
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
     
    let numDivs = size * size;
    for(i = 0; i<numDivs; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'yellow'
        div.style.cssText = "border-color: black;"
        container.appendChild(div)

    }
}