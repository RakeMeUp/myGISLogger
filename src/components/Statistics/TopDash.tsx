import { useState } from "react"
import { useDataContext } from "../../contexts/dataContext"
import { useVarContext } from "../../contexts/varContext"
import {calculateDebt, getAmountOfDay, getAverageTreePerDay, getDay, getDaysWorked, getNeededTreesToday, getPay, getPayByHour, getSumOfMinutes, getTreesOfWeek} from "../../utils/dataAlgos"

function TopDash() {

    const {entries} = useDataContext()
    const {getSchedule, vars} = useVarContext()
    const [date, setDate] = useState(new Date().getUTCDate())

    return (
        <div>
            {entries ? (
            <div>
                <div>sumofmin: {getSumOfMinutes(entries)}</div>
                <div>all trees: {entries.length}</div>
                <div>day 1: {getDay(entries[0])}</div>
                <div>amount at day 28: {getAmountOfDay(entries, 28)}</div>
                <div>days worked: {getDaysWorked(entries)}</div>
                <div>avg: {getAverageTreePerDay(entries)}</div>
                <div>tree per week: {getTreesOfWeek(entries, 0)}</div>
                <div>needed today: {getNeededTreesToday(entries, date, getSchedule())}</div>
                <div>pay: {getPay(entries.length, vars.pay, vars.goal_tree_per_hour)}</div>
                <div>debt: {calculateDebt(entries.length, getSchedule(), date)}</div>
                <div>pay by hour: {getPayByHour(vars.pay, getSumOfMinutes(entries))}</div>
            </div>
            ) : "Wait"}
        </div>
    )
}
export default TopDash