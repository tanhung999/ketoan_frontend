import DataGridTable from '~/components/Table/DataGridTable'

function PhieuChi () {
  const URL = 'http://localhost:3000/phieuchichitiet'
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã chứng Từ', width: 160 },
    { field: 'cLoaiChungTu', headerName: 'Loại chứng từ', width: 120 },
    { field: 'cSoChungTu', headerName: 'Số chứng từ', width: 120 },
    { field: 'dNgayChungTu', headerName: 'Ngày chứng từ', width: 140 },
    { field: 'cHoTen', headerName: 'Họ tên', width: 120 },
    { field: 'cDiaChi', headerName: 'Địa chỉ', width: 120 },
    { field: 'cMaKhachHang', headerName: 'Mã khách hàng', width: 160 },
    { field: 'cTenKhachHang', headerName: 'Tên khách hàng', width: 130 },
    { field: 'cMaSoThue', headerName: 'MST', width: 100 },
    { field: 'cDienGiai', headerName: 'Diễn giải', width: 160 },
    { field: 'cBieuThue', headerName: 'Biểu thuế', width: 95 },
    { field: 'cSoSeRi', headerName: 'Số SeRi', width: 160 }
  ]
  return (
    <DataGridTable URL={URL} columns={columns} />
  )
}
export default PhieuChi