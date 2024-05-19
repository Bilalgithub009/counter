var display = document.getElementById("sp0");
var para = document.getElementById("para");

function plus() {
 display.innerHTML++;
 if(display.innerHTML % 2 === 0){
    para.innerHTML = 'the number is even'
 }   
if(display.innerHTML % 2 !== 0){
    para.innerHTML = 'the number is odd'
}

}


function minus(){

    if (display.innerHTML == 0) display.innerHTML = 0;
    else{
        display.innerHTML--;
    }
    if(display.innerHTML % 2 === 0){
        para.innerHTML = "the number is even"
    } 
    if(display.innerHTML % 2 !== 0){
        para.innerHTML = "the number is odd"
    } 
    
    
    }

function reset () {
    display.innerHTML = 0;
    para.innerHTML = "";
}