selectorToggle = false;
function Select(){
    if(selectorToggle == false){
            document.querySelector(".menu").style.borderBottom = "2px solid white";
            selectorToggle =true; 
    } else if( selectorToggle == true){
        document.querySelector(".menu").style.borderBottom = "none";
    }

}