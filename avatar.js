var menu_state = true

function pulloutmenu() {
    if (menu_state === true){
        document.querySelector("#avatarbox").style.left= "-250px"
        menu_state = false
    }
    else if (menu_state === false){
        document.querySelector("#avatarbox").style.left= "0px"
        menu_state = true
    }
}