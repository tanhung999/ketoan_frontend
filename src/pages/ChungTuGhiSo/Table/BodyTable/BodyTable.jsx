import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import stableSort from '~/utils/Sort/SortTable'
import getComparator from '~/utils/Comparator/Comparator'
import EnhancedTableHead from '../HeaderTable/EnhancedTableHead'
import EnhancedTableToolbar from '../HeaderTable/EnhancedTableToolbar'
const rows = []
export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/chungtughiso')
        if (response.ok) {
          const result = await response.json()
          setData(result)
        } else {
          throw new Error('Failed to fetch data')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = [...rows.map((n) => n.id)]
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = [...selected, id]
    } else if (selectedIndex === 0) {
      newSelected = [...selected.slice(1)]
    } else if (selectedIndex === selected.length - 1) {
      newSelected = [...selected.slice(0, -1)]
    } else if (selectedIndex > 0) {
      newSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1)
      ]
    }
    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  const isSelected = (id) => selected.indexOf(id) !== -1
  const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0

  const visibleRows = React.useMemo(
    () =>
      stableSort(data, getComparator.getComparator(order, orderBy))?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, data]
  )

  return (
    <Box sx={{ width: '100%' }} px={2}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 10 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data?.length}
            />
            <TableBody>
              {visibleRows?.map((row, index) => {
                const isItemSelected = isSelected(row.id)
                const labelId = `enhanced-table-checkbox-${index}`
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.cMaChungTu}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.cMaChungTu}
                    </TableCell>
                    <TableCell align="right">{row.cLoaiChungTu}</TableCell>
                    <TableCell align="right">{row.cSoChungTu}</TableCell>
                    <TableCell align="right">{row.dNgayChungTu}</TableCell>
                    <TableCell align="right">{row.cHoTen}</TableCell>
                    <TableCell align="right">{row.cMaKhachHangNo}</TableCell>
                    <TableCell align="right">{row.cTenKhachHangNo}</TableCell>
                    <TableCell align="right">{row.cMaSoThueNo}</TableCell>
                    <TableCell align="right">{row.cMaKhachHangCo}</TableCell>
                    <TableCell align="right">{row.cTenKhachHangCo}</TableCell>
                    <TableCell align="right">{row.cMaSoThueCo}</TableCell>
                    <TableCell align="right">{row.cDienGiai}</TableCell>
                    <TableCell align="right">{row.cBieuThue}</TableCell>
                    <TableCell align="right">{row.cSoSeRi}</TableCell>
                    <TableCell align="right">{row.cSoHoaDon}</TableCell>
                    <TableCell align="right">{row.dNgayHoaDon}</TableCell>
                    <TableCell align="right">{row.nThueSuat}</TableCell>
                    <TableCell align="right">{row.nThueGTGT}</TableCell>
                    <TableCell align="right">{row.cMatHang}</TableCell>
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 300) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data?data.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  )
}