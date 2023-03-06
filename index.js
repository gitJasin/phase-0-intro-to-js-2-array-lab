const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let newCats = []
    return newCats = [...cats, name];
}

function prependCat(name) {
    let newCats = []
    return newCats = [name, ...cats];
}

function removeLastCat() {
    let newCats = []
    return newCats = cats.slice(0, cats.length -1);
}

function removeFirstCat() {
    let newCats = []
    return newCats = cats.slice(1);
}
