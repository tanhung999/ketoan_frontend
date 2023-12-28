import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DialogDetail from '../FormDetail/DialogDetail'
import { formatDate } from '~/utils/FormatDate/FormatDate'

function DataGridTable ({ URL, columns, labels, name,tableName, labelsDetail }) {
  const [rows, setRows] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [selectedRow, setSelectedRow] = React.useState(null)
  const [noData, setNoData] = React.useState(false)
  
  let currentRowData = {}
  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const result = await response.json()
        
        setRows(result);
        setNoData(result.length === 0)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    return () => {}
  }, [URL])
  
  const handleRowClick = (params) => {
    const maChungTu = params.id.replace(/\//g, '-')
    const URLGetOne = `${URL}/bymachungtu/${maChungTu}`
    setSelectedRow({
      URL_ROOT: URL,
      URL: URLGetOne,
      openClick: true,
      currentRowData: currentRowData
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
              URL_ROOT= {selectedRow.URL_ROOT}
              URL={selectedRow.URL}
              currentRowData={selectedRow.currentRowData}
              openClick={true}
              labels={labels}
              name={name}
              tableName={tableName}
              labelsDetail={labelsDetail}
            />
          )
          }
        </>
      )}
    </Box>
  )
}
export default React.memo(DataGridTable)