import { useDataContext } from "../../contexts/dataContext"
import { useVarContext } from "../../contexts/varContext"
import {getAmountOfDay, getAverageTreePerDay, getDay, getDaysWorked, getNeededTreesToday, getPay, getSumOfMinutes, getTreesOfWeek} from "../../utils/dataAlgos"

function TopDash() {

    const {entries} = useDataContext()
    const {getSchedule, getDebt, vars} = useVarContext()

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
                <div>tree per week: {getTreesOfWeek(entries, 3)}</div>
                <div>needed today: {getNeededTreesToday(entries, 28, getSchedule(), getDebt())}</div>
                <div>pay: {getPay(entries.length, vars.pay, 5)}</div>
            </div>
            ) : "Wait"}
        </div>
    )
}
export default TopDash