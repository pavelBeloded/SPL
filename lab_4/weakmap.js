let wm = new WeakMap();

let key1 = {name: "calculation1"}

function calculate(a, b, key) {
    if (wn.has(key)) {
        return wn.get(key);
    } 

    let result = a + b;
    wn.set(key, result)
    return result;

}