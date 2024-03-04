let tablinks = document.getElementsByClassName("tab-links");
let tabcontains = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontain of tabcontains) {
        tabcontain.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// sidemenu 

let side = document.getElementById("sidemenu");

function openmenu(){
    side.style.right = "0";
}

function closemenu(){
    side.style.right = "-200px";
}