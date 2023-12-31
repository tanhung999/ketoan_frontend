import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function TableDetail ({ labelsDetail, data }) {
  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: 10 }}>
        {
          labelsDetail &&
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {labelsDetail.fieldsTable.map((label, index) => (
              <TableCell
                key={index}
                sx={{ fontSize: 20 }}
              >{label.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {labelsDetail.fieldsTable.map((label, labelIndex) => (
                <TableCell key={labelIndex} align='left'>{item[label.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
        }
      </TableContainer>
    </>
  )
}
export default TableDetail