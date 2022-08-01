import { useDataContext } from "../../contexts/dataContext"
import { useVarContext } from "../../contexts/varContext"
import {getAmountOfDay, getAverageTreePerDay, getDay, getDaysWorked, getNeededTreesToday, getSumOfMinutes, getTreesOfWeek} from "../../utils/dataAlgos"

function TopDash() {

    const {entries} = useDataContext()
    const {getSchedule, getDebt} = useVarContext()

    return (
        <div>
            {entries ? (
            <div>
                <div>sumofmin {getSumOfMinutes(entries)}</div>
                <div>all trees {entries.length}</div>
                <div>day 1 {getDay(entries[0])}</div>
                <div>amount at 28 {getAmountOfDay(entries, 28)}</div>
                <div>days worked {getDaysWorked(entries)}</div>
                <div>avg {getAverageTreePerDay(entries)}</div>
                <div>tpw {getTreesOfWeek(entries, 3)}</div>
                <div>needed today {getNeededTreesToday(entries, 28, getSchedule(), getDebt())}</div>
            </div>
            ) : "Wait"}
        </div>
    )
}
export default TopDash