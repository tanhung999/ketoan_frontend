import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

function DataGridTable ({ URL, columns }) {
  const [rows, setRows] = React.useState([])
  const [loading, setLoading] = React.useState(true)

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

  return (
    <div style={{ height: 760, width: '100%' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 25 }
            }
          }}
          pageSizeOptions={[25, 50, 100]}
          checkboxSelection
          getRowId={(row) => row.cMaChungTu || (row.cTaiKhoan ? row.cTaiKhoan : '')}// Replace 'id' with the actual unique identifier property
        />
      )}
    </div>
  )
}
export default DataGridTable