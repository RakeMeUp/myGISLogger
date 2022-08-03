import { Schedule } from "../contexts/varContext"
import { excelObject } from "../interfaces/excelObj"
import { currencyFormatter } from "./currencyFormatter"

export function getSumOfMinutes(arr: excelObject[]): number{
    return arr.reduce((acc, curr)=> { return acc + curr.Duration}, 0)
}

export function getDay(obj: excelObject): number{
    // +1 cuz starts at 0
    // ? to not throw error when entries not set yet
    return obj?.Date.getUTCDate() + 1
}

export function getAmountOfDay(array: excelObject[], day: number): number{
    const filtered = array.filter(e=> getDay(e) === day)
    return filtered.length
}

export function getEntryObjectsOfDay(array:excelObject[], day: number): excelObject[]{
    return array.filter(e=> getDay(e) === day)
}

export function getDaysWorked(array:excelObject[]): number{
    // makes a disctinct array
    const days = [...new Set(array.map(e => getDay(e)))]
    return days.length
}

export function getAverageTreePerDay(array:excelObject[]): string{
    return (array.length / getDaysWorked(array)).toFixed(2)
}

export function getNeededTreesToday(array:excelObject[], day: number, sched: Schedule): number{
    const neededOfDay = Object.values(sched)[getDateFromDay(array, day)?.getUTCDay()|| 0]
    const result = (neededOfDay - getAmountOfDay(array, day) )
    return result < 0 ? 0 : result;
}

export function getTreesOfWeek(array:excelObject[], week: number): number{
    const startOfWeek = (week * 7) + 1;     // 0: [1-7], 1: [8-14],
    const endOfWeek = (week * 7) + 7;       // 2: [15-21], 3: [22-28]

    const trees = array.filter(e=> {
        return getDay(e) >= startOfWeek && getDay(e) <= endOfWeek 
    })
    return trees.length
}

export function getDateFromDay(array:excelObject[], day:number){
    return array.find(e=> getDay(e) === day)?.Date
}

export function getPay(currentTrees: number, pay: number, goalAvg: number): string{
    const result =  currentTrees * (pay / goalAvg)
    return currencyFormatter(result)
}

export function calculateDebt(done: number, sched: Schedule, day: number){
    const arr = [...Object.values(sched)];
    let schedSum = 0;
    for(let i = 0; i < day; i++){
        schedSum += +arr[i%7];
    }
    return schedSum - done
}

export function getPayByHour(pay:number, mins: number){
    return currencyFormatter(+(mins/60 * pay).toFixed(0))
}