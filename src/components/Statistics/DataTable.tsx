import { useDataContext } from "../../contexts/dataContext"
import { timeToDecimal } from "../../utils/timeToDecimal"

function DataTable() {

  const {entries, removeData} = useDataContext()

  return (
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Managed Area</th>
          <th>LAS name</th>
          <th>Operator</th>
          <th>Date</th>
          <th>Start</th>
          <th>End</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((row, index)=>{
          return (
            <tr key={index}>
                <td>{row['Managed Area']}</td>
                <td>{row['LAS name']}</td>
                <td>{row.Operator}</td>
                <td>{row.Date.toLocaleDateString()}</td>
                <td>{row.Start}</td>
                <td>{row.End}</td>
                <td>{row.Duration}</td>
                <td><button onClick={()=>{removeData(row)}}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DataTable