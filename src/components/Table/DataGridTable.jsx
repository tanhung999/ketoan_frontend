import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import DialogDetail from '../FormDetail/DialogDetail'

function DataGridTable ({ URL, columns }) {
  const [rows, setRows] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [selectedRow, setSelectedRow] = React.useState(null)

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((rows) => {
        setRows(rows)
        setLoading(false)
      })
      .catch((error) => {
        throw new Error('Error fetching data:', error),
        setLoading(false)
      })
  }, [] )
  const handleRowClick = (params) => {
    const maChungTu = params.id.replace(/\//g, '-')
    const URLGetOne =URL+'/bymachungtu/'+maChungTu
    setSelectedRow({
      URL: URLGetOne,
      openClick: true,
    });
  };
  const handleCloseDialog = () => {
    setSelectedRow(null);
  };
  return (
    <Box style={{ height: 500, width: '100%' }}>
      {loading ? (
        <p>Loading...</p>
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
          onRowClick={handleRowClick}
          pageSizeOptions={[25, 50, 100]}
          
          getRowId={(row) => row.cMaChungTu || (row.cTaiKhoan ? row.cTaiKhoan : row.cMaHang )}// Replace 'id' with the actual unique identifier property
        />
        {selectedRow && (
          <DialogDetail
            URL={selectedRow.URL}
            openClick={true}
            
          />
          )
        }
        </>
      )}
    </Box>
  )
}
export default DataGridTable