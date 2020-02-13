var menuStatus = false;
var settingsStatus = false;

function menuOpen(){
    if (menuStatus === false){
    document.querySelector("#settings").style.right = "0px";
    menuStatus = true;
} else {
    document.querySelector("#settings").style.right = "-150px";
    menuStatus = false;
}   
}