import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDataContext } from '../../contexts/dataContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



function TableComp() {

  const {entries, removeData} = useDataContext()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Managed Area</TableCell>
            <TableCell>LAS name</TableCell>
            <TableCell>Operator</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>End</TableCell>
            <TableCell>Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row['Project name']}
              </TableCell>
              <TableCell align="right">{row['Managed Area']}</TableCell>
              <TableCell align="right">{row['LAS name']}</TableCell>
              <TableCell align="right">{row.Operator}</TableCell>
              <TableCell align="right">{row.Date.toLocaleDateString()}</TableCell>
              <TableCell align="right">{row.Start}</TableCell>
              <TableCell align="right">{row.End}</TableCell>
              <TableCell align="right">{row.Duration}</TableCell>
              <TableCell align="right"><button onClick={()=>{removeData(row)}}><DeleteForeverIcon/></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComp