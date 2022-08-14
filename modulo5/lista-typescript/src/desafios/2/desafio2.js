var month = ["Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"];
function howManyYears(day, month, year) {
    var d = new Date(), actualYear = d.getFullYear(), actualMonth = d.getMonth() + 1, today = d.getDate();
    var years = actualYear - year;
    if (actualMonth < month || actualMonth === month && today < day) {
        years--;
    }
    return years < 0 ? 0 : years;
}
function shouldRenew(birthdate, IdCreateDate) {
    // const today = Date.now()
    var _a = birthdate.split('/'), birthDay = _a[0], birthMonth = _a[1], birthYear = _a[2];
    var _b = IdCreateDate.split('/'), IdCreateDay = _b[0], IdCreateMonth = _b[1], IdCreateYear = _b[2];
    var renewTime = 0;
    var age = howManyYears(Number(birthDay), Number(birthMonth), Number(birthYear));
    var IdYears = howManyYears(Number(IdCreateDay), Number(IdCreateMonth), Number(IdCreateYear));
    if (age <= 20)
        renewTime = 5;
    else if (20 < age && age <= 50)
        renewTime = 10;
    else
        renewTime = 15;
    console.log(renewTime);
    return IdYears < renewTime ? false : true;
}
shouldRenew("23/12/2003", "23/12/2016");
module.exports = shouldRenew;
