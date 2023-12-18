import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DialogDetail from '../FormDetail/DialogDetail'

function DataGridTable ({ URL, columns, labels, name }) {
  const [rows, setRows] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [selectedRow, setSelectedRow] = React.useState(null)
  const [noData, setNoData] = React.useState(false)

  React.useLayoutEffect (() => {
    fetch(URL)
      .then((res) => res.json())
      .then((rows) => {
        setRows(rows)
        setLoading(false)
        setNoData(rows.length === 0)
      })
      .catch((error) => {
        throw new Error('Error fetching data:', error),
        setLoading(false)
      })
    return () => {

    }
  }, [URL] )
  const handleRowClick = (params) => {
    const maChungTu = params.id.replace(/\//g, '-')
    let URLGetOne = ''
    name==='Danh mục tài khoản' || name=== 'Danh mục tài khoản công nợ khách hàng'? URLGetOne =URL+'/bytaikhoan/'+maChungTu :
      (name==='Danh mục hàng hoá'? URLGetOne=URL+'/bymahang/'+maChungTu :
        URLGetOne =URL+'/bymachungtu/'+maChungTu)
    setSelectedRow({
      URL: URLGetOne,
      openClick: true
    })
  }
  return (
    <Box style={{ height: 500, width: '100%' }}>
      {noData ? (
        <Typography variant="h5" gutterBottom>
          Không có dữ liệu
        </Typography>
      ) : loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 25 }
              }
            }}
            checkboxSelection
            onRowClick={handleRowClick}
            pageSizeOptions={[25, 50, 100]}
            getRowId={(row) => row.cMaChungTu || (row.cTaiKhoan ? row.cTaiKhoan : row.cMaKhachHang) || row.cMaHang}
          />
          {selectedRow && (
            <DialogDetail
              URL={selectedRow.URL}
              openClick={true}
              labels={labels}
              name={name}
            />
          )
          }
        </>
      )}
    </Box>
  )
}
export default React.memo(DataGridTable)