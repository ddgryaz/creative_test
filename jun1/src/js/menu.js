let size_control;

window.addEventListener('resize', function () {
    size_control = document.documentElement.clientWidth

    if (size_control < 1200) {
        document.getElementById("menu").style.width = "0vw";
        document.getElementById('menu__elements').style.display = 'none'
    } else {
        document.getElementById("menu").style.width = "30vw";
        document.getElementById('menu__elements').style.display = 'block'
    }
});

function menuSlide() {
    let x = document.getElementById('menu__elements');
    if (document.getElementById("menu").style.width == "30vw") {
        document.getElementById("menu").style.width = "0vw";
        document.getElementById('menu__elements').style.display = 'none'
    } else {
        document.getElementById("menu").style.width = "30vw";
        document.getElementById('menu__elements').style.display = 'block'
    }
}
