// var i = 2;
// setInterval(function() {
//     document.getElementById(`s${i}`).checked = true;

//     if (i == 7) {
//         i = 1;
//     } else {
//         i++;
//     }
// }, 4000);

// Our themes

var s = 1;
document.getElementById(`s${s}`).checked = true;

function nextTheme() {
    s++;
    if (s > 14) {
        s = 1;
    }
    document.getElementById(`s${s}`).checked = true;
}

function prevTheme() {
    s--;
    if (s == 0) {
        s = 14;
    }
    document.getElementById(`s${s}`).checked = true;
}

// Our clients
var c = 1;
document.getElementById(`c${c}`).checked = true;

function nextClient() {
    c++;
    if (c > 5) {
        c = 1;
    }
    document.getElementById(`c${c}`).checked = true;
}

function prevClient() {
    c--;
    if (c == 0) {
        c = 5;
    }
    document.getElementById(`c${c}`).checked = true;
}


// toggle nav
function toggleNav() {
    console.log("DKDK")
    document.querySelector('.header__menu').classList.toggle('open-nav');

    document.querySelector('.sidebar').classList.toggle('open-sidebar');


    // hide scroll if mobile menu is opened
    if (document.querySelector('.sidebar').classList.contains('open-sidebar')) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
}

document.getElementsByClassName('header__menu')[0].addEventListener('click', toggleNav)

//on desktop hide mobile menu when resize
const resize = () => {
    if (innerWidth >= 900) {
        document.querySelector('.sidebar').classList.remove('open-sidebar');

        document.querySelector('.header__menu').classList.remove('open-nav');
        document.body.style.overflow = 'auto';
    }
};
addEventListener('DOMContentLoaded', resize);
addEventListener('resize', resize);







function gotoBottom(id) {
    var scrollDiv = document.getElementById(id).offsetTop;
    console.log(scrollDiv);
    window.scrollTo({ top: scrollDiv });

}