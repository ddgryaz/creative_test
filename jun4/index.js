// TODO: Реализовать отображение/скрытие элементов при переключении чек-боксов
// TODO: Условие: На странице есть группа чек-боксов. Которые привязаны к элементам на странице (произвольные). 
// TODO: Реализовать отображение/скрытие элементов при переключении чек-боксов.
// TODO: К списку чекбоксов добавить чек-бокс вкл/откл всех элементов, при этом в списке чек-боксы должны менять свое состояние
const red = document.querySelector('.items__red');
const blue = document.querySelector('.items__blue');
const yellow = document.querySelector('.items__yellow');

let chRed = document.querySelector('.check[value="red"]');
let chBlue = document.querySelector('.check[value="blue"]');
let chYellow = document.querySelector('.check[value="yellow"]');
let chAll = document.querySelector('.check[value="all"]');

const arrColors = [red, blue, yellow];
const arrCh = [chRed, chBlue, chYellow];


function checkedFun(color, check) {
    if (check.checked) {
        color.classList.add('invisible');
    } else {
        color.classList.remove('invisible');
    }
}


function checkedAll(arrColors, arrCh, check) {
    if (check.checked) {
        arrCh.forEach((element) => {
            element.checked = true;
        })
        arrColors.forEach((element) => {
            element.classList.add('invisible');
        })
    } else {
        arrCh.forEach((element) => {
            element.checked = false;
        })
        arrColors.forEach((element) => {
            element.classList.remove('invisible');
        })
    }
}


function checkCheckColors() {
    switch (this.value) {
        case 'red': {
            checkedFun(red, chRed);
            break;
        }
        case "blue": {
            checkedFun(blue, chBlue);
            break;
        }
        case "yellow": {
            checkedFun(yellow, chYellow);
            break;
        }
        case "all": {
            checkedAll(arrColors, arrCh, chAll);
            break;
        }
    }
}


document.querySelectorAll(".check").forEach((element) => {
    element.onclick = checkCheckColors
})
