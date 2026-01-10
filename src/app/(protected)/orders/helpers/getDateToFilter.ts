export function getDateToFilter(num: number): Date {
    const d = new Date()
    d.setDate(d.getDate() - num)
    d.setHours(0, 0, 0, 0) 
    return d
}