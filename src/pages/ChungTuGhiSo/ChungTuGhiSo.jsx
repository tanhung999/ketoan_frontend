import DataGridTable from '~/components/Table/DataGridTable'

function ChungTuGhiSo () {
  const URL = 'http://localhost:3000/chungtughiso'
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã chứng Từ', width: 160 },
    { field: 'cLoaiChungTu', headerName: 'Loại chứng từ', width: 120 },
    { field: 'cSoChungTu', headerName: 'Số chứng từ', width: 120 },
    { field: 'dNgayChungTu', headerName: 'Ngày chứng từ', width: 140 },
    { field: 'cHoTen', headerName: 'Họ tên', width: 120 },
    { field: 'cMaKhachHangNo', headerName: 'Mã KH Nợ', width: 120 },
    { field: 'cTenKhachHangNo', headerName: 'Tên KH Nợ', width: 160 },
    { field: 'cMaSoThueNo', headerName: 'MST Nợ', width: 130 },
    { field: 'cMaKhachHangCo', headerName: 'Mã KH Có', width: 100 },
    { field: 'cTenKhachHangCo', headerName: 'Tên KH Có', width: 160 },
    { field: 'cMaSoThueCo', headerName: 'MST Có', width: 95 },
    { field: 'cDienGiai', headerName: 'Diễn giải', width: 160 }
    // { field: 'cBieuThue', headerName: 'Biểu thuế', width: 80 },
    // { field: 'cSoSeRi', headerName: 'Số SeRi', width: 80 },
    // { field: 'cSoHoaDon', headerName: 'Số hoá đơn', width: 100 },
    // { field: 'dNgayHoaDon', headerName: 'Ngày hoá đơn', width: 140 },
    // { field: 'nThueSuat', headerName: 'Thuế suất', width: 80 },
    // { field: 'nThueGTGT', headerName: 'Thuế GTGT', width: 80 },
    // { field: 'cMatHang', headerName: 'Mặt hàng', width: 130 }
  ]
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
    />
  )
}
export default ChungTuGhiSo