let size_control;
let menu = document.getElementById("menu").style;
let elements = document.getElementById('menu__elements').style;


window.addEventListener('resize', function () {
    size_control = document.documentElement.clientWidth;
    if (size_control < 1200) {
        menu.width = "0vw";
        elements.display = 'none';
    } else {
        menu.width = "30vw";
        // Визуально приятней - но бывает при ресайзинге ломается
        // setTimeout(() => {
        //     elements.display = 'block';
        // }, 200);
        elements.display = 'block';
    }
});


function menuSlide() {
    if (menu.width === "30vw") {
        menu.width = "0vw";
        elements.display = 'none';
    } else {
        menu.width = "30vw";
        // Визуально приятней - но бывает при ресайзинге ломается
        // setTimeout(() => {
        //     elements.display = 'block';
        // }, 200);
        elements.display = 'block';
    }
}
