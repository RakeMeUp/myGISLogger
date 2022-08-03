import { useDataContext } from "../../contexts/dataContext"
import { getAmountOfDay, getEntryObjectsOfDay, getSumOfMinutes } from "../../utils/dataAlgos"

function DaysTable() {

    const array = [...new Array(31)]
    const {entries} = useDataContext()

  return (
    <table>
        <thead>
            <tr>
                <th>day</th>
                <th>hrs</th>
                <th>count</th>
            </tr>
        </thead>
        <tbody>
            {array.map((_,i)=> {
            return (
            <tr key={i}>
                <td>{i+1}</td>
                <td>{(getSumOfMinutes(getEntryObjectsOfDay(entries, i+1))/60).toFixed(2)}</td>
                <td>{getAmountOfDay(entries, i+1)}</td>
            </tr>
            )})}
        </tbody>
    </table>
  )
}

export default DaysTable