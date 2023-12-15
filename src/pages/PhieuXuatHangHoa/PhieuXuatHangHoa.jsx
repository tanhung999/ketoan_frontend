import DataGridTable from '~/components/Table/DataGridTable'

function PhieuXuatHangHoa () {
  const URL = 'http://localhost:3000/phieuxuathanghoa'
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã chứng Từ', width: 160 },
    { field: 'dNgayChungTu', headerName: 'Ngày chứng từ', width: 140 },
    { field: 'cMaKhachHang', headerName: 'Mã khách hàng', width: 120 },
    { field: 'cTenKhachHang', headerName: 'Tên khách hàng', width: 120 },
    { field: 'cMaSoThue', headerName: 'MST', width: 160 },
    { field: 'cTaiKhoanNoGiaVon', headerName: 'TK Nợ Giá vốn', width: 130 },
    { field: 'cTaiKhoanCoGiaVon', headerName: 'TK Có Giá vốn', width: 100 },
    { field: 'cTaiKhoanNoGiaBan', headerName: 'TK Nợ Giá bán', width: 160 },
    { field: 'cTaiKhoanCoGiaBan', headerName: 'TK Có Giá bán', width: 95 },
    { field: 'cTaiKhoanCoGTGT', headerName: 'TK Có GTGT', width: 160 },
    { field: 'cDienGiai', headerName: 'Diễn giải', width: 120 },
    { field: 'cMatHang', headerName: 'Mặt hàng', width: 120 }
  ]

  return (
    <DataGridTable
      URL={URL}
      columns={columns}
    />
  )
}

export default PhieuXuatHangHoa