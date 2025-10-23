const menu = window.document.getElementById("menu");

const nav = window.document.getElementsByTagName("nav")[0];

menu.addEventListener("click", showmenu);

function showmenu(){
    if (nav.style.left == "-250px"){
        nav.style.left = "0";
    } else {
        nav.style.left = "-250px";
    }
}