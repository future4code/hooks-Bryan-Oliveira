function hasDuplicatedLetter(array) {
    var duplicatedLetter = array.filter(function (item, index) { return array.indexOf(item) !== index; });
    return duplicatedLetter.length ? true : false;
}
function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
function anagrans(string) {
    var arrString = string.split('');
    if (hasDuplicatedLetter(arrString))
        return "passe uma palavra sem letras repetidas";
    return factorialize(arrString.length);
}
module.exports = anagrans;
