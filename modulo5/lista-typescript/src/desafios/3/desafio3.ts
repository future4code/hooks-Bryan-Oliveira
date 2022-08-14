function hasDuplicatedLetter(array: string[]) {
    const duplicatedLetter = array.filter((item, index) => array.indexOf(item) !== index)  
    return duplicatedLetter.length ? true : false
}

function factorialize(num: number): number {
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

function anagrans (string: string): string | number {
    const arrString: string[] = string.split('')
    if(hasDuplicatedLetter(arrString)) return "passe uma palavra sem letras repetidas"
    return factorialize(arrString.length)
}

module.exports = anagrans