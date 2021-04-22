let array = [1, 2, 3, 4, 5];
let step = 3;


function slideArray(array, step) {
    let oldArray = array.join();
    for (let i = 0; i < step; i++) {
        array.unshift(array.pop());
    }
    console.log(`Входные данные - ${oldArray}, шаг - ${step}. На выходе - ${array}`);
}


slideArray(array, step);
 
