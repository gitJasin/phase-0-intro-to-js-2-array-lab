const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => cats.push(name)

const destructivelyPrependCat = (name) => cats.unshift(name)

const destructivelyRemoveLastCat = () => cats.pop()

const destructivelyRemoveFirstCat = () => cats.shift()

const appendCat = (name) => {
    let newCats = []
    return newCats = [...cats, name];
}

const prependCat = (name) => {
    let newCats = []
    return newCats = [name, ...cats];
}

const removeLastCat = () => {
    let newCats = []
    return newCats = cats.slice(0, -1);
}

const removeFirstCat = () => {
    let newCats = []
    return newCats = cats.slice(1);
}
