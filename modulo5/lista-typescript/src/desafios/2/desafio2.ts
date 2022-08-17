const month: string[] = ["Jan" , "Feb" , "Mar" , 
"Apr" , "May" , "Jun" , 
"Jul" , "Aug" , "Sep" , 
"Oct" , "Nov" , "Dec"]

function howManyYears( day: number, month: number, year: number): number {
    const d = new Date(),
        actualYear = d.getFullYear(),
        actualMonth = d.getMonth() + 1,
        today = d.getDate()

    let years: number = actualYear - year;

    if (actualMonth < month || actualMonth === month && today < day) {
        years--;
    }

    return years < 0 ? 0 : years;
}

function shouldRenew(birthdate: string, IdCreateDate: string): boolean | string{
    // const today = Date.now()
    const [birthDay, birthMonth, birthYear] = birthdate.split('/')
    const [IdCreateDay, IdCreateMonth, IdCreateYear] = IdCreateDate.split('/')

    let renewTime: number = 0
    const age: number = howManyYears(Number(birthDay), Number(birthMonth), Number(birthYear))
    const IdYears: number = howManyYears(Number(IdCreateDay), Number(IdCreateMonth), Number(IdCreateYear))

    if(age<=20) renewTime = 5
    else if(20<age && age<=50) renewTime = 10
    else renewTime = 15
    return IdYears< renewTime? false : true 
}

module.exports = shouldRenew

