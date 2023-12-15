
// import * as React from 'react'
// import { DataGrid } from '@mui/x-data-grid'
import DataGridTable from '~/components/Table/DataGridTable'

function ChungTuKetChuyen() {
  // const [chungTuKetChuyen, setChungTuKetChuyen] = React.useState([])
  // const [loading, setLoading] = React.useState(true)

  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã Chứng Từ', width: 160 },
    { field: 'cLoaiChungTu', headerName: 'Loại Chứng Từ', width: 160 },
    { field: 'cSoChungTu', headerName: 'Số Chứng Từ', width: 160 },
    { field: 'dNgayChungTu', headerName: 'Ngày Chứng Từ', width: 160 },
    { field: 'cDienGiai', headerName: 'Diễn Giải', width: 250 }
  ]
  const URL = 'http://localhost:3000/chungtuketchuyen'

  return (
    <DataGridTable
      URL={URL}
      columns={columns}
    />
  )
}

export default ChungTuKetChuyen