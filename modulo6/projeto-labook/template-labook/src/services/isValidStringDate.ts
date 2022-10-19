export function isValidStringDate(dateInput: string ):boolean{
    const timestamp = Date.parse(dateInput)

    return !isNaN(timestamp)
}