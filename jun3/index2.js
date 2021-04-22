let stringA = 'aababba';
let stringB = 'abbaabcd';


function substrings() {
    let small = arguments[0];
    const arr = [];
    for (let n = 1; n < arguments.length; n++) {
        if (small.length < arguments[n].length) {
            arr.push(arguments[n]);
            continue;
        }
        arr.push(small);
        small = arguments[n];
    }
    for (let l = small.length; l > 0; l--) {
        for (let p = 0; p <= small.length - l; p++) {
            const substr = small.slice(p, p + l);
            let isFound = true;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].indexOf(substr) >= 0)
                    continue;
                isFound = false;
                break;
            }
            if (isFound)
                return substr;
        }
    }
    return "";
}


const result = substrings(stringA, stringB);
console.log(`Входные данные - ${stringA}, ${stringB}. На выходе - ${result}`);